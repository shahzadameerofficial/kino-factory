<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Vehicle Fueling Panel</h6>
                <div class="contract-date text-min text-end"><span class="labels rounded-pill px-2">Invoice Id :
                        0131200</span>
                </div>
                <div class="contract-date text-min text-end"><span class="labels rounded-pill px-2">Date : 20 Sep,
                        2023</span>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="content d-flex align-items-center justify-content-between bg-fade py-1 px-2 kino-bg">
                <h6 class="mb-0 text-white">Fueling Details</h6>
                
                <KinoInput :options="fuelingTypes" optionsKey="name" v-model="selectedFuelingType"/>
            </div>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-lg-6 my-2">
                    <div class="d-flex flex-wrap">
                        <KinoInput label="Transporter" :options="transporters" optionsKey="name" v-model="selectedTransporter" output="id"/>
                        <div class="kino-footer-fields" v-if="selectedTransporter">
                            <div class="fields">
                                <span>Name</span>
                                <h6>{{transporters[selectedTransporter-1].name | titlecase}}</h6>
                            </div>
                            <div class="fields">
                                <span>Phone</span>
                                <h6>{{transporters[selectedTransporter-1].mobile}}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-2 my-2">
                    <KinoInput label="Truck No" type="text" placeholder="e.g LRT123" v-model="truckNumber"/>
                </div>
                <div class="col-md-4 col-lg-2 my-2">
                    <KinoInput label="Meter Reading" type="number" placeholder="e.g 12345" v-model="meterReading"/>
                </div>
                <div class="col-md-4 col-lg-2 my-2">
                    <KinoInput label="Driver Name" type="text" placeholder="e.g Asif Azhar" v-model="driverName"/>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="bg-fade d-flex align-items-center justify-content-between flex-wrap">
                <div class="kino-footer-fields my-1">
                    <div class="fields">
                        <span>Available Fuel</span>
                        <h6>{{states.availableFuel}} Litres</h6>
                    </div>
                    <div class="kino-input my-1">
                        <input type="text" class="form-control" id="floatingNameEmail" placeholder="Enter Fuel">
                    </div>
                </div>

                <div class="my-1">
                    <button class="kino-btn-text py-2 rounded">Dismiss</button>
                    <button class="kino-btn py-2 mx-2 rounded"><i class="fa-solid fa-floppy-disk"></i> Save</button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: "VehicleFuelingPanel",
    data(){
        return{
            selectedTransporter:'',
            selectedFuelingType:'',
            truckNumber:'',
            meterReading:'',
            driverName:'',
        }
    },
    computed: {
        fuelingTypes() {
            return this.$store.getters.getData('fuelingtypes') || [];
        },
        states() {
            return this.$store.getters.getData('states') || [];
        },
        transporters() {
            return this.$store.getters.getData('transporters') || [];
        },
    },
    created() {
        this.$store.dispatch('fetchData', 'transporters');
        this.$store.dispatch('fetchData', 'states');
        this.$store.dispatch('fetchData', 'fuelingtypes');
    }
}
</script>
<style scoped>

.row {
    font-size: 0.9rem;
}

</style>