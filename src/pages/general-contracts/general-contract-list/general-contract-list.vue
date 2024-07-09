<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">General Contract List</h6>
            </div>
        </div>
        <div class="col-12">
            <KinoTable :tableData="generalContracts" :displayedHeadings="['contractDate','type','supplier','remarks','advance']" tableTitle="General Contract List" :filters="['from','to']"/>
        </div>

    </div>
</template>
<script>
export default {
    name: "GeneralContractList",
    data(){
        return{
        }
    },
    computed: {
        generalContracts() {
            return this.$store.getters.getData('generalcontracts') || [];
        },
    },
    created() {
        this.$store.dispatch('fetchData', 'generalcontracts');
    },
    methods:{
    }
}
</script>
<style scoped>
.row {
    font-size: 0.9rem;
}

</style>