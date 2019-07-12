<template>
    <!-- Material form login -->
    <div id="login">
        <mdb-card>
            <mdb-card-body>
                <form>
                    <p class="h4 text-center mb-4">Sign in</p>
                    <div class="grey-text">
                        <mdb-input label="Your email" icon="envelope" type="email"/>
                        <mdb-input label="Your password" icon="lock" type="password"/>
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
    export default {
        name: "index",
        components: {
            mdbInput,
            mdbBtn, mdbCard, mdbCardBody
        },
    }
</script>

<style scoped>
    #login{
        margin: auto;
        margin-top: 15%;
        width: 30%;
    }
</style>