<template>
    <div class="category">
        <nuxt-affix :list="list" category="guide" />
        <div class="category__content Content Content--hasCarbon" :class="{'category__content--hidden': visible}">
            <Content />
        </div>
        <div class="category__footer">
            <!--<nuxt-footer/>-->
        </div>
    </div>

</template>

<script>
    import Content from '../../components/personne/Content'
    import toolsService from '../../services/toolsService'
    export default {
        name: "index",
        components: {
            Content
        },
        fetch ({ store, redirect }) {
            if (!toolsService.hasToken()) {
                return redirect('/')
            }
        },
    }
</script>

<style lang="scss" scoped>
    #personne {
       // margin: 10% 10%;
        margin-top: 10%;
        margin-right: 1%;
        margin-left: 2%;
        border: 1px dashed #0A1F44;

        @media (max-width: 406px) {
            margin: 20% 2%;
        }
    }
</style>