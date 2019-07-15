<template>
    <div id="logout"></div>
</template>

<script>
    export default {
        name: "index",
        created() {
            localStorage.removeItem('token')
            this.$router.push({path: '/'})
        }
    }
</script>

<style scoped>

</style>