<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont font-right">&#xe658;</div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl';
  .header
    position :relative
    overflow :hidden
    height :$headerHeight
    line-height :$headerHeight
    text-align :center
    color :#fff
    background-color :$bgColor
    .font-right
        position :absolute
        width :.64rem
        top :0
        left :0
        text-align :center
        font-size:.3rem
        color :#fff
</style>
