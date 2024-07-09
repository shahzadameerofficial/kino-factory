<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Daily Production Report</h6>
            </div>
        </div>
        <div class="col-12">
            <KinoTable :tableData="reports" tableTitle="All Reports"/>
            <div class="d-flex mb-2 align-items-center justify-content-between flex-wrap p-2 bg-fade">
                <div class="kino-footer-fields">
                    <div class="field">
                        <span>Total Weight</span>
                        <h6>{{ reports.reduce((accumulator, object) => {
                        return accumulator + parseInt(object.weight);
                    }, 0) }}</h6>
                    </div>
                    <div class="field">
                        <span>Total Boxes</span>
                        <h6>{{ reports.reduce((accumulator, object) => {
                        return accumulator + parseInt(object.boxQuantity);
                    }, 0) }}</h6>
                    </div>
                </div>
                <div class="btns">
                    <button class="kino-btn rounded mx-2"><i class="fa-solid fa-print"></i> Print Report (Summary)</button>
                    <button class="kino-btn rounded"><i class="fa-solid fa-print"></i> Print Report</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "DailyProductionReportComponent",
    computed: {
        reports() {
            return this.$store.getters.getData('dailyproductionreports') || [];
        }
    },
    created() {
        this.$store.dispatch('fetchData', 'dailyproductionreports');
    },
}
</script>
<style scoped>
.row {
    font-size: 0.9rem;
}

</style>