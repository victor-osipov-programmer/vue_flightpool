import { computed, toValue } from "vue";

export function useForm(form) {
    form = toValue(form);

    const data = computed(() => {
        const data = {}

        for (let key in form) {
            data[key] = form[key].text
        }

        return data;
    })

    return {
        data
    }
}