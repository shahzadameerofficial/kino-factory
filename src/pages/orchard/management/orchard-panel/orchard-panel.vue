<template>
    <div class="container-fluid">
        <OrchardHeader :elements="orchards" @contract="getContract"/>
        <div class="row py-2">
            <!-- Contract and Quality -->
            <div class="col-md-12 col-lg-9 px-0 mb-2">
                <!-- contract details -->
                <ContractDetails :details="ochardPanel"/>
                
                <CheckInLog />
            </div>
            <!-- Profile and Payment -->
            <div class="col-md-12 col-lg-3 pr-0 px-0 px-lg-2">
                <QualityComparison />

                <!-- payment section -->
                <PaymentDetails />
            </div>

            <!-- Tables -->
            <div class="col-lg-6 p-0">
                <SurveyReports />
            </div>
            <div class="col-lg-6 pr-0 px-lg-2 px-0">
                <OrchardActivities />
            </div>

        </div>
    </div>
</template>
<script>
import OrchardHeader from './orchard-header.vue';
import ContractDetails from './contract-details.vue';
import PaymentDetails from './payment-details.vue';
import QualityComparison from './quality-comparison.vue';
import SurveyReports from './survey-reports.vue';
import OrchardActivities from './orchard-activities.vue';
import CheckInLog from './check-in-log.vue';

export default {
    name: 'OrchardPanelComponent',
    components: {
        OrchardHeader,
        PaymentDetails,
        ContractDetails,
        QualityComparison,
        SurveyReports,
        OrchardActivities,
        CheckInLog
    },
    data(){
        return{
            ochardPanel:{}
        }
    },
    computed: {
        orchards() {
            return this.$store.getters.getData('orchardcontracts') || [];
        },
    },
    created() {
        this.$store.dispatch('fetchData', 'orchardcontracts');
    },
    methods:{
        getContract(contract){
            this.ochardPanel.contract = contract
        }
    },
    watch:{
        ochardPanel(newVal){
            console.log(newVal);
        }
    }
}
</script>
<style>



</style>