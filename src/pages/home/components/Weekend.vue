<template>
    <div>
        <div class="title">Weekend:</div>
        <ul>
            <li class="item border-bottom" v-for="recommend of weekendList" :key="recommend.id">
                <div class="item-image-wrapper">
                    <img class="item-img" :src="recommend.imgUrl" :alt="recommend.title">
                </div>
                <div class="item-info">
                    <p class="item-info-title">{{ recommend.title }}</p>
                    <p class="item-info-description">{{ recommend.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    props: {
      weekendList: Array
    },
    data () {
      return {
        // recommends: [
        //   {
        //     id: 1,
        //     name: 'Super Start Arena',
        //     description: 'This multifunctional building',
        //     imgSrc: require('images/weekend-1.jpg'),
        //   },
        //   {
        //     id: 2,
        //     name: 'Pagoda',
        //     description: 'A good place to worship',
        //     imgSrc: require('images/weekend-2.jpg'),
        //   },
        //   {
        //     id: 3,
        //     name: 'Birds Market',
        //     description: 'A good market with birds bargains',
        //     imgSrc: require('images/weekend-3.jpg'),
        //   },
        //   {
        //     id: 4,
        //     name: 'Zebra Feeding',
        //     description: 'Feed the zebras',
        //     imgSrc: require('images/weekend-4.jpg'),
        //   },
        //   {
        //     id: 5,
        //     name: 'Trees',
        //     description: 'Trees, a lot of trees',
        //     imgSrc: require('images/weekend-5.jpg'),
        //   },
        // ],
      }
    },
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
    .item-image-wrapper
        height 0
        overflow hidden
        padding-bottom 33.9%

        .item-img
            width 100%

    .item-info
        padding .2rem .2rem .6rem .2rem

        .item-info-title
            line-height .54rem
            font-size .32rem
            ellipse()

        .item-info-description
            line-height .4rem
            color #999999
            ellipse()
</style>
