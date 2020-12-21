<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="data.swiperList"></home-swiper>
        <home-icons :list="data.iconList"></home-icons>
        <home-recommend :list="data.recommendList"></home-recommend>
        <home-weakend :list="data.weekendList"></home-weakend>
    </div>
</template>

<script>

// Composition API
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeakend from './components/Weakend'
import axios from 'axios'
// import { mapState } from 'vuex'
import { useStore } from 'vuex'
import { reactive, onMounted } from 'vue'
// 对象推荐用 reactive,普通基本类型推荐使用ref
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeakend
  },
  setup () {
    const data = reactive({
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    })
    const store = useStore();
    const city = store.state.city
    async function getHomeInfo () {
      let res = await axios.get('/api/index.json?city=' + city)
      res = res.data
      console.log(res)
      if (res.ret && res.data) {
        const result = res.data
        data.city = result.city
        data.swiperList = result.swiperList
        data.iconList = result.iconList
        data.recommendList = result.recommendList
        data.weekendList = result.weekendList
      }
    }
    onMounted(() => {
      data.lastCity = city
      getHomeInfo()
    })
    // onActivated暂时并不生效，暂时不用这个优化功能了
    // onActivated (() => {
    //   if (data.lastCity !== city) {
    //     getHomeInfo()
    //     data.lastCity = city
    //   }
    // })
    return {
      data,
      city
    }
  }
  // data () {
  //   return {
  //     lastCity: '',
  //     swiperList: [],
  //     iconList: [],
  //     recommendList: [],
  //     weekendList: []
  //   }
  // },
  // mounted () {
  //   this.lastCity = this.currentCity
  //   this.getHomeInfo()
  // },
  // computed: {
  //   ...mapState({
  //     currentCity: 'city'
  //   })
  // },
  // methods: {
  //   getHomeInfo () {
  //     axios.get('/api/index.json?city=' + this.currentCity).then(this.getHomeInfoSucc)
  //   },
  //   getHomeInfoSucc (res) {
  //     res = res.data
  //     if (res.ret && res.data) {
  //       const data = res.data
  //       this.city = data.city
  //       this.swiperList = data.swiperList
  //       this.iconList = data.iconList
  //       this.recommendList = data.recommendList
  //       this.weekendList = data.weekendList
  //     }
  //   }
  // },
  // activated () {
  //   if (this.lastCity !== this.currentCity) {
  //     this.getHomeInfo()
  //     this.lastCity = this.currentCity
  //   }
  // }
}
</script>

<style>

</style>
