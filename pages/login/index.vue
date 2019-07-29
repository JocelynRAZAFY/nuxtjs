<template>
    <!-- Material form login -->
    <div id="login">
        <mdb-card>
            <mdb-card-body>
                <form @submit="sendLogin($event)">
                    <p class="h4 text-center mb-4">Sign in</p>
                    <div class="grey-text">
                        <mdb-input v-model="login.email" label="Your email" icon="envelope" type="email"/>
                        <mdb-input v-model="login.password" label="Your password" icon="lock" type="password"/>
                    </div>
                    <div class="text-center">
                        <mdb-btn color="primary">Login</mdb-btn>
                    </div>
                </form>
            </mdb-card-body>
        </mdb-card>
    </div>

    <!-- Material form login -->
</template>

<script>
    import { mdbInput, mdbBtn , mdbCard, mdbCardBody} from 'mdbvue';
    import axiosService from '../../services/axiosService'

    export default {
        name: "index",
        components: {
            mdbInput,
            mdbBtn, mdbCard, mdbCardBody
        },
        data(){
            return {
                login: {
                    email: null,
                    password: null
                },

            }
        },
        methods:{
            async sendLogin(e){
                e.preventDefault()
                try {
                    const res = await axiosService.post('api/user/login',this.login)
                    if(res.status == 200){
                        localStorage.setItem('token',res.data.token)
                        this.$router.push({path: '/profile'})
                    }
                  //  console.log(res.status)

                } catch (err) {
                    commit('SET_USER_ERROR', err)
                }
            }
        }

    }
</script>

<style scoped>
    #login{
        margin: auto;
        margin-top: 10%;
        width: 30%;
    }

    @media (max-width: 406px) {
        #login{
            margin-top: 40%;
            width: 90%;
        }
    }

</style>