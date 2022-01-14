<script>
    let title = ''

    function createTodo() {
        
    }
</script>

<div class="create-todo">
    <input 
        type="text" 
        bind:value={title} 
        class="form-control"
        on:keyup={ e => {
            if(e.key === 'Enter'){
                createTodo()
            }
        }}
    />
        <button 
            class="btn btn-primary"
            on:click={createTodo}
        >
            Create Todo!
        </button>
</div>