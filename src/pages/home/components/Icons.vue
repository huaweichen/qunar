<template>
    <div class="home-icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="icon of page" :key="icon.id">
                    <div class="icon-image">
                        <img class="icon-image-content" :src="icon.imgUrl" :alt="icon.desc">
                    </div>
                    <p class="icon-description">{{ icon.desc }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    props: {
      iconList: Array
    },
    data () {
      return {
        swiperOption: {
          autoplay: false
        }
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
