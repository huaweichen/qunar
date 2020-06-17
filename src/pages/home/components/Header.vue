<template>
    <div class="header">
        <div class="header-left">
            <span class="icofont icofont-caret-left header-left-icon"></span>
        </div>
        <div class="header-input">
            <span class="icofont icofont-search"></span>
            Search ...
        </div>
        <div class="header-right">
            City
            <span class="icofont icofont-caret-down header-right-icon"></span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'HomeHeader',
  }
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .header
        display flex
        line-height .86rem
        background $bgColor
        color white
        height .86rem

        .header-left
            width .64rem
            float left

            .header-left-icon
                text-align center
                font-size .5rem
                margin-left .15rem
                line-height .86rem

        .header-right
            width 1.24rem
            float right
            text-align center

            .header-right-icon
                font-size: .24rem
                line-height .86rem

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
