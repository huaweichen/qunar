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
  import { mapState } from 'vuex'

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
        lastCity: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
      }
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      getData() {
        axios.get('/api/data.json?city=' + this.city)
        .then((result) => {
          const data = result.data.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        })
      }
    },
    mounted() {
      this.lastCity = this.city
      this.getData()
    },
    activated () {
      if (this.city !== this.lastCity) {
        this.lastCity = this.city
        this.getData()
      }
    }
  }
</script>

<style>

</style>
