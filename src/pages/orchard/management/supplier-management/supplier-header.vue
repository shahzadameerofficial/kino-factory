<template>
    <div class="row px-2 mb-2">
        <header class="col-12 kino-title-head">
            <h6>Orchards Suppliers</h6>
            <div class="searchbox rounded d-none">
                <i class="fa-solid fa-magnifying-glass" title="Search" @click="$refs.search.focus()"></i>
                <input type="search" placeholder="Search" ref="search">

            </div>
            <button class="kino-btn-text" data-toggle="modal" data-target="#exampleModal"><i
                    class="fa-solid fa-square-plus"></i></button>
        </header>
        <div class="modal kino-modal" tabindex="-1" id="exampleModal">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <form class="modal-content" @submit.prevent="setSupplier()" ref="supplierForm">
                    <div class="modal-header">
                        <h6 class="modal-title">New Supplier</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <KinoInput label="Account Head" :options="['205012', '205021', '205011']"
                                    v-model="supplierDetails.accountHead" />
                            </div>
                            <div class="col-12 mb-3">
                                <KinoInput label="Account Code" type="number" placeholder="e.g 123456"
                                    v-model="supplierDetails.accountCode" />
                            </div>
                            <div class="col-6 mb-3">
                                <KinoInput label="Name" type="type" placeholder="e.g Shahid" v-model="supplierDetails.name" />
                            </div>
                            <div class="col-6 mb-3">
                                <KinoInput type="text" inputClass="text-urdu" placeholder="مثلاً ۔ شاہد" label="نام"
                                    labelClass="text-urdu" v-model="supplierDetails.nameUr" />
                            </div>

                            <div class="col-6 mb-3">
                                <KinoInput label="CNIC" type="text" placeholder="e.g xxxxx-xxxxxxx-x"
                                    pattern="^\d{5}-\d{7}-\d{1}$" v-model="supplierDetails.cnic" />
                            </div>
                            <div class="col-6 mb-3">
                                <KinoInput label="Email" type="email" placeholder="e.g name@email.com" v-model="supplierDetails.email" />
                            </div>

                            <div class="col-6 mb-3">
                                <KinoInput label="Currency"
                                    :options="['Pakistan Rupee (PKR)', 'Indian Rupee (INR)', 'United Stats Dollar (USD)']"
                                    v-model="supplierDetails.currency" />
                            </div>

                            <div class="col-6 mb-3">
                                <KinoInput label="Mobile #" type="tel" inputmode="tel" placeholder="e.g 0300-1234567"
                                    v-model="supplierDetails.mobile" />
                            </div>
                            <div class="col-12 mb-3">
                                <KinoInput type="textarea" placeholder="e.g H#2, St#4, ABC Town, Sargodha, Pakistan"
                                    label="Address" v-model="supplierDetails.address" />
                            </div>
                            <div class="col-12 mb-3">
                                <KinoInput type="textarea" label="پتہ"
                                    placeholder="مثلاً ۔مکان نمبر 2، گلی نمبر 4، اے بی سی ٹاؤن، سرگودھا، پاکستان"
                                    inputClass="text-urdu" labelClass="text-urdu" v-model="supplierDetails.addressUr" />
                            </div>

                            <div class="col-12 mb-3">
                                <label for="">Opening</label>
                                <div class="options mt-1">
                                    <input type="radio" name="opening" id="credit-opening" v-model="supplierDetails.opening" value="credit">
                                    <label for="credit-opening">&nbsp;Credit&nbsp;</label>
                                    <input type="radio" name="opening" id="debit-opening" v-model="supplierDetails.opening" value="debit">
                                    <label for="debit-opening">&nbsp;Debit&nbsp;</label>
                                    <input type="radio" name="opening" id="not-opening" v-model="supplierDetails.opening" value="none">
                                    <label for="not-opening">&nbsp;Not Opening&nbsp;</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <KinoInput label="Amount" type="text" placeholder="e.g 5000PKR" v-model="supplierDetails.amount" />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="kino-btn-text rounded" data-dismiss="modal">Discard</button>
                        <button type="submit" class="kino-btn rounded" data-dismiss="modal" @click="setSupplier">{{editMode?'Update Supplier':'Create New Supplier'}}</button>
                    </div>
                </form>
            </div>
        </div>
        <AlertBox v-for="alert in alerts" :key="alert.id" :alert="alert" @dismiss="dismissAlert"/>
    </div>
