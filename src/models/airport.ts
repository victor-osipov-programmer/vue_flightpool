import { ref } from "vue";
import { query } from "@/api/query";

// export const airports = ref<>([])

export async function getAirports(name: string): Promise<IAirportMin[]> {
    const params = new URLSearchParams({query: name})
    const response = await query('/api/airport?' + params)
    
    if (response.ok) {
        const json = await response.json()
        return json.data.items;
    }

    return []
}

export interface IAirportMin {
    "name": string,
    "iata": string
}