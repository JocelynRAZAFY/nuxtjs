<template>
    <div id="profile" class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-8">
                <!--<NavBar/>-->
                <h1> Profiles</h1>
                <ul>
                    <li v-for="todo in todos">
                        <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
                        <span :class="{ done: todo.done }">{{ todo.text }}</span>
                    </li>
                    <li><input placeholder="Qu'est-ce qui doit être fait ?" @keyup.enter="addTodo"></li>
                </ul>

                <Validation/>
            </div>

        </div>

    </div>
</template>

<script>
    import { mapMutations,mapState } from 'vuex'
    import Validation from '../../components/profile/Validation'
    import NavBar from '../../components/profile/Navbar'
    import toolsService from '../../services/toolsService'
    export default {
        name: "index",
        components: {
            Validation,
            NavBar
        },
        fetch ({ store, redirect }) {
            if (!toolsService.hasToken()) {
                return redirect('/')
            }
        },
        computed: {
            ...mapState('profile',['list']),
            todos () {
                // return this.$store.state.profile.list
                return this.list
            }
        },
        methods: {
            addTodo (e) {
                // this.$store.commit('profile/add', e.target.value)
                this.addProfile(e.target.value)
                e.target.value = ''
            },
            ...mapMutations({
                toggle: 'todos/toggle',
                addProfile: 'profile/add'
            })
        }
    }
</script>

<style lang="scss" scoped>

    #profile{
        margin-top: 10%;
        margin-bottom: 10%;
        border: 1px dashed #0A1F44;

        @media (max-width: 406px) {
            margin-top: 20%;
        }
    }
</style>