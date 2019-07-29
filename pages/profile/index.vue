<template>
    <div id="profile">
        <h1> Profiles</h1>
        <ul>
            <li v-for="todo in todos">
                <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
            </li>
            <li><input placeholder="Qu'est-ce qui doit être fait ?" @keyup.enter="addTodo"></li>
        </ul>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        name: "index",
        computed: {
            todos () {
                return this.$store.state.profile.list
            }
        },
        methods: {
            addTodo (e) {
                this.$store.commit('profile/add', e.target.value)
                e.target.value = ''
            },
            ...mapMutations({
                toggle: 'todos/toggle'
            })
        }
    }
</script>

<style scoped>

    #profile{
        margin-top: 30%;
        margin-left: 30%;
    }
</style>