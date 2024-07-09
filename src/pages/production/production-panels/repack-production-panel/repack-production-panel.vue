<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Repack Production Panel</h6>
            </div>
        </div>
        <div class="col-12">
            <KinoTable :tableData="productionslist.map(function (item) {
                delete item.bad;
                return item;
            })" :actions="actions" @action="performAction" :displayedHeadings="headings" tableTitle="Productions List" 
            :filters="filters"/>
        </div>

        <div class="col-12">
            <div class="modal fade kino-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Repack Production</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12 mb-2">
                                    <div class="kino-title-head kino-bg p-1 text-white mb-2">
                                        <h6>Old Repack</h6>
                                    </div>
                                    <div class="content old-repacks">
                                        <div class="fields">
                                            <span>Production Date</span>
                                            <h6>23 Sep 2023</h6>
                                        </div>
                                        <div class="fields">
                                            <span>Batch / Lot #</span>
                                            <h6>11/02/Awan</h6>
                                        </div>
                                        <div class="fields">
                                            <span>Brand</span>
                                            <h6>Khan Marka</h6>
                                        </div>
                                        <div class="fields">
                                            <span>Packing Weight</span>
                                            <h6>13</h6>
                                        </div>
                                        <div class="fields">
                                            <span>Pieces per Box</span>
                                            <h6>16</h6>
                                        </div>
                                        <div class="fields">
                                            <span>Box Quantity</span>
                                            <h6>23</h6>
                                        </div>
                                        <div class="fields">
                                            <span>Store Name</span>
                                            <h6>A.R.E</h6>
                                        </div>
                                        <div class="fields">
                                            <span>Room #</span>
                                            <h6>250</h6>
                                        </div>
                                        <div class="fields">
                                            <span>Rack #</span>
                                            <h6>250</h6>
                                        </div>
                                        <div class="fields">
                                            <span>Position</span>
                                            <h6>Front</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mb-2">
                                    <div class="kino-title-head kino-bg p-1 text-white mb-2">
                                        <h6>Repacking Details</h6>
                                    </div>
                                    <div class="content old-repacks">
                                        <KinoInput type="text" label="Box Quantity" placeholder="e.g 12" v-model="repackList.boxQuantity"/>
                                        <div class="fields">
                                            <span>Balance</span>
                                            <h6>63</h6>
                                        </div>
                                        <div class="fields">
                                            <span>Repacking Weight</span>
                                            <h6>250 Kg</h6>
                                        </div>
                                        <div class="fields">
                                            <span>Waster</span>
                                            <h6>260 Kg</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mb-2">
                                    <div class="kino-title-head kino-bg p-1 text-white mb-2">
                                        <h6>New Repack</h6>
                                    </div>
                                    <div class="row" v-if="true">
                                        <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                                            <KinoInput label="Brand Type"
                                                :options="[...new Set(brands.map(brand => brand.type))]"
                                                v-model="repackList.brandType" />
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                                            <KinoInput label="Brand Name" :options="brands" optionsKey="name"
                                                v-model="repackList.brandName" />
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                                            <KinoInput label="Package Weight" :options="packings" optionsKey="packingWeight"
                                                v-model="repackList.weight" output="id" />
                                        </div>

                                        <div class="col-sm-6 col-md-4 col-lg-2 mb-3"  v-if="repackList.weight">
                                            <KinoInput label="Pieces/Box" :options="packings[repackList.weight - 1].pieces"
                                                v-model="repackList.pieces" />
                                        </div>

                                        <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                                            <KinoInput type="text" label="Batch/Lot #" placeholder="e.g 123"
                                                v-model="repackList.batch" />
                                        </div>

                                        <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                                            <KinoInput type="number" label="Box Quantity" placeholder="e.g 300"
                                                v-model="repackList.boxQuantityN" />
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                                            <KinoInput label="Store Name" :options="stores" optionsKey="name"
                                                v-model="repackList.store" />
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                                            <KinoInput type="number" label="Room #" placeholder="e.g 14"
                                                v-model="repackList.room" />
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                                            <KinoInput type="number" label="Rack #" placeholder="e.g 55"
                                                v-model="repackList.rack" />
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                                            <KinoInput label="Position" :options="positions" optionsKey="name"
                                                v-model="repackList.position" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="kino-btn-text rounded" data-dismiss="modal">Dismiss</button>
                            <button type="button" class="kino-btn rounded" @click="repackData($event)">Repack</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "RepackProductionPanelComponent",
    data() {
        return {
            actions: [{ type: 'delete', modalId: 'deleteModal' }, { type: 'edit', modalId: 'exampleModal' }],
            filters:['brandName','brandType','store','batch'],
            headings: ['date', 'brandName', 'packingWeight', 'piece', 'batch', 'boxQuantity', 'store', 'room', 'rack', 'position'],
            repackList: {
                boxQuantity: '',
                brandType: '',
                brandName: '',
                weight: '',
                pieces: '',
                batch: '',
                boxQuantityN: '',
                store: '',
                room: '',
                rack: '',
                position: '',
            },
            editIndex:null
        }
    },
    computed: {
        productionslist() {
            return this.$store.getters.getData('productions') || [];
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
        this.$store.dispatch('fetchData', 'productions');
        this.$store.dispatch('fetchData', 'brands');
        this.$store.dispatch('fetchData', 'packings');
        this.$store.dispatch('fetchData', 'stores');
        this.$store.dispatch('fetchData', 'positions');
    },
    methods: {
        performAction(action) {
            if (action.type === 'edit') {
                
                this.repackList = { ...this.productionslist[action.index] };
                this.editIndex = action.index
            }
        },
        async repackData(e){
            e.target.setAttribute('data-dismiss','modal');
            this.productionslist[this.editIndex] = {...this.repackList}
            this.productionslist[this.editIndex].boxQuantity = this.repackList.boxQuantityN;
            delete this.productionslist[this.editIndex].boxQuantityN;
            try {
                await this.$store.dispatch('updateData', { key: 'productions', updatedData: this.productionslist[this.editIndex]});
                // Clear form fields after successful addition
                this.newData = {};
            } catch (error) {
                console.error('Error adding data:', error);
            }
            this.editIndex = null
        }
    }
}
</script>
<style scoped>
.row {
    font-size: 0.9rem;
}

.old-repacks {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .5rem;
}

.fields {
    /* background-color: var(--theme-fade); */
    color: #696969;
    font-size: 0.8em;
    padding: .3rem;
}

.fields h6 {
    font-size: .8rem;
    margin-bottom: 0;
}
</style>