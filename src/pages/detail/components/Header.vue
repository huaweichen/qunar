<template>
    <div>
        <router-link tag="div" to="/" class="header-absolute" v-show="showAbs">
            <span class="icofont icofont-caret-left header-left-icon"></span>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <span class="icofont icofont-caret-left header-left-icon"></span>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
    import {reactive, ref, onMounted, onUnmounted} from "vue";

    export default {
        name: 'DetailHeader',
        setup() {
            const showAbs = ref(true)
            const opacityStyle = reactive({
                opacity: 0
            })
            function handleScroll () {
                const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
                if (top > 60) {
                    let opacity = top / 140
                    opacity = opacity > 1 ? 1 : opacity
                    opacityStyle.opacity = opacity
                    showAbs.value = false
                } else {
                    showAbs.value = true
                }
            }

            onMounted(() => {
                window.addEventListener('scroll', handleScroll)
            })

            onUnmounted(() => {
                window.addEventListener('scroll', handleScroll)
            })

            return {
                showAbs,
                opacityStyle,
                handleScroll
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .header-absolute
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        border-radius .4rem
        background rgba(0, 0, 0, .8)
        text-align center
        line-height .9rem

        .header-left-icon
            color white
            font-size .4rem

    .header-fixed
        z-index 2
        position fixed
        top 0
        left 0
        right 0
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