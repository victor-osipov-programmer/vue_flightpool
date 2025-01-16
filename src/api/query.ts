export function query(url: string, options?) {
    return fetch(new URL(url, 'http://localhost:8000/'), {
        ...options
    })
}