<template>

        <div class="category" id="about">
            <div class="category__content Content Content--hasCarbon">
                <h1>ABOUT</h1>
                <h2> Votre prenom: {{ datas.username }}</h2>
                <h3> Votre email: {{ datas.email }}</h3>
            </div>
            <div class="category__footer">
                <!--<nuxt-footer/>-->
            </div>
        </div>


</template>

<script>
    import axiosService from '../../services/axiosService'
    export default {
        name: "index",
        fetch ({ store, redirect }) {
            if (!localStorage.getItem('token')) {
                return redirect('/')
            }
        },
        asyncData(){
            return axiosService.get('api/back/user/datas')
                .then((res) => {
                    console.log(res.data)
                    return {
                        datas: res.data.data
                    }
                })
        },
        created() {
            // window.location.reload(true)
        }
    }
</script>

<style scoped>
#about {
    margin-top: 10%;
}
</style>