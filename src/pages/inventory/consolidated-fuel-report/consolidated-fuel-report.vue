<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Consolidated Fuel Report</h6>
            </div>
        </div>
        <div class="col-12">
            <KinoTable :tableData="reports" tableTitle="Logs" :filters="filters" />
            <div class="d-flex mb-2 align-items-center justify-content-end p-2 bg-fade mt-2">
                <div class="btns">
                    <button class="kino-btn rounded"><i class="fa-solid fa-print"></i> Print Report</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ConsolidatedFuelReport",
    data() {
        return {
            filters: ['to', 'from']
        }
    },
    computed:{
        reports(){
            return this.$store.getters.getData('consolidatedvehiclefuelreport') || [];
        }
    },
    created(){
        this.$store.dispatch('fetchData', 'consolidatedvehiclefuelreport');
    }
}
</script>
<style scoped>
.row {
    font-size: 0.9rem;
}
</style>