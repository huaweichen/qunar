<template>
    <div>
        <home-header/>
        <home-swiper :swiperList="swiperList"/>
        <home-icons :iconList="iconList"/>
        <home-recommend :recommendList="recommendList"/>
        <home-weekend :weekendList="weekendList"/>
    </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend,
    },
    data () {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
      }
    },
    methods: {
      getData() {
        axios.get('/api/data.json')
        .then((result) => {
          console.log(result)
          const data = result.data.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        })
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>

<style>

</style>
