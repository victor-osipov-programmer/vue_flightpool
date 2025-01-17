<template>
    <App_header />

    <section class="results">
        <div class="container results__container">
            <div class="results__header">
                <label class="time-range">
                    <p class="time-range__title">Время вылета</p>
                    <div class="time-range__inputs">
                        <input v-model="time_start" class="input" type="time">
                        <input v-model="time_end" class="input" type="time">
                    </div>
                </label>


                <div class="results__header-right">
                    <!-- <select class="input">
                        <option>Самый быстрый</option>
                        <option>Самый медленный</option>
                    </select>
                    <select class="input">
                        <option>Самый дешевый</option>
                        <option>Самый дорогой</option>
                    </select> -->

                    <label>
                        <input name="sort" v-model="flight_sort" type="checkbox" value="speed">
                        Самый быстрый
                    </label>
                    <label>
                        <input name="sort" v-model="flight_sort" type="checkbox" value="price">
                        Самый дешевый 
                    </label>

                </div>
            </div>
            

            <div class="trips">
                <Trip :class="trip_class(flight)" v-for="flight in flights" :flight :passengers="Number(route.query.passengers)">
                    <template #actions>
                        <div class="trip__end trip__action">
                            <button @click="flight.type == 'to' ? flight_to = flight : flight_back = flight" class="link trip__btn">{{flight.type == 'to' ? 'Выбрать Туда' : 'Выбрать Обратно'}}</button>
                        </div>
                    </template>
                </Trip>
            </div>

            <div class="flex f-end">
                <a class="btn results__booking" href="booking"
                    >Бронировать</a
                >
            </div>
        </div>
    </section>

    <App_footer />
</template>

<script setup lang="ts">
import App_footer from '@/components/app_footer.vue';
import App_header from '@/components/app_header.vue';
import Trip from '@/components/trip.vue';
import { flights, getFlights, time_end, time_start, type IFlight } from '@/models/flight';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const flight_to = ref<IFlight | null>(null)
const flight_back = ref<IFlight | null>(null)

const trip_class = (flight) => ({
    'trip-selected':
        flight.flight_id == flight_to.value?.flight_id || 
        flight.flight_id == flight_back.value?.flight_id
})

getFlights(route.query)
</script>

<style scoped>
.results__container {
    padding-top: 1rem;
}
.trip-selected {
    background-color: rgb(223, 223, 223);
}
.time-range__inputs {
    display: flex;
    gap: 0.5rem;
    max-width: 200px;
}
.results__header {
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: end;
}
.time-range__title {
    margin-bottom: 0.5rem;
}
.results__header-right {
    display: flex;
    gap: 1rem;
    max-height: 40px;
}
</style>