<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Local Loading Register</h6>
            </div>
        </div>
        <div class="col-12">
            <KinoTable :tableData="localloadings" :displayedHeadings="tableConfig.headings" :actions="tableConfig.actions" :tableTitle="tableConfig.title" @action="performAction"/>
        </div>
        <div class="col-12">
            <div class="kino-table-head kino-bg text-white p-2">
                <h6>Logs</h6>
                <div class="searchbox rounded">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search" placeholder="Search">
                </div>
            </div>
        </div>
        <div class="col-12 mt-2">
            <div class="d-flex mb-2 align-items-center justify-content-between p-2 bg-fade">

                <div class="btns">
                    <button class="kino-btn rounded"><i class="fa-solid fa-print"></i> Print Report</button>
                </div>
                <div class="kino-footer-fields">
                    <div class="field">
                        <span>Sales Count</span>
                        <h6>3</h6>
                    </div>
                    <div class="field">
                        <span>Total Boxes</span>
                        <h6>250.00</h6>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "LocalLoadingRegister",
    data() {
        return {
            tableConfig:{
                headings:['id','customerId','vehicleNumber','builtyNumber','date','driverName','quantity'],
                title:'Logs',
                actions:[
                    {type:'edit',modalId:'editLoading'},
                    {type:'delete',modalId:'deleteLoading'},
                    {type:'print',modalId:'printLoading'},
                ]
            }
        }
    },
    methods: {
        performAction(action){
            if(action.type === 'delete'){
                this.localloadings.splice(action.index,1)
            }
        }
    },
    computed: {
        localloadings() {
            return this.$store.getters.getData('localloadings') || [];
        },
    },
    created() {
        this.$store.dispatch('fetchData', 'localloadings');
    },
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