</template>
<script>
export default {
    name: "SupplierHeader",
    data() {
        return {
            supplierDetails: {
                accountHead: '',
                accountCode: '',
                name: '',
                nameUr: '',
                cnic: '',
                email: '',
                currency: '',
                mobile: '',
                address: '',
                addressUr: '',
                opening: '',
                amount: '',
            },
            editMode:false,
            alerts:[]
        }
    },
    props: {
        edit: Object
    },
    methods: {
        async setSupplier() {
            let newAlert = {
                    id: Date.now(), // Unique identifier for each alert
                    status: 'success',
                    duration: 3000, // in Milliseconds
                    message: ``
                };
            try {
                if (!this.editMode) {
                    await this.$store.dispatch('postData', { key: 'supplierList', newData: this.supplierDetails });
                    newAlert.message = 'New Supplier Added Successfully'
                }else{
                    await this.$store.dispatch('updateData', { key: 'supplierList', newData: this.supplierDetails });
                    newAlert.message = 'Supplier Updated Successfully'
                }
                // this.newData = {};
                this.editMode = false
                this.$refs.supplierForm.reset();
            } catch (error) {
                console.error('Error adding data:', error);
                newAlert.status = 'failed',
                newAlert.message = 'Failed to manipulate suppliers list'
            }
            
            this.alerts.push(newAlert);
        },
        editSupplier(supplier) {
            this.editMode = true
            this.supplierDetails = { ...supplier };
        },
        dismissAlert(dismiss){
            this.alerts = this.alerts.filter(v=>v.id !== dismiss.id);
        }
    },
    watch: {
        edit(newVal) {
            this.editSupplier(newVal)
        }
    }
}
</script>
<style scoped>
header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

header>h6 {
    margin-bottom: 0;
    margin-right: auto;
}

.urdu-area label {
    left: 0;
    right: 10px;
}

ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    list-style: none;
    margin-left: 10px;
}

ul li button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.7em;
    text-decoration: none;
    transition: all 200ms;
    color: var(--theme-text-fade);
}

ul li button i {
    font-size: 1.8em;
    color: var(--theme-text-fade);
    transition: all 200ms;
}

ul li a:hover {
    color: var(--theme-text);
}

ul li a:hover i {
    color: var(--theme-text);
}

.logo {
    font-family: 'Mooli', sans-serif;
    font-weight: bold;
    font-size: 1.3em;
}

.logo i {
    color: var(--theme-text);
}

.searchbox {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0.3em 1em;
    border-radius: 10px;
    border: 1px solid #EFF0FB;
}

.searchbox input {
    border: 0;
    outline: 0;
    background-color: transparent;
    color: rgb(105, 105, 105);
    width: 100%;
    transition: all 700ms;
}

.searchbox input::-webkit-search-cancel-button {
    opacity: 0;
}

.searchbox:focus-within {
    border-color: var(--theme-text-fade);
}

.searchbox:focus-within i {
    color: var(--theme-text-fade);
}

.searchbox input:focus {
    width: calc(100% + 250px);
}

.searchbox i {
    color: rgb(105, 105, 105);
    cursor: pointer;
    transition: all 200ms;
}

.searchbox i:hover {
    color: var(--theme-text-fade);
}

.modal .modal-body {
    font-size: 0.82rem !important;
}

/* .modal .modal-body .form-floating input,
.modal .modal-body .form-floating textarea{
    padding: 5px;
} */
@media screen and (max-width:649px) {

    header {
        flex-direction: column;
    }

    .searchbox {
        margin: 10px 0;
    }

    .searchbox input {
        width: 100%;
    }
}
</style>