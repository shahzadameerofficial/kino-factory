<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Current Stock Position Report</h6>
                </div>
        </div>
        <div class="col-12">
            <KinoTable :tableData="reports" tableTitle="All Reports"/>
            <div class="d-flex mb-2 align-items-center justify-content-between flex-wrap p-2 bg-fade">
                
                <div class="btns">
                    <button class="kino-btn rounded"><i class="fa-solid fa-print"></i> Print Report</button>
                </div>
                <div class="kino-footer-fields">
                    <div class="field">
                        <span>Total Production</span>
                        <h6>{{ reports.reduce((accumulator, object) => {
                        return accumulator + parseInt(object.production);
                    }, 0) }}</h6>
                    </div>
                    <div class="field">
                        <span>Total Sales</span>
                        <h6>{{ reports.reduce((accumulator, object) => {
                        return accumulator + parseInt(object.sale);
                    }, 0) }}</h6>
                    </div>
                    <div class="field">
                        <span>Total Balance</span>
                        <h6>{{ reports.reduce((accumulator, object) => {
                        return accumulator + parseInt(object.balance);
                    }, 0) }}</h6>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "CurrentStockPositionReport",
    computed: {
        reports() {
            return this.$store.getters.getData('currentstockpositionreport') || [];
        }
    },
    created() {
        this.$store.dispatch('fetchData', 'currentstockpositionreport');
    },
}
</script>
<style scoped>
.row {
    font-size: 0.9rem;
}


</style>