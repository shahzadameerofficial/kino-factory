<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Vendor Stock In Report</h6>
            </div>
        </div>
        <div class="col-12">
            <ConfirmBox message="Are you sure to delete this entry?" modalTitle="Delete Item" id="removeEntry" :recieveSubmit="deleteItem"/>
            <KinoTable :tableData="reports" tableTitle="Logs" :filters="filters" :actions="actions" :triggerActions="deleteItem"/>
            <div class="d-flex mb-2 align-items-center justify-content-between flex-wrap p-2 bg-fade mt-2">

                <div class="btns">
                    <button class="kino-btn rounded mx-2"><i class="fa-solid fa-print"></i> Print Report</button>
                    <button class="kino-btn rounded"><i class="fa-solid fa-print"></i> Print Report (Summary)</button>
                </div>
                <div class="kino-footer-fields bg-fade">
                    <div class="field">
                        <span>Total Amount</span>
                        <h6>{{ stockInReports.reduce((accumulator, object) => {
                        return accumulator + object.amount;
                    }, 0) }} SAR</h6>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "VendorStockInReport",
    data() {
        return {
            stockInReports: [],
            filters: ['to', 'from'],
            actions:[
                {
                    type:'delete',
                    modalId:'#removeEntry'
                }
            ]
        }
    },
    computed:{
        reports(){
            return this.$store.getters.getData('vendorstockinreport') || [];
        }
    },
    created(){
        this.$store.dispatch('fetchData', 'vendorstockinreport');
    },
    methods: {
        deleteItem(a){
            console.log(a);
        }
    }
}
</script>
<style scoped>
.row {
    font-size: 0.9rem;
}

</style>