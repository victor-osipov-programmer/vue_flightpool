import { query } from "@/api/query";
import { computed, ref } from "vue";

export const flights_to = ref<IFlight[]>([])
export const flights_back = ref<IFlight[]>([])

export const flight_sort = ref([])
export const time_start = ref('')
export const time_end = ref('')
export const flights = computed<IFlightWithType[]>(() => {
    return flights_to.value.map((flight): IFlightWithType  => ({...flight, type: "to"}))
    .concat(flights_back.value.map((flight): IFlightWithType => ({...flight, type: 'back'})))
    .filter((flight) => 
        (time_start.value ? flight.from.time >= time_start.value : true) && 
        (time_end.value ? flight.from.time <= time_end.value : true)
    )
})


export async function getFlights(data) {
    const params = new URLSearchParams(data)
    let response = await query('/api/flight?' + params)
    let json = response = await response.json()
    
    flights_to.value = json.data?.flights_to ?? []
    flights_back.value = json.data?.flights_back ?? []
}

export interface IFlight {
    "flight_id": number,
    "flight_code": string,
    "from": {
        "city": string,
        "airport": string,
        "iata": string,
        "date": string,
        "time": string 
    },
    "to": {
        "city": string,
        "airport": string,
        "iata": string,
        "date": string,
        "time": string 
    },
    "cost": number,
    "availability": number
}

interface IFlightWithType extends IFlight {
    type: 'to' | 'back'
}