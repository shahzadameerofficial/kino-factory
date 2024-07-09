<template>
    <div class="row">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Product Management</h6>
                <button class="kino-btn rounded categorybtn" data-toggle="modal"
                    data-target="#categorymodal">Categories</button>
                <button class="kino-btn-text" data-toggle="modal" data-target="#productmodal"><i
                        class="fa-solid fa-square-plus"></i> New Product</button>
            </div>

            <!-- Product Modal -->
            <div class="modal kino-modal" tabindex="-1" id="productmodal">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                    <form class="modal-content" @submit.prevent="newProduct()" ref="productForm">
                        <div class="modal-header">
                            <h6 class="modal-title">Product Details</h6>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <div class="row">
                                <div class="col-sm-6 mb-3">
                                    <KinoInput label="Category" v-model="productDetails.category" :options="categories"
                                        optionsKey="name" />
                                </div>

                                <div class="col-sm-6 mb-3">
                                    <KinoInput type="text" label="Product Name" placeholder="e.g Product 1"
                                        v-model="productDetails.name" />
                                </div>
                                <div class="col-sm-6 mb-3">
                                    <KinoInput label="Unit" :options="units" optionsKey="name"
                                        v-model="productDetails.unit" />
                                </div>

                                <div class="col-sm-6 mb-3">
                                    <KinoInput label="Brand" :options="brands" v-model="productDetails.brand"
                                        optionsKey="name" />
                                </div>
                                <div class="col-sm-6 mb-3">
                                    <KinoInput label="Pieces/Pack" :options="['12', '24', '36']"
                                        v-model="productDetails.piecesperpack" />
                                </div>
                                <div class="col-sm-6 mb-3">
                                    <KinoInput type="number" label="Opening Qty" placeholder="e.g 20"
                                        v-model="productDetails.openingQuantity" />
                                </div>

                                <div class="col-sm-6 mb-3">
                                    <KinoInput type="text" label="Opening Price" placeholder="e.g 1000"
                                        v-model="productDetails.openingPrice" />
                                </div>

                                <div class="col-sm-6 mb-3">
                                    <KinoInput type="number" label="Min Stock Alert" placeholder="e.g 20"
                                        v-model="productDetails.minStockAlert" />
                                </div>

                                <div class="col-sm-6 mb-3">
                                    <KinoInput type="text" label="Price" placeholder="e.g 1000"
                                        v-model="productDetails.price" />
                                </div>


                                <div class="col-sm-6 mb-3">
                                    <KinoInput type="date" label="Expires" v-model="productDetails.expires" />
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="kino-btn-text rounded" data-dismiss="modal">Discard</button>
                            <button type="submit" class="kino-btn rounded">{{editProduct?'Update Product':'Create New Product'}}</button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Category Model -->
            <div class="modal kino-modal" tabindex="-1" id="categorymodal">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="modal-title">Categories</h6>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <div class="row">
                                <div class="col-sm-5 mb-3">
                                    <KinoInput label="All Categories" :options="categories"
                                        v-model="selectedCategory" optionsKey="name" output="id"/>
                                </div>
                                <div class="col-sm-7 mb-3 py-1" v-if="selectedCategory">
                                    <button class="kino-btn-text text-danger rounded mx-1" type="button" @click="categoryFunction('delete')">
                                        <i class="fa-solid fa-trash"></i>                                     </button>
                                    <button class="kino-btn-text rounded mx-1" type="button"
                                        @click="categoryFunction('edit')">
                                        <i class="fa-solid fa-file-pen"></i>
                                    </button>
                                </div>
                                <div class="col-12">
                                    <KinoInput type="text" label="Name" v-model="categoryName" />
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="kino-btn-text rounded" data-dismiss="modal">Discard</button>
                            <button type="submit" class="kino-btn rounded" @click="setCategory">{{editCategory?'Update Category':'Create New Category'}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <ConfirmBox message="Are you sure to delete this product?" id="deletemodal" :recieveSubmit="deleteProduct" />
            <KinoTable :tableData="products" v-if="products && products.length > 0" :displayedHeadings="headingsToShow"
                :actions="tableActions" tableTitle="All Products" @action="performAction" />
        </div>
        <AlertBox :message="alertMsg" id="alertBox" v-if="showAlert" />
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "ProductManagement",
    data() {
        return {
            categoryName: '',
            categoryMode: '',
            selectedCategory: '',
            requestedProductIndex: '',
            showAlert: false,
            alertMsg: '',

            waste: '',
            headingsToShow: ['id', 'name', 'brand', 'unit', 'description', 'expires', 'price'],
            tableActions: [{ type: 'edit', modalId: 'productmodal' }, { type: 'delete', modalId: 'deletemodal' }],
            productDetails: {
                category: '',
                name: '',
                unit: '',
                brand: '',
                openingQuantity: '',
                openingPrice: '',
                minStockAlert: '',
                price: '',
                expires: ''
            },
            editProduct:false,
            editCategory:false
        }
    },
    computed: {
        categories() {
            return this.$store.getters.getData('categories') || [];
        },
        products() {
            return this.$store.getters.getData('products') || [];
        },
        brands() {
            return this.$store.getters.getData('brands') || [];
        },
        units() {
            return this.$store.getters.getData('units') || [];
        }
    },
    created() {
        this.$store.dispatch('fetchData', 'categories');
        this.$store.dispatch('fetchData', 'products');
        this.$store.dispatch('fetchData', 'brands');
        this.$store.dispatch('fetchData', 'units');
    },
    methods: {
        categoryFunction(mode) {
            if (mode === 'delete' && this.selectedCategory !='') {
                const index = this.categories.indexOf(this.categories[this.selectedCategory-1])
                this.categories.splice(index,1);
                this.selectedCategory = '';
            } else if (mode === 'edit' && this.selectedCategory !='') {
                this.categoryName = this.categories[this.selectedCategory-1].name;
                    this.editCategory = true
            }
        },
        setCategory(){
            if (!this.editCategory && this.categoryName != '') {
                console.log('new category name is ' + this.categoryName);
                this.categories.push({name:this.categoryName,id:this.categories.length + 1});
                this.categoryName = ''
            }else if(this.editCategory && this.categoryName != ''){
                console.log('updating category name is ' + this.categories[this.selectedCategory-1].name);
                this.categories[this.selectedCategory-1].name = this.categoryName
                this.editCategory = false;
                this.categoryName = ''
            }
        },
        async newProduct() {
            console.log(this.productDetails);
            if (!this.editProduct) {
                await this.$store.dispatch('postData',{key:'products',newData:this.productDetails})
            }else{
                await this.$store.dispatch('updateData',{key:'products',newData:this.productDetails})
                
            }
            this.editProduct = false
            this.$refs.productForm.reset();
            
        },
        performAction(action) {
            if (action.type === 'edit') {
                console.log(this.products[action.index]);
                this.productDetails.category = this.products[action.index].category
                this.productDetails.name = this.products[action.index].name
                this.productDetails.unit = this.products[action.index].unit
                this.productDetails.brand = this.products[action.index].brand
                this.productDetails.minStockAlert = this.products[action.index].minStockAlert
                this.productDetails.price = this.products[action.index].price
                this.productDetails.expires = this.products[action.index].expires
                this.productDetails.id = this.products[action.index].id
                this.editProduct = true
            }

        },
        deleteProduct() {
            axios.delete(this.$dbserver + 'products/' + this.requestedProductIndex).then(
                res => {
                    // this.units = res.data
                    console.log(res);
                    this.products.splice(this.requestedProductIndex, 1)
                    this.alertNow('Product Delete Successfully')
                }
            ).catch(
                err => {
                    console.log(err);
                }
            )
        },
        alertNow(msg) {
            this.alertMsg = msg;
            this.showAlert = true;
            setTimeout(() => {
                this.showAlert = false
            }, 7000);
        }
    }
}
</script>
<style scoped>
.row {
    font-size: 0.9em;
}

.categorybtn {
    margin-right: auto;
    margin-left: 10px;
}
</style>