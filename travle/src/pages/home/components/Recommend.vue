<template>
    <div>
        <div class="recommend-title">热门推荐</div>
        <ul>
            <router-link tag="li" :to="/detail/ + item.id" class="item border-bottom" v-for="item of list" :key="item.id">
                <img class="item-img" :src="item.imgUrl" >
                <div class="item-info">
                    <p class="item-title">{{item.id}}:{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Recommend',
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
        margin-top :.2rem
    .item
        display :flex
        height :1.9rem
        overflow :hidden
        min-width :0
    .item-img
        width :1.7rem
        height :1.7rem
        padding :.1rem
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
        .item-button
            margin-top :.16rem
            color :#fff
            line-height :.44rem
            background-color :#ff9300
            padding :0 .1rem
            border-radius :.06rem
</style>
