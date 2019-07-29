<template>
    <div class="category" id="about">
        <AboutArticle :datas="datas"/>
    </div>
</template>

<script>
    import toolsService from '../../services/toolsService'
    import axiosService from '../../services/axiosService'
    import AboutArticle from '../../components/about/AboutArticle'

    export default {
        name: "index",
        components:{
            AboutArticle
        },
        fetch ({ store, redirect }) {
            if (!toolsService.hasToken()) {
                return redirect('/')
            }
        },
        asyncData(){
            return axiosService.get('api/back/user/datas')
                .then((res) => {
                    console.log(res.data.data)
                    return {
                        datas: res.data.data
                    }
                })
        },
    }
</script>

<style lang="scss" scoped>
    #about {

        width: 30%;
        margin-top: 7%;
        margin-left: 30%;

    @media (max-width: 406px) {
        margin-top: 20%;
        margin-left: 7%;
        width: 90%;
    }

    article{
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
    }
</style>