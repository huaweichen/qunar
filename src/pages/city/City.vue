<template>
    <div>
        <city-header></city-header>
        <city-search :cities="data.cities"></city-search>
        <city-list
                :cities="data.cities"
                :hotCities="data.hotCities"
                :letter="letter"
        ></city-list>
        <city-alphabet
                :cities="data.cities"
                @change="handleLetterChange"
        ></city-alphabet>
    </div>
</template>

<script>
    import axios from 'axios'
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityList from './components/List'
    import CityAlphabet from './components/Alphabet'
    import {reactive, onMounted, ref} from 'vue'

    export default {
        name: 'City',
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet,
        },
        setup() {
            // Alphabetic letter related.
            const {handleLetterChange, letter} = useLetterLogic()
            // City related.
            const {data} = useCityLogic()

            return {
                data,
                letter,
                handleLetterChange
            }
        },
    }

    function useLetterLogic() {
        const letter = ref('')

        function handleLetterChange(selectedLetter) {
            letter.value = selectedLetter
        }

        return {letter, handleLetterChange}
    }

    function useCityLogic() {
        const data = reactive({
            cities: {},
            hotCities: [],
        })

        async function getCityInfo() {
            const res = await axios.get('/api/city.json');
            const result = res.data
            if (result.ret === true && result.data) {
                data.cities = result.data.cities
                data.hotCities = result.data.hotCities
            }
        }

        onMounted(() => {
            getCityInfo()
        })

        return {data}
    }
</script>

<style lang="stylus" scoped>

</style>