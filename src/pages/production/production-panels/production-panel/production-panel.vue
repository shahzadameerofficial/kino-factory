<template>
    <div class="row main" ref="prodForm">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Production Panel</h6>
                <KinoInput type="date" label="Production Date" v-model="production.date" />
            </div>
        </div>
        <div class="col-12">
            <div class="kino-title-head kino-bg text-white p-2">
                <h6>Out Source Details</h6>
            </div>
        </div>
        <div class="col-12 ">
            <div class="bg-fade px-2">
                <div class="row gx-2 py-2 d-flex align-items-center flex-wrap">


                    <div class="col-sm-5 col-md-4 col-lg-2 mb-2">
                        <KinoInput label="Supplier" :options="suppliers" optionsKey="name" v-model="production.supplier"
                            output="id" />
                    </div>

                    <div class="col-sm-7 col-md-8 col-lg-4 mb-2">
                        <div class="supplier" v-if="production.supplier">
                            <h6 class="kino-text">{{ suppliers[production.supplier - 1].name }}</h6>
                            <div class="address"><i class="fa-solid fa-location-dot"></i>
                                {{ suppliers[production.supplier - 1].address }}</div>
                        </div>
                    </div>
                    <div class="col-sm-5 col-md-4 col-lg-2 mb-2 border-l-theme">
                        <KinoInput label="Supervisor" :options="supervisors" optionsKey="name"
                            v-model="production.supervisor" output="id" />
                    </div>

                    <div class="col-sm-7 col-md-8 col-lg-4 mb-2">
                        <div class="orchard" v-if="production.supervisor">
                            <h6 class="kino-text">{{ supervisors[production.supervisor - 1].name }}</h6>
                            <div class="address"><i class="fa-solid fa-phone"></i>
                                {{ supervisors[production.supervisor - 1].mobile }}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-12">
            <div class="row py-2 gx-5">

                <div class="col-12 mb-3">
                    <div class="kino-title-head kino-bg p-2 text-white">
                        <h6>Own Production Details</h6>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Brand Type" :options="[...new Set(brands.map(brand => brand.type))]"
                        v-model="production.brandType" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Brand Name" :options="brands" optionsKey="name" v-model="production.brandName" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Package Weight" :options="packings" optionsKey="packingWeight"
                        v-model="production.weight" output="id" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3" v-if="production.weight">
                    <KinoInput label="Pieces/Box" :options="packings[production.weight - 1].pieces"
                        v-model="production.piece" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput type="text" label="Batch/Lot #" placeholder="e.g 123" v-model="production.batch" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput type="number" label="Box Quantity" placeholder="e.g 300" v-model="production.boxQuantity" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Store Name" :options="stores" optionsKey="name" v-model="production.store" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput type="number" label="Room #" placeholder="e.g 14" v-model="production.room" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput type="number" label="Rack #" placeholder="e.g 55" v-model="production.rack" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Position" :options="positions" optionsKey="name" v-model="production.position" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3 p-1">
                    <button class="kino-btn rounded" type="button" @click="insertEntry"><i
                            class="fa-solid fa-square-plus"></i> <span class="fs-2">Insert</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="col-12">
            <KinoTable :tableData="currentProductions" :actions="actions" tableTitle="Current Productions"
                @action="performAction" class="line-border" />
        </div>
        <div class="col-12 py-2 agreement">


            <div class="kino-table responsive-lg mb-2 d-none">
                <table>
                    <thead>
                        <tr>
                            <th>Packing Ledger <i class="fa-solid fa-sort"></i></th>
                            <th>Company <i class="fa-solid fa-sort"></i></th>
                            <th>Supervisor <i class="fa-solid fa-sort"></i></th>
                            <th>Brand <i class="fa-solid fa-sort"></i></th>
                            <th>Weight <i class="fa-solid fa-sort"></i></th>
                            <th>Pieces/Box <i class="fa-solid fa-sort"></i></th>
                            <th>Batch <i class="fa-solid fa-sort"></i></th>
                            <th>Box Quantity <i class="fa-solid fa-sort"></i></th>
                            <th>Store <i class="fa-solid fa-sort"></i></th>
                            <th>Room <i class="fa-solid fa-sort"></i></th>
                            <th>Rack <i class="fa-solid fa-sort"></i></th>
                            <th>Position <i class="fa-solid fa-sort"></i></th>
                            <th>Action <i class="fa-solid fa-sort"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Packing Ledger">0</td>
                            <td data-label="Company">12</td>
                            <td data-label="Supervisor">41</td>
                            <td data-label="Brand">5 Star</td>
                            <td data-label="Weight">7.00</td>
                            <td data-label="Pieces/Box">24</td>
                            <td data-label="Batch">RTM-23</td>
                            <td data-label="Box Quantity">100</td>
                            <td data-label="Store">A.R.E</td>
                            <td data-label="Room">1</td>
                            <td data-label="Rack">15</td>
                            <td data-label="Position">Front</td>
                            <td data-label="Action"><button class="kino-btn-text text-danger"><i
                                        class="fa-solid fa-trash"></i></button></td>
                        </tr>
                        <tr>
                            <td data-label="Packing Ledger">0</td>
                            <td data-label="Company">12</td>
                            <td data-label="Supervisor">41</td>
                            <td data-label="Brand">5 Star</td>
                            <td data-label="Weight">7.00</td>
                            <td data-label="Pieces/Box">24</td>
                            <td data-label="Batch">RTM-23</td>
                            <td data-label="Box Quantity">100</td>
                            <td data-label="Store">A.R.E</td>
                            <td data-label="Room">1</td>
                            <td data-label="Rack">15</td>
                            <td data-label="Position">Front</td>
                            <td data-label="Action"><button class="kino-btn-text text-danger"><i
                                        class="fa-solid fa-trash"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mb-2 bottom-line bg-fade px-2">
                <div class="checkpoint">
                    Applying Billing Hopes Rates.
                    <input type="radio" checked id="no-rates" name="rates" :value="false" v-model="billingHopes">
                    <label for="no-rates" class="mx-2">No </label>
                    <input type="radio" id="yes-rates" name="rates" :value="true" v-model="billingHopes">
                    <label for="yes-rates" class="mx-2"> Yes</label>
                </div>
                <CounterField :data="currentProductions" :keys="counters"
                    v-if="currentProductions && currentProductions.length > 0" />
            </div>
            <div class="actions text-end">
                <button class="kino-btn-text py-2 rounded" type="button">Dismiss</button>
                <button class="kino-btn py-2 mx-2 rounded" type="button" @click="uploadData()"><i
                        class="fa-solid fa-floppy-disk"></i>
                    Save</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProductionPanelComponent",
    data() {
        return {
            currentProductions: [],
            catalog: {},
            requests: {},
            actions: [
                { type: 'delete', modalId: "deletebox" },
                { type: 'edit', modalId: "" }
            ],
            counters: [{ title: 'Packing Weight', key: 'packingWeight' }, { title: 'Gross Weight', key: 'grossWeight' }, { title: 'Net Weight', key: 'netWeight' }, { title: 'Boxes', key: 'boxQuantity' }],
            outsource: false,
            production: {
                date: '',
                supplier: '',
                supervisor: '',
                brandType: '',
                brandName: '',
                weight: '',
                piece: '',
                batch: '',
                boxQuantity: '',
                store: '',
                room: '',
                rack: '',
                position: '',
                billingHopes: ''
            }
        }
    },
    computed: {
        supervisors() {
            return this.$store.getters.getData('supervisor') || [];
        },
        suppliers() {
            return this.$store.getters.getData('supplierList') || [];
        },
        brands() {
            return this.$store.getters.getData('brands') || [];
        },
        packings() {
            return this.$store.getters.getData('packings') || [];
        },
        stores() {
            return this.$store.getters.getData('stores') || [];
        },
        positions() {
            return this.$store.getters.getData('positions') || [];
        },
    },
    created() {
        this.$store.dispatch('fetchData', 'supervisor');
        this.$store.dispatch('fetchData', 'supplierList');
        this.$store.dispatch('fetchData', 'brands');
        this.$store.dispatch('fetchData', 'packings');
        this.$store.dispatch('fetchData', 'stores');
        this.$store.dispatch('fetchData', 'positions');
    },
    methods: {
        performAction(req) {
            if (req.type === 'delete') {
                this.currentProductions.splice(req.index, 1);
            } else if (req.type === 'edit') {
                console.log(req);

            }
        },
        insertEntry() {
            console.log('adding new');
            let dataset = {
                date: this.production.date,
                brandType: this.production.brandType,
                brandName: this.production.brandName,
                packingWeight: this.packings[this.production.weight - 1]?.packingWeight,
                grossWeight: this.packings[this.production.weight - 1]?.grossWeight,
                netWeight: this.packings[this.production.weight - 1]?.netWeight,
                piece: this.production.piece,
                batch: this.production.batch,
                boxQuantity: this.production.boxQuantity,
                store: this.production.store,
                room: this.production.room,
                rack: this.production.rack,
                position: this.production.position
            }
            this.catalog = dataset

            if (this.production.supplier && this.production.supervisor) {
                this.catalog.supplier = {
                    name: this.suppliers[this.production.supplier - 1].name,
                    id: this.suppliers[this.production.supplier - 1].id
                };
                dataset.supplier = this.suppliers[this.production.supplier - 1].name

                this.catalog.supervisor = {
                    name: this.supervisors[this.production.supervisor - 1].name,
                    id: this.supervisors[this.production.supervisor - 1].id
                };
                dataset.supervisor = this.supervisors[this.production.supervisor - 1].name
            }
            console.log(this.catalog);
            this.currentProductions.push(dataset);

            this.resetValues()
        },
        deleteEntry() {
            console.log(this.requests);
            this.currentProductions.splice(this.requests.index, 1);
        },
        async uploadData() {
            await this.currentProductions.forEach(
                async el => {
                    try {
                        await this.$store.dispatch('postData', { key: 'productions', newData: el });
                        // Clear form fields after successful addition
                        console.log('upload sent');
                        this.newData = {};
                    } catch (error) {
                        console.log('upload sent not');
                        console.error('Error adding data:', error);
                    }
                }
            );
            /// Update Production List
            await this.currentProductions.forEach(
                async el => {
                    delete el.brandType;
                    delete el.grossWeight;
                    delete el.netWeight;
                    delete el.supplier;
                    delete el.supervisor;
                    try {
                        await this.$store.dispatch('postData', { key: 'productionslist', newData: el });
                        // Clear form fields after successful addition
                        console.log('upload sent');
                        this.newData = {};
                    } catch (error) {
                        console.log('upload sent not');
                        console.error('Error adding data:', error);
                    }
                }
            )
        },
        resetValues() {
            Object.keys(this.production).map(key => {
                if (this.production[key] instanceof Array) this.production[key] = ''
                else this.production[key] = ''
            })
        }
    },
    watch: {
        currentProductions(newVal) {
            console.log(newVal);
        }
    }
}
</script>
<style scoped>
.bottom-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.row {
    font-size: 0.9rem;
}

</style>