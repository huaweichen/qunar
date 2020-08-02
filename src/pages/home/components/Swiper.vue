<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="swiperShow">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img height="128" class="swiper-image" :src="item.imgUrl" alt="Beijing"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import {computed} from "vue";

    export default {
        name: 'HomeSwiper',
        props: {
            swiperList: Array
        },
        setup(props) {
            const data = {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                }
            }

            const swiperShow = computed(() => props.swiperList.length > 0)

            return {
                data,
                swiperShow
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background white

    .wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 34.25%
        background #E4E5EA

        .swiper-image
            width 100%
</style>