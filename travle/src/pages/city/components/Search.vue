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
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed, onMounted, ref, watch } from 'vue'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  setup (props) {
      const store = useStore()
      const router = useRouter()
      const keyword = ref('')
      const list = ref([])
      const searchKeyword = ref(null)
      let timer = null

      const hasNoData = computed( () => {
        !list.length
      })

      watch(keyword, (keyword, preKeyword) => {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        if (!keyword) {
          list.value = []
          return
        }
        timer = setTimeout(() => {
          const result = []
          for (let i in props.cities) {
            props.cities[i].forEach((value) => {
              if (value.spell.indexOf(keyword) > -1 || value.name.indexOf(keyword) > -1) {
                result.push(value)
              }
            })
          }
          list.value = result
        }, 100)
      })

      onMounted( () => {
        new BetterScroll(searchKeyword.value, {
          click: true
        })
      })

      function handleCityClick (city) {
        store.commit('changeCity', city)
        router.push('/')
      }
      
      return { keyword, list, hasNoData, searchKeyword, handleCityClick }
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
