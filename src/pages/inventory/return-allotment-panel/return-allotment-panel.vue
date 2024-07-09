<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title rounded-pill">
                <h6 class="mb-0">Return Allotment Panel</h6>
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

                        <KinoSearch :data="products" v-if="products && products.length > 0" v-model="currentProduct" />
                    <DisplayField :data="currentProduct" :display="['name', 'category', 'brand']" class="mb-2" label="Product"/>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 my-1">
                            <KinoInput label="Normal Qty" type="number" placeholder="e.g 210" v-model="normalQty" />
                        </div>
                        <div class="col-sm-6 my-1">
                            <KinoInput label="Damaged Qty" type="number" placeholder="e.g 130" v-model="damagedQty" />
                        </div>
                        <div class="col-sm-6 my-1">
                            <KinoInput label="Lost Qty" type="number" placeholder="e.g 150" v-model="lostQty" />
                        </div>

                        <div class="col-sm-6 my-1">
                            <KinoInput label="Returning Person" type="text" placeholder="e.g Umar Farooq"
                                v-model="returningPerson" />
                        </div>
                        <div class="col-sm-4">
                            <div class="kino-footer-fields">
                                <div class="field">
                                    <span>Unit</span>
                                    <h6>{{ currentProduct ? currentProduct.unit : 'N/A' | titlecase }}</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8 my-1">
                            <button class="kino-btn my-1 w-100 rounded" @click="addProduct()">Add</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 col-lg-8">

                    <KinoTable :tableData="returnAllotments" tableTitle="Returning Items" />
                </div>
            </div>
            <div class="row py-2 gx-5">
                <div class="col-12">
                    <div class="bg-fade p-2">
                        <div class="row">
                            <div class="col border-l-theme">
                                <div class="row">



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 my-2">
            <div class="kino-add-item">
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
    name: "ReturnAllotmentPanel",
    data() {
        return {
            returnAllotments: [],
            selectedSupplier: '',
            selectedSupervisor: '',
            currentProduct: '',
            normalQty: '',
            damagedQty: '',
            lostQty: '',
            returningPerson: ''
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
                id: this.currentProduct.id,
                product: this.currentProduct.name,
                category: this.currentProduct.category,
                brand: this.currentProduct.brand,
                normal: this.normalQty,
                damaged: this.damagedQty,
                lost: this.lostQty,
                unit: this.currentProduct.unit,
            }
            this.returnAllotments.push(product);
            this.currentProduct = null;
            this.normalQty = '';
            this.damagedQty = '';
            this.lostQty = '';
            this.returningPerson = '';
        }
    }


}
</script>
<style scoped>
.row {
    font-size: 0.9rem;
}
</style>