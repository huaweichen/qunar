<template>
    <div>
        <div class="title">Recommend:</div>
        <ul>
            <li class="item border-bottom" v-for="recommend of recommends" :key="recommend.id">
                <img class="item-img" :src="recommend.imgSrc" :alt="recommend.name">
                <div class="item-info">
                    <p class="item-info-title">{{ recommend.name }}</p>
                    <p class="item-info-description">{{ recommend.description }}</p>
                    <button class="item-info-button">More ...</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    data () {
      return {
        recommends: [
          {
            id: 1,
            name: 'Shear Water',
            description: 'Good for beginners on Low tide.',
            imgSrc: require('images/recommend-1.jpg')
          },
          {
            id: 2,
            name: 'Sparta Arena',
            description: 'This multifunctional building.',
            imgSrc: require('images/recommend-2.jpg')
          },
          {
            id: 3,
            name: 'Flagstone Water',
            description: 'A stunning state-of-the-art water park.',
            imgSrc: require('images/recommend-3.jpg')
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    @import '~styles/mixins.styl'
    .title
        margin-top .2rem
        line-height .6rem
        background #E4E5EA
        text-indent .2rem

    .item
        display flex
        height 1.9rem
        overflow hidden

        .item-img
            height 1.7rem
            width 1.7rem
            padding .1rem

        .item-info
            flex 1
            padding .1rem
            min-width 0

            .item-info-title
                line-height .54rem
                font-size .32rem
                ellipse()
            .item-info-description
                line-height .4rem
                color #999999
                ellipse()
            .item-info-button
                padding 0 .2rem
                border-radius .06rem
                background #ff9300
                color #ffffff
                line-height .44rem
                margin-top .16rem
</style>
