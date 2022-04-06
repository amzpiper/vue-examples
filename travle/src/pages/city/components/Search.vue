<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <div v-show="keyword" class="search-content" ref="searchKeyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  components: {
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.searchKeyword, {
      click: true
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
    .search
        height :.63rem
        background-color :$bgColor
        padding :0.1rem
        .search-input
            height :.62rem
            width :100%
            line-height :.62rem
            text-align :center
            border-radius :.06rem
            color :#111
            padding :0.1rem
            box-sizing :border-box
    .search-content
        z-index :99
        background :#eee
        overflow :hidden
        position :absolute
        top :1.7rem
        left :0
        right :0
        bottom :0
        .search-item
            background :#fff
            line-height :.62rem
            padding-left :.2rem
            color :#666
</style>
