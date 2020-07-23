<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img"
                 src="http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_600x330_1abc2773.jpg"/>
            <div class="banner-info">
                <div class="banner-title">北京野生动物园(AAAA景区)</div>
                <div class="banner-number"><span class="icofont icofont-ui-image banner-icon"></span> 31</div>
            </div>
        </div>
        <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
    </div>
</template>

<script>
  import CommonGallery from 'common/gallery/Gallery'

  export default {
    name: 'DetailBanner',
    components: {
      CommonGallery,
    },
    data () {
      return {
        showGallery: false,
        imgs: [
          'http://img1.qunarzz.com/sight/p0/1910/4c/4c37b700669d97f8a3.img.jpg_350x240_0b5ffd6f.jpg',
          'http://img1.qunarzz.com/sight/p0/1908/99/99bb0e08aa33355ba3.img.jpg_350x240_8743a865.jpg',
          'http://img1.qunarzz.com/sight/p0/1910/cd/cd46ea8d008759c3a3.img.jpg_350x240_252dd143.jpg',
        ],
      }
    },
    methods: {
      handleBannerClick () {
        this.showGallery = true
      },
      handleGalleryClose () {
        this.showGallery = false
      }
    },
  }
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%

        .banner-img
            width 100%

        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color white
            background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem

            .banner-number
                height .32rem
                margin-top .14rem
                padding 0 .4rem
                line-height .32rem
                border-radius .2rem
                background rgba(0, 0, 0, .8)
                font-size .24rem

                .banner-icon
                    font-size .24rem
</style>