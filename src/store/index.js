import { writable, get } from 'svelte/store'

export const todos = writable([])
function savaStorage() {
    localStorage.setItem('todos', JSON.stringify(get(todos)))
}