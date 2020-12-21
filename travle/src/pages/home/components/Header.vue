<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont font-left">&#xe658;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe63c;</span>
            输入城市/景点/主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{city}}
                <span class="iconfont font-right">&#xe65c;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'Header',
  setup() {
    const store = useStore()
    const city = store.state.city
    return { city }
  }
}
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl";
    .header
        display : flex
        height : $headerHeight
        background : $bgColor
        color : #fff
        line-height: $headerHeight
        .header-left
            width : .64rem
            float : left
            text-align : center
            margin-left: .2rem
            .font-left
                font-size:.4rem
        .header-input
            flex: 1
            float : left
            padding-left:.1rem
            margin-top :.12rem
            margin-bottom :.12rem
            margin-left: .2rem
            background : #ffffff
            border-radius : .1rem
            line-height: 0.64rem;
            color : #ccc
        .header-right
            min-width : 1.24rem
            float : right
            color : #fff
            padding-left:.1rem
            padding-right:.1rem
            text-align : center
            .font-right
                font-size:.3rem
</style>
