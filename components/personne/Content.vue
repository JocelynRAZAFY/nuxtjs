<template>
    <div class="row" id="personne">
        <div class="col-md-4">
            <h1>Personne</h1>
            <mdb-list-group>
                <mdb-list-group-item>Cras justo odio<mdb-badge color="primary" pill>14</mdb-badge>
                </mdb-list-group-item>
                <mdb-list-group-item>Dapibus ac facilisis in<mdb-badge color="primary" pill>2</mdb-badge>
                </mdb-list-group-item>
                <mdb-list-group-item>Morbi leo risus<mdb-badge color="primary" pill>1</mdb-badge>
                </mdb-list-group-item>
            </mdb-list-group>
        </div>
        <div class="col-md-8">
            <NavBar/>
        </div>
    </div>
</template>

<script>
    import { mdbListGroup, mdbListGroupItem, mdbBadge } from 'mdbvue';
    import NavBar from '../../components/personne/NavBar'
    export default {
        name: "Content",
        components: {
            mdbListGroup,
            mdbListGroupItem,
            mdbBadge,
            NavBar,
        }
    }
</script>

<style scoped>

</style>