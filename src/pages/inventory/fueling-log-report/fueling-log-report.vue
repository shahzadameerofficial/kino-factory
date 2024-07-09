<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Fueling Log Report</h6>
            </div>
        </div>
        <div class="col-12 mb-4" v-if="fuelingReports">
            <KinoTable :tableData="reports" tableTitle="Logs" :filters="filters" />

            <div class="kino-footer-fields bg-fade justify-content-end mt-2">
                <div class="field">
                    <span>Total</span>
                    <h6>{{ fuelingReports.reduce((accumulator, object) => {
                        return accumulator + object.quantity;
                    }, 0) }} Litres</h6>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "FuelingLogReport",
    data() {
        return {
            fuelingReports: [],
            filters: ['to', 'from']
        }
    },
    mounted() {
        this.getFuelingLogReports();
    },
    computed:{
        reports(){
            return this.$store.getters.getData('fuelinglogreport') || [];
        }
    },
    created(){
        this.$store.dispatch('fetchData', 'fuelinglogreport');
    }
}
</script>
<style scoped>
.row {
    font-size: 0.9rem;
}

.filters {
    display: flex;
    align-items: center;
    gap: .2rem;
    flex-wrap: wrap;
}
</style>