const app = new Vue({
    el: ".app",
    data: {
        todos: [
            {
                text: 'Fare i compiti',
                completed: false,
            },
            {
                text: 'Fare la spesa',
                completed: false,
            },
            {
                text: 'Fare il bucato',
                completed: false,
            },
        ],
        newTodo: '',
        
    },
    methods:{
        /* add todo */
        addTodo(){
            if(this.newTodo !== ''){
                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                });
                this.newTodo = ''
                this.$refs.todoInput.focus();
            }
        },
        /* remove todo */
    },
});