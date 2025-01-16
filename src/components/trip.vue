<template>
    <div class="trip">
        <p class="trip__el trip__number">{{ flight.flight_code }}</p>
        <p class="trip__el trip__cydno-name">Судно</p>

        <p class="trip__el trip__start-date-time">
            Вылет: {{ new Date(flight.from.date).toLocaleDateString() + ' ' + flight.from.time }}
        </p>
        <p class="trip__el trip__end-time">Прилёт: {{ flight.to.time }}</p>

        <p class="trip__el trip__time-in-way">{{ way_time }} часов</p>

        <div class="trip__res trip__end">
            <p class="trip__cost">{{ flight.cost }} руб.</p>
            <p class="trip__ver">100%</p>
        </div>
        <slot name="actions">

        </slot>
    </div>
</template>

<script setup lang="ts">
import type { IFlight } from '@/models/flight';
import { computed } from 'vue';

const props = defineProps<{
    flight: IFlight
}>()

const way_time = computed(() => {
    const time_to = props.flight.to.time.match(/(\d{2}):(\d{2})/) ?? []
    const date_to = new Date(props.flight.to.date)
    date_to.setHours(Number(time_to[1]))
    date_to.setMinutes(Number(time_to[2]))

    const time_from = props.flight.from.time.match(/(\d{2}):(\d{2})/) ?? []
    const date_from = new Date(props.flight.from.date)
    date_from.setHours(Number(time_from[1]))
    date_from.setMinutes(Number(time_from[2]))
    
    // @ts-ignore
    return ((date_to - date_from) / (1000 * 60 * 60)).toFixed(1)
})
</script>

<style scoped>

</style>