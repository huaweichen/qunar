<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword">
        </div>
        <div
                class="search-content"
                v-show="keyword"
                ref="searchRef"
        >
            <ul>
                <li
                        class="search-item border-bottom"
                        v-for="item of list"
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                >
                    {{ item.name }}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {useStore} from 'vuex'
    import {useRouter} from 'vue-router'
    import {ref, computed, watch, onMounted} from "vue";

    export default {
        name: 'CitySearch',
        props: {
            cities: Object,
        },
        setup(props) {
            const keyword = ref('')
            const list = ref([])
            let timer = null
            const hasNoData = computed(() => {
                !list.value.length
            })
            const store = useStore()
            const router = useRouter()
            const searchRef = ref('')

            watch(keyword, (currentKeyword, prevKeyword) => {
                if (timer) {
                    clearTimeout(timer)
                    timer = null
                }

                if (!currentKeyword) {
                    list.value = []
                    return
                }

                timer = setTimeout(() => {
                    const result = []
                    for (let i in props.cities) {
                        props.cities[i].forEach((value) => {
                            if (value.spell.indexOf(currentKeyword) > -1 || value.name.indexOf(currentKeyword) > -1) {
                                result.push(value)
                            }
                        })
                    }

                    list.value = result
                }, 100)
            })

            function handleCityClick(city) {
                store.commit('changeCity', city)
                router.push('/')
            }

            onMounted(() => {
                new BScroll(searchRef.value, {
                    click: true
                })
            })

            return {
                keyword,
                list,
                timer,
                hasNoData,
                handleCityClick,
                searchRef
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .search
        height .72rem
        padding 0 .1rem
        background $bgColor

        .search-input
            box-sizing border-box
            width 100%
            height .62rem
            padding 0 .1rem
            line-height .62rem
            text-align center
            border-radius .06rem
            color #666666

    .search-content
        z-index 1
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        background #eeeeee

        .search-item
            line-height .62rem
            padding-left .2rem
            color #666666
            background #ffffff
</style>