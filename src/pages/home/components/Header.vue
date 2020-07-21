<template>
    <div class="header">
        <div class="header-left">
            <span class="icofont icofont-caret-left header-left-icon"></span>
        </div>
        <div class="header-input">
            <span class="icofont icofont-search"></span>
            Search ...
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{ this.doubleCity }}
                <span class="icofont icofont-caret-down header-right-icon"></span>
            </div>
        </router-link>
    </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'HomeHeader',
    computed: {
      ...mapState(['city']),
      ...mapGetters(['doubleCity'])
    },
  }
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .header
        display flex
        line-height $headerHeight
        background $bgColor
        color white
        height $headerHeight

        .header-left
            width .64rem
            float left

            .header-left-icon
                text-align center
                font-size .5rem
                margin-left .15rem
                line-height $headerHeight

        .header-right
            min-width 1.04rem
            padding 0 .1rem
            float right
            text-align center
            color: white

            .header-right-icon
                font-size: .24rem
                line-height $headerHeight

        .header-input
            flex 1
            height .64rem
            margin-top .12rem
            margin-left .2rem
            padding-left .2rem
            background white
            border-radius .1rem
            color #ccc
            line-height .64rem
</style>
