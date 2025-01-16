import { query } from "@/api/query";
import { computed, ref } from "vue";

export const flights_to = ref([])
export const flights_back = ref([])
export const flightsk = computed({
    get(oldValue) {
        return [...flights_to.value, ...flights_back.value]
    },
    set(new_value) {

    } 
})

export async function getFlights(data) {
    const params = new URLSearchParams(data)
    let response = await query('/api/flight?' + params)
    let json = response = await response.json()
    
    flights_to.value = json.data.flights_to
    flights_back.value = json.data.flights_back
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