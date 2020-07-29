<template>
    <div>
        <div
            class="item"
            v-for="(item, index) of list"
            :key="index"
        >
            <div class="item-title border-topbottom">
                <span class="item-title-icon"><i class="icofont-ticket"></i></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="children-item">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'DetailList',
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
    .item-title-icon
        display inline-block
        width .36rem
        height .36rem
        background-size .4rem 3rem
    .item-title
        line-height .8rem
        font-size .32rem
        padding 0 .2rem

    .children-item
        padding 0 .2rem
</style>