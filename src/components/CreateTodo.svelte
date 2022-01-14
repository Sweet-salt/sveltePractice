<script>
    import shortid from 'shortid'
    import { todos } from '~/store'
    
    let title = ''

    function createTodo() {
        if(!title || !title.trim()){ // 스페이스바 많이 눌러진거 처리한 뒤에도 공백일 시
            return 
        }
        $todos.unshift({
            id: shortid.generate(),
            title
        })
        $todos = $todos
        title = ''
        console.log($todos)
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

<style lang="scss">
    .create-todo {
        display: flex;
        margin-top: 50px;
        justify-content: center;
        .btn{
            width: 130px;
            height: 50px;
            font-weight: 700;
            margin-left: 10px;
            flex-shrink: 0;
            background-color: #fdc000;
        }
    }
</style>