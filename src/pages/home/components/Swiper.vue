<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img height="128" class="swiper-image" :src="item.imgUrl" alt="Brisbane"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
        },
        swiperList: [
          {
            id: '1',
            imgUrl: require('@/assets/images/brisbane-1.jpg'),
          }, {
            id: '2',
            imgUrl: require('@/assets/images/brisbane-2.jpg'),
          }, {
            id: '3',
            imgUrl: require('@/assets/images/brisbane-3.jpg'),
          }, {
            id: '4',
            imgUrl: require('@/assets/images/brisbane-4.jpg'),
          }, {
            id: '5',
            imgUrl: require('@/assets/images/brisbane-5.jpg'),
          }],
      }
    },
  }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background white

    .wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 31.25%
        background #E4E5EA

        .swiper-image
            width 100%
</style>