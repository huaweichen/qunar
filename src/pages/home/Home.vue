<template>
    <div>
        <home-header/>
        <home-swiper :swiperList="swiperList"/>
        <home-icons :iconList="iconList"/>
        <home-recommend :recommendList="recommendList"/>
        <home-weekend :weekendList="weekendList"/>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weekend'
    import axios from 'axios'
    import {useStore} from 'vuex'
    import {ref, onMounted} from 'vue'

    export default {
        name: 'Home',
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend,
        },
        setup() {
            const swiperList = ref([])
            const iconList = ref([])
            const recommendList = ref([])
            const weekendList = ref([])
            const store = useStore()
            const city = store.state.city

            async function getData() {
                const res = await axios.get('/api/data.json?city=' + city)
                if (res.data.data) {
                    const resultData = res.data.data
                    swiperList.value = resultData.swiperList
                    iconList.value = resultData.iconList
                    recommendList.value = resultData.recommendList
                    weekendList.value = resultData.weekendList
                }
            }

            onMounted(() => {
                getData()
            })

            return {
                swiperList,
                iconList,
                recommendList,
                weekendList,
            }
        },
    }
</script>
