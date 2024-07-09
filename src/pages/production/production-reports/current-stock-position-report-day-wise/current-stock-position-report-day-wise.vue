<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Current Stock Position Report Day-Wise</h6>
            </div>
        </div>
        <div class="col-12">
            <KinoTable :tableData="reports" tableTitle="All Reports" />
            <div class="d-flex mb-2 align-items-center justify-content-end flex-wrap p-2 bg-fade">

                <div class="btns">
                    <button class="kino-btn rounded"><i class="fa-solid fa-print"></i> Print Report</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "CurrentStockPositionReportDayWise",
    computed: {
        reports() {
            return this.$store.getters.getData('currentstockpositionreportdaywise') || [];
        }
    },
    created() {
        this.$store.dispatch('fetchData', 'currentstockpositionreportdaywise');
    },
}
</script>
<style scoped>
.row {
    font-size: 0.9rem;
}


</style>