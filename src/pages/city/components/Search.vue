<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
  export default {
    name: 'CitySearch'
  }
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .search
        padding 0 .1rem
        height .72rem
        background $bgColor

        .search-input
            height .62rem
            text-align center
            box-sizing border-box
            padding 0 .1rem
            border-radius .06rem
            width 100%
            line-height .62rem
            color #666666
</style>