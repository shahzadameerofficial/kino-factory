<template>
    <div class="row">
        <div class="col-12 mb-2">
            <div class="kino-title rounded-pill">
                <h6 class="mb-0">Allotment Panel</h6>
                <KinoInput type="date" label="Date" />
            </div>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-md-6 mb-2">
                    <div class="kino-selector">
                        <KinoSearch label="Supplier" :data="suppliers" v-model="selectedSupplier" />
                        <DisplayField :data="selectedSupplier" :display="['name', 'mobile']" />
                    </div>
                </div>
                <div class="col-md-6 mb-2">
                    <div class="kino-selector">
                        <KinoSearch label="Supervisor" :data="supervisors" v-model="selectedSupervisor" />
                        <DisplayField :data="selectedSupervisor" :display="['name', 'mobile']" label="Supervisor" />
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <h6 class="heading-1">Products Details</h6>
            <div class="row">
                <div class="col-md-5 col-lg-4">
                    <div class="kino-selector mb-2">
                        <KinoSearch label="Product" :data="products" v-model="currentProduct" />
                        <DisplayField :data="currentProduct" :display="['name', 'category', 'brand']" class="mb-2" />
                    </div>
                    <div class="row">
                            <div class="col-sm-6">
                                <KinoInput label="Vehicle #" type="text" v-model="vehicleNumber" class="mb-2" />
                            </div>
                            <div class="col-sm-6">

                                <KinoInput label="Receiver Name" type="text" placeholder="e.g 500" v-model="receiverName"
                                    class="mb-2" />
                            </div>
                            <div class="col-sm-6">

                                <KinoInput label="Quantity" type="number" placeholder="e.g 24" v-model="quantity"
                                    class="mb-1" />
                            </div>
                            <div class="col-sm-6">

                                <button class="kino-btn w-100 rounded my-1" @click="addProduct()">Add</button>
                            </div>
                        </div>
                </div>
                <div class="col-md-7 col-lg-8">

                    <KinoTable :tableData="myproducts" tableTitle="Current Products" :actions="tableConfig.actions"
                        @action="performAction" />
                </div>
            </div>
        </div>
        <div class="col-12">

            <div class="my-1 text-right">
                <button class="kino-btn-text py-2 rounded">Dismiss</button>
                <button class="kino-btn py-2 mx-2 rounded"><i class="fa-solid fa-floppy-disk"></i> Save</button>
            </div>

        </div>
    </div>
</template>
<script>

export default {
    name: "AllotmentPanel",
    data() {
        return {
            selectedSupplier: '',
            selectedSupervisor: '',
            myproducts: [],
            currentProduct: null,
            vehicleNumber: '',
            quantity: '',
            receiverName: '',
            tableConfig: {
                actions: [
                    { type: 'delete', modalId: 'deleteEntry' }
                ]
            }
        }
    },
    computed: {
        suppliers() {
            return this.$store.getters.getData('supplierList') || [];
        },
        supervisors() {
            return this.$store.getters.getData('supervisor') || [];
        },
        products() {
            return this.$store.getters.getData('products') || [];
        }
    },
    created() {
        this.$store.dispatch('fetchData', 'supplierList');
        this.$store.dispatch('fetchData', 'supervisor');
        this.$store.dispatch('fetchData', 'products');
    },
    methods: {
        selectedProduct(product) {
            console.log(product);
            this.currentProduct = product
        },
        addProduct() {
            let product = {
                code: this.currentProduct.id,
                product: this.currentProduct.name,
                category: this.currentProduct.category,
                brand: this.currentProduct.brand,
                quantity: this.quantity,
            }
            this.myproducts.push(product);
            this.currentProduct = null;
            this.quantity = '';
            this.receiverName = '';
            this.vehicleNumber = '';
        },
        performAction(action) {
            if (action.type === 'delete') {
                this.myproducts.splice(action.index, 1)
            }
        }
    },
}
</script>
<style scoped>
.row {
    font-size: 0.9rem;
}


table.detailsTable {
    width: 100%;
    font-size: 0.7em;
    margin-top: 5px;
}

table.detailsTable th {
    white-space: no-wrap;
    text-overflow: ellipsis;
    font-weight: 600;
    text-align: center;
}

table.detailsTable tbody th {
    text-align: start;
}

table.detailsTable td,
table.detailsTable th {
    border-bottom: 1px solid #e0e0e0;
    text-align: center;
}


table.detailsTable td {
    text-align: center;
    color: #666666;
    white-space: no-wrap;
    text-overflow: ellipsis;
}
</style>