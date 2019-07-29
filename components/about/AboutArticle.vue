<template>
    <article>
        <mdb-card>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></mdb-card-image>
            <mdb-card-body>
                <mdb-card-title>{{ datas.firstName }}</mdb-card-title>
                <h5 class="blue-text"><strong>{{ datas.email }}</strong></h5>
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn color="primary">Button</mdb-btn>
            </mdb-card-body>
        </mdb-card>
    </article>
</template>

<script>
    import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbView, mdbMask } from 'mdbvue';
    export default {
        name: "AboutArticle",
        components: {
            mdbCard,
            mdbCardImage,
            mdbCardBody,
            mdbCardTitle,
            mdbCardText,
            mdbBtn,
            mdbView,
            mdbMask
        },
        props: ['datas']
    }
</script>

<style scoped>

</style>