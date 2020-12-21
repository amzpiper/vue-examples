<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  setup () {
      const sightName = ref('')
      const bannerImg = ref('')
      const gallaryImgs = ref([])
      const list = ref([])
      const route = useRoute()

      async function getDetailInfo () {
        let res = await axios.get('/api/detail.json?', {
          params: { id: route.params.id }
        })
        res = res.data
        if (res.ret && res.data) {
          const result = res.data
          sightName.value = result.sightName
          bannerImg.value = result.bannerImg
          gallaryImgs.value = result.gallaryImgs
          list.value = result.categoryList
        }
      }

      onMounted ( () => {
        getDetailInfo()
      })
      return { sightName, bannerImg, gallaryImgs, list }
  }
}
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/mixins.styl"
    .content
        height :50rem
</style>
