<template>
    <div>
        <detail-banner
                :sightName="sightName"
                :bannerImg="bannerImg"
                :galleryImgs="galleryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailList from './components/List'
    import axios from 'axios'
    import {onMounted, ref} from "vue";
    import {useRoute} from "vue-router";

    export default {
        name: 'Detail',
        components: {
            DetailBanner,
            DetailHeader,
            DetailList,
        },
        setup() {
            const sightName = ref('')
            const bannerImg = ref('')
            const galleryImgs = ref([])
            const list = ref([])
            const route = useRoute()

            async function getDetailInfo() {
                let res = await axios.get('/api/detail.json', {
                    params: {
                        id: route.params.id,
                    },
                })

                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    sightName.value = data.sightName
                    bannerImg.value = data.bannerImg
                    galleryImgs.value = data.galleryImgs
                    list.value = data.categoryList
                }
            }

            onMounted(() => {
                getDetailInfo()
            })

            return {
                sightName,
                bannerImg,
                galleryImgs,
                list,
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>