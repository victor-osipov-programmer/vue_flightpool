<template>
    <section class="search">
        <div class="container search__container">
            <form class="form search-form" @submit.prevent="search">
                <input v-model="form.from.text" class="input" placeholder="Откуда" type="text" />
                <input v-model="form.to.text" class="input" placeholder="Куда" type="text" />
                <input v-model="form.date1.text" class="input" placeholder="Туда" type="date" />
                <input v-model="form.date2.text" class="input" placeholder="Обратно" type="date" />
                <input v-model="form.passengers.text"
                    class="input search-number"
                    placeholder="Кол-во пассажиров"
                    type="number"
                />
                <button class="input search-btn" type="submit">Поиск</button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useForm } from '@/composables/form';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const form = ref({
    'from': {text: '', props: {required: true}},
    'to': {text: '', props: {required: true}},
    'date1': {text: '', props: {required: true}},
    'date2': {text: ''},
    'passengers': {text: null, props: {required: true}},
})

const { data } = useForm(form)

function search() {
    console.log(data.value);
    
    router.push({name: 'search', query: data.value})
}
</script>

<style scoped>

</style>