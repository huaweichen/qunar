<template>
    <div class="list" ref="wrapperRef">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{ currentCity }}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id"
                         @click="handleCityClick(item.name)">
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="element => cityRef[key] = element">
                <div class="title border-topbottom">{{ key }}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id"
                         @click="handleCityClick(innerItem.name)">{{ innerItem.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {watch, ref, onMounted} from 'vue'
    import {mapState, mapMutations, useStore} from 'vuex'
    import {useRouter} from "vue-router";

    export default {
        name: 'CityList',
        props: {
            cities: Object,
            hotCities: Array,
            letter: String
        },
        setup(props) {
            const store = useStore()
            const router = useRouter()
            const cityRef = ref({})
            let scroll = null
            const wrapperRef = ref(null)

            const currentCity = store.state.city

            function handleCityClick (city) {
                store.commit('changeCity', city)
                router.push('/')
            }

            watch(() => props.letter, (newLetter, prevLetter) => {
                if (newLetter && scroll) {
                    const element = cityRef.value[newLetter.trim()]
                    scroll.scrollToElement(element)
                }
            })

            onMounted(() => {
                scroll = new BScroll(wrapperRef.value, {click: true})
            })

            return {
                currentCity,
                handleCityClick,
                cityRef,
                wrapperRef
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .border-topbottom
        &:before
            border-color #CCCCCC

        &:after
            border-color #CCCCCC

    .border-bottom
        &:before
            border-color #CCCCCC

    .list
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        overflow hidden

        .title
            line-height .54rem
            background #EEEEEE
            padding-left .2rem
            color #666666
            font-size .26rem

        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden

            .button-wrapper
                float left
                width 33.33%

                .button
                    margin .1rem
                    padding .1rem 0
                    text-align center
                    border .02rem solid #CCCCCC
                    border-radius .06rem

        .item-list
            .item
                line-height .76rem
                padding-left .2rem
</style>