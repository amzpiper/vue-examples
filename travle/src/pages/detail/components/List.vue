<template>
    <div>
        <div class="item" v-for="(item, index) of list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  data () {
    return {
    }
  },
  activated () {
  },
  deactivated () {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/varibles.styl"
.item-title
    line-height :.8rem
    font-size :.32rem
    padding :0 .2rem
    .item-title-icon
        position :relative
        left :.06rem
        top :.09rem
        display :inline-block
        width :.36rem
        height :.36rem
        background :url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.4rem no-repeat
        margin-right :.1rem
        background-size :100%
.item-children
    padding : 0 .2rem
</style>
