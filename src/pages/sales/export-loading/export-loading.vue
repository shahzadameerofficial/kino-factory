<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title rounded-pill">
                <h6 class="mb-0">Export Loading</h6>
                <KinoInput type="date" label="Date" v-model="loading.date" />
            </div>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-md-6 mb-2">
                    <div class="kino-selector">
                        <KinoSearch label="Customer" :data="customers" v-model="loading.customerId" />
                        <DisplayField :data="loading.customerId" :display="['name', 'mobile']" label="Customer"/>
                    </div>
                </div>
                <div class="col-md-6 mb-2">
                    <div class="kino-selector">
                        <KinoSearch label="Supervisor" :data="supervisors" v-model="loading.supervisorId" />
                        <DisplayField :data="loading.supervisorId" :display="['name', 'mobile']" label="Supervisor"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="row py-2 gx-5">

                <div class="col-12 mb-2">
                    <div class="kino-title-head">
                        <h6>Current Loading</h6>
                        <div class="contract-date text-min text-end"><span
                                class=" kino-bg text-white rounded-pill px-2">Loading # : 1024021</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Vehicle #" placeholder="e.g MRT123" type="text" v-model="loading.vehicleNumber" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Container #" placeholder="e.g ABC123" type="text" v-model="loading.containerNumber" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Driver Name" placeholder="e.g Akhtar" type="text" v-model="loading.driverName" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Driver CNIC" type="text" placeholder="e.g xxxxx-xxxxxxx-x"
                        pattern="^\d{5}-\d{7}-\d{1}$" v-model="loading.driverCnic" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="PlugIn" placeholder="e.g plugin" type="text" v-model="loading.plugIn" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Mobile #" placeholder="e.g 0300-1234567" type="text" v-model="loading.mobile" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Builty" placeholder="e.g builty" type="text" v-model="loading.builtyNumber" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Loading Seal #" placeholder="e.g seal123" type="text"
                        v-model="loading.loadingSealNumber" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Inspection Seal #" placeholder="e.g seal123" type="text"
                        v-model="loading.inspectionSealNumber" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Payload" placeholder="e.g payload123" type="text" v-model="loading.payload" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Scale Weight (Kg)" placeholder="e.g 50" type="text" v-model="loading.scaleWeight" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="In Time" type="time" v-model="loading.inTime" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Out Time" type="time" v-model="loading.outTime" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Port" :options="ports" optionsKey="name" v-model="loading.port" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Shipping Line" placeholder="e.g shipping123" type="text"
                        v-model="loading.shippingLine" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Transporter" placeholder="e.g transport123" type="text"
                        v-model="loading.transporter" />
                </div>
                <div class="col mb-3">
                    <KinoInput type="textarea" label="Remarks" rows="1" v-model="loading.remarks" />
                </div>
                <div class="col-12">
                    <hr />
                </div>
            </div>
        </div>
        <div class="col-12">
            <h6>Production Details</h6>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Brand Type" :options="[...new Set(brands.map(brand => brand.type))]"
                        v-model="loading.brandType" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Brand Name" :options="brands" optionsKey="name" v-model="loading.brandName" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Weight" :options="packings" optionsKey="packingWeight" v-model="loading.weight" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3" v-if="loading.weight">
                    <KinoInput label="Pieces/Pack" :options="packings[loading.weight - 1].pieces" v-model="loading.piece" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Batch #" :options="productionsList" optionsKey="batch" output="id"
                        v-model="loading.batchNumber" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput type="number" placeholder="Quantity" class="mx-1" v-model="loading.quantity" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <button class="kino-btn rounded my-1 w-100" type="button" @click="newEntry"><i
                            class="fa-solid fa-square-plus"></i> <span class="fs-2">Insert</span></button>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="kino-footer-fields" v-if="loading.batchNumber">
                <div class="fields">
                    <span>Production Date</span>
                    <h6>{{ productionsList[loading.batchNumber - 1].date }}</h6>
                </div>
                <div class="fields">
                    <span>Store</span>
                    <h6>{{ productionsList[loading.batchNumber - 1].store }}</h6>
                </div>
                <div class="fields">
                    <span>Room #</span>
                    <h6>{{ productionsList[loading.batchNumber - 1].room }}</h6>
                </div>
                <div class="fields">
                    <span>Rack #</span>
                    <h6>{{ productionsList[loading.batchNumber - 1].rack }}</h6>
                </div>
                <div class="fields">
                    <span>Position</span>
                    <h6>{{ productionsList[loading.batchNumber - 1].position }}</h6>
                </div>

            </div>
        </div>
        <div class="col-12 mb-2">
            <KinoTable :tableData="localLoadings" tableTitle="Loadings" :displayedHeadings="tableConfig.headings"
                :actions="tableConfig.actions" @action="performAction" />
        </div>
        <div class="col-12">
            <div class="bg-fade d-flex align-items-center justify-content-between">
                <CounterField :data="localLoadings" :keys="counters"/>

                <div class="my-1">
                    <button class="kino-btn-text py-2 rounded" type="button"
                        @click="$refs.localLoading.reset()">Dismiss</button>
                    <button class="kino-btn py-2 mx-2 rounded" @click="uploadData"><i class="fa-solid fa-floppy-disk" type="button"></i>
                        Save</button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: "ExportLoading",
    data() {
        return {
            loading: {
                date: '',
                customerId: '',
                supervisorId: '',
                vehicleNumber: '',
                containerNumber: '',
                driverName: '',
                driverCnic: '',
                plugIn: '',
                mobile: '',
                builtyNumber: '',
                loadingSealNumber: '',
                inspectionSealNumber: '',
                payload: '',
                scaleWeight: '',
                inTime: '',
                outTime: '',
                port: '',
                shippingLine: '',
                transporter: '',
                remarks: '',
                brandType: '',
                brandName: '',
                weight: '',
                batchNumber: '',
                piece: '',
                quantity: ''

            },

            localLoadings: [],
            tableConfig: {
                headings: ['brandName', 'weight', 'piece', 'batchNumber', 'productionDate', 'store', 'room', 'rack', 'position', 'quantity'],
                actions: [
                    { type: 'delete', modalId: 'deleteBox' }
                ]
            },
            counters: [
                { title: 'Total Quantity', key: 'quantity' },
                { title: 'Packing Weight', key: 'weight' },
                { title: 'Gross Weight', key: 'grossWeight' },
                { title: 'Net Weight', key: 'netWeight' },
            ]
        }
    },
    computed: {
        supervisors() {
            return this.$store.getters.getData('supervisor') || [];
        },
        customers() {
            return this.$store.getters.getData('customers') || [];
        },
        brands() {
            return this.$store.getters.getData('brands') || [];
        },
        packings() {
            return this.$store.getters.getData('packings') || [];
        },
        ports() {
            return this.$store.getters.getData('ports') || [];
        },
        productionsList() {
            return this.$store.getters.getData('productions') || [];
        },
    },
    created() {
        this.$store.dispatch('fetchData', 'supervisor');
        this.$store.dispatch('fetchData', 'customers');
        this.$store.dispatch('fetchData', 'brands');
        this.$store.dispatch('fetchData', 'packings');
        this.$store.dispatch('fetchData', 'ports');
        this.$store.dispatch('fetchData', 'productions');
    },
    methods: {
        newEntry() {
            console.log(this.loading);
            let load = { ...this.loading }
            load.store = this.productionsList[load.batchNumber - 1].store;
            load.room = this.productionsList[load.batchNumber - 1].room;
            load.rack = this.productionsList[load.batchNumber - 1].rack;
            load.position = this.productionsList[load.batchNumber - 1].position;
            load.productionDate = this.productionsList[load.batchNumber - 1].date;
            load.netWeight = this.productionsList[load.batchNumber - 1].netWeight;
            load.grossWeight = this.productionsList[load.batchNumber - 1].grossWeight;
            // load.batchNumber = this.productionsList[load.batchNumber -1].batch;
            this.localLoadings.push(load)
            this.resetValues();
        },
        performAction(action) {
            if (action.type === 'delete') {
                this.localLoadings.splice(action.index, 1);
            }
        },
        async uploadData(){
            await this.localLoadings.forEach(
                async el => {
                    try {
                        await this.$store.dispatch('postData', { key: 'localloadings', newData: el });
                        // Clear form fields after successful addition
                        this.newData = {};
                    } catch (error) {
                        console.error('Error adding data:', error);
                    }
                }
            );
        },
        resetValues() {
            Object.keys(this.loading).map(key => {
                if (this.loading[key] instanceof Array) this.loading[key] = ''
                else this.loading[key] = ''
            })
        }
    }
}
</script>
<style scoped>
.company {
    background-color: var(--theme-text);
    color: #fff;
    padding: 10px;
}

.agreement {
    border-top: 1px solid #a8a8a8;
}

.contract-type {
    font-size: 0.9em;
    margin-right: auto;
    margin-left: 10px;
    padding: 2px;
    display: inline;
    width: auto;
}

.alert .form-control {
    width: 80px;
    display: inline;
}


.row {
    font-size: 0.9rem;
}

.contract {
    background-color: white;
}

#flexSwitchCheckChecked:checked~span::after {
    content: 'English';
}

#flexSwitchCheckChecked~span::after {
    content: 'Urdu';
}

.custom-control-input:checked {
    background-color: var(--theme-text) !important;
    border-color: var(--theme-text) !important;
}

.custom-control-input:focus {
    box-shadow: none;
}

.supplier,
.orchard {
    border-radius: 5px;
    /* height: 56px; */
}


.distributer .row {
    font-size: 0.9em !important;
}


.detail {
    font-size: 0.9rem;
    line-height: 1.1rem;
    color: #696969;
    /* padding: 0 0.25rem; */
}



b {
    /* background-color: var(--theme-text); */
    /* color: #fff; */
    /* padding: 0 !important; */
    margin-right: 5px;
    font-weight: 600;
    color: #313131;
}</style>