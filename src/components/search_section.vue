<template>
    <section class="search">
        <div class="container search__container">
            <form class="form search-form" @submit.prevent="search">
                <input list="airports_from" v-model="form.from.text" class="input" placeholder="Откуда" type="text" />
                <input list="airports_to" v-model="form.to.text" class="input" placeholder="Куда" type="text" />

                <input v-model="form.date1.text" class="input" placeholder="Туда" type="date" />
                <input v-model="form.date2.text" class="input" placeholder="Обратно" type="date" />

                <input v-model="form.passengers.text"
                    class="input search-number"
                    placeholder="Кол-во пассажиров"
                    type="number"
                />
                <button class="input search-btn" type="submit">Поиск</button>

                <datalist id="airports_from">
                    <option v-for="airport in airports_from" :value="airport.iata">{{ airport.name }}</option>
                </datalist>
                <datalist id="airports_to">
                    <option v-for="airport in airports_to" :value="airport.iata">{{ airport.name }}</option>
                </datalist>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useForm } from '@/composables/form';
import { getAirports, type IAirportMin } from '@/models/airport';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const form = ref({
    'from': {text: 'SVO', props: {required: true}},
    'to': {text: 'KZN', props: {required: true}},
    'date1': {text: '2020-10-01', props: {required: true}},
    'date2': {text: '2020-10-10'},
    'passengers': {text: 1, props: {required: true}},
})

const { data } = useForm(form)

function search() {
    console.log(data.value);
    
    router.push({name: 'search', query: data.value})
}

const airports_from = ref<IAirportMin[]>([])
const airports_to = ref<IAirportMin[]>([])

watch(() => form.value.from.text, async () => {
    airports_from.value = await getAirports(form.value.from.text)
})
watch(() => form.value.to.text, async () => {
    airports_to.value = await getAirports(form.value.to.text)
})
</script>

<style scoped>

</style>