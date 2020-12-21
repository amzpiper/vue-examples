<template>
    <div>
        <div class="recommend-title">周末去哪</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                  <img class="item-img" :src="item.imgUrl" >
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Weakend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/mixins.styl"
    .recommend-title
        line-height :.8rem
        background-color :#eee
        text-indent :.2rem
    .item-img-wrapper
        height :0
        padding-bottom :37.09%
        overflow :hidden
        .item-img
            width :100%
    .item-info
        padding :.1rem
        flex :1
        .item-title
            line-height :.54rem
            font-size :.32rem
            ellipsis()
        .item-desc
            line-height :.4rem
            color :#ccc
            ellipsis()
</style>
