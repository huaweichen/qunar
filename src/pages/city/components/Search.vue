<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword">
        </div>
        <div class="search-content" ref="searchs" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{ item.name }}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'CitySearch',
    props: {
      cities: Object,
    },
    methods: {
      handleCityClick (city) {
        this.$store.dispatch('changeCity', city)
        this.$router.push('/')
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.searchs)
    },
    data () {
      return {
        keyword: '',
        list: [],
        timer: null,
      }
    },
    computed: {
      hasNoData() {
        return !this.list.length
      }
    },
    watch: {
      keyword () {
        if (this.timer) {
          clearTimeout(this.timer)
        }

        if (!this.keyword) {
          this.list = []
          return
        }

        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }

          this.list = result
        }, 100)
      },
    },
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

    .search-content
        z-index 1
        position absolute
        top 1.58rem
        left 0
        right 0
        botton 0
        overflow hidden
        background #eeeeee

        .search-item
            line-height .62rem
            padding-left .2rem
            color #666666
            background #ffffff
</style>