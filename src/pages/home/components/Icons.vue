<template>
    <div class="home-icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="icon of page" :key="icon.id">
                    <div class="icon-image">
                        <img class="icon-image-content" :src="icon.imgSrc" :alt="icon.altName">
                    </div>
                    <p class="icon-description">{{ icon.description }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    data () {
      return {
        iconList: [
          {
            id: 1,
            imgSrc: require('images/flight.png'),
            altName: 'Flight',
            description: 'Flight',
          },
          {
            id: 2,
            imgSrc: require('images/train.png'),
            altName: 'Train',
            description: 'Train',
          },
          {
            id: 3,
            imgSrc: require('images/piao.png'),
            altName: 'Ticket',
            description: 'Ticket',
          },
          {
            id: 4,
            imgSrc: require('@/assets/images/hotel.png'),
            altName: 'Hotel',
            description: 'Hotel',
          },
          {
            id: 5,
            imgSrc: require('images/package.png'),
            altName: 'Package',
            description: 'Package',
          },
          {
            id: 6,
            imgSrc: require('images/pagoda.png'),
            altName: 'Package',
            description: 'Special',
          },
          {
            id: 7,
            imgSrc: require('images/horse.png'),
            altName: 'Hotel',
            description: 'Restaurant',
          },
          {
            id: 8,
            imgSrc: require('images/hiking.png'),
            altName: 'Train',
            description: 'Hot Hot Hot Hot',
          },
          {
            id: 9,
            imgSrc: require('images/hall.png'),
            altName: 'Train',
            description: 'Hot Deal',
          },
          {
            id: 10,
            imgSrc: require('images/castle.png'),
            altName: 'Train',
            description: 'Hot Food',
          },
          {
            id: 11,
            imgSrc: require('images/scenary.png'),
            altName: 'Train',
            description: 'Hot Water',
          },
          {
            id: 12,
            imgSrc: require('images/one-day.png'),
            altName: 'Train',
            description: 'Hot Dog',
          },
          {
            id: 13,
            imgSrc: require('images/flower.png'),
            altName: 'Train',
            description: 'Hot Woman',
          },
        ],
      }
    },
    computed: {
      pages () {
        const pages = []

        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (typeof pages[page] === 'undefined') {
            pages[page] = []
          }
          pages[page].push(item)
        })

        return pages
      },
    },
  }
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    @import '~styles/mixins.styl'
    .home-icons >>> .swiper-container
        height 0
        padding-bottom 50%

    .home-icons
        overflow hidden
        height 0
        padding-bottom 50%
        margin-top .2rem

        .icon
            float left
            width 25%
            height 0
            padding-bottom 25%
            position relative

            .icon-image
                position absolute
                top: 0
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding .1rem

                .icon-image-content
                    display block
                    margin 0 auto
                    height 100%

            .icon-description
                position absolute
                bottom: 0
                left 0
                right 0
                height .44rem
                line-height .44rem
                color $darkTextColor
                text-align center
                ellipse()
</style>
