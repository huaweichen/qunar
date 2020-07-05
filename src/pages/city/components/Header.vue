<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <span class="icofont icofont-caret-left header-left-icon"></span>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .header
        position relative
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        color white
        background $bgColor
        font-size .32rem

        .header-left-icon
            position absolute
            top 0
            left 0
            line-height $headerHeight
            width .64rem
            text-align center
            font-size .4rem
            color white
</style>