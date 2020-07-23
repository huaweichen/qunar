<template>
    <div>
        <div class="title">Recommend:</div>
        <ul>
            <router-link
                    tag="li"
                    class="item border-bottom"
                    :key="recommend.id"
                    :to="'/detail/' + recommend.id"
                    v-for="recommend of recommendList">
                <img class="item-img" :src="recommend.imgUrl" :alt="recommend.title">
                <div class="item-info">
                    <p class="item-info-title">{{ recommend.title }}</p>
                    <p class="item-info-description">{{ recommend.desc }}</p>
                    <button class="item-info-button">More ...</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
      recommendList: Array
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
