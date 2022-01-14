<script>
    import { todos } from './store'
    import CreateTodo from './components/CreateTodo.svelte';
    import Todo from '~/components/Todo'

    const storageTodos = localStorage.getItem('todos')
    if(storageTodos) {
        $todos = JSON.parse(storageTodos)
    }
</script>

<div class="container">
    <CreateTodo />
    {#each $todos as todo (todo.id)}
        <Todo {todo} />
    {/each}
</div>

<style lang="scss"></style>