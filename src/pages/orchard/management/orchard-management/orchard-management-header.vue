<template>
    <div class="row px-2 mb-2">

        <header class="col-12 kino-title-head">
            <h6>Orchards Management</h6>
            <div class="searchbox rounded d-none">
                <i class="fa-solid fa-magnifying-glass" title="Search" @click="$refs.search.focus()"></i>
                <input type="search" placeholder="Search" ref="search">

            </div>
            <button class="kino-btn-text" data-toggle="modal" data-target="#exampleModal"><i
                    class="fa-solid fa-square-plus"></i></button>
        </header>
        <div class="modal kino-modal" tabindex="-1" id="exampleModal">
            <div class="modal-dialog">
                <form class="modal-content" @submit.prevent="setOrchard" ref="orchardForm">
                    <div class="modal-header">
                        <h6 class="modal-title">New Orchard</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12 mb-3" v-if="allSuppliers && allSuppliers.length > 0">
                                <KinoSearch :data="allSuppliers" placeholder="Search Supplier/Party"
                                    @output="recieveData"/>
                            </div>
                            <div class="col-12">
                                <h6 class="text-center mb-3 kino-text">Orchard Details</h6>
                            </div>
                            <div class="col-6 mb-3">
                                <KinoInput label="Name" type="type" placeholder="e.g Shahid Orchard"
                                    v-model="orchardName" />
                            </div>
                            <div class="col-6 mb-3">
                                <KinoInput type="text" inputClass="text-urdu" placeholder="مثلاً ۔ شاہد باغ" label="نام"
                                    labelClass="text-urdu" v-model="orchardNameUrdu" />
                            </div>

                            <div class="col-6 mb-3">
                                <KinoInput label="Age" type="number" placeholder="e.g 50" v-model="orchardAge" />
                            </div>
                            <div class="col-6 mb-3">
                                <KinoInput label="Code" type="number" placeholder="e.g 012345" v-model="orchardCode" />
                            </div>

                            <div class="col-12 mb-3">
                                <KinoInput type="textarea" placeholder="e.g H#2, St#4, ABC Town, Sargodha, Pakistan"
                                    label="Address" v-model="orchardAddress" />
                            </div>
                            <div class="col-12 mb-3">
                                <KinoInput type="textarea" label="پتہ"
                                    placeholder="مثلاً ۔مکان نمبر 2، گلی نمبر 4، اے بی سی ٹاؤن، سرگودھا، پاکستان"
                                    inputClass="text-urdu" labelClass="text-urdu" v-model="orchardAddressUrdu" />
                            </div>


                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="kino-btn-text rounded" data-dismiss="modal">Discard</button>
                        <button type="submit" class="kino-btn rounded">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            supplierName: '',
            supplierCode: '',
            orchardName: '',
            orchardNameUrdu: '',
            orchardAge: '',
            orchardCode: '',
            orchardAddress: '',
            orchardAddressUrdu: ''
        }
    },
    props:{
        edit:Object
    },
    computed: {
        allSuppliers() {
            return this.$store.getters.getData('supplierList') || [];
        },
    },
    created() {
        this.$store.dispatch('fetchData', 'supplierList');
    },
    methods: {
        async setOrchard() {
            let myForm =
            {
                supplierName: this.supplierName,
                supplierCode: this.supplierCode,
                orchardName: this.orchardName,
                orchardNameUrdu: this.orchardNameUrdu,
                orchardAge: this.orchardAge,
                orchardCode: this.orchardCode,
                orchardAddress: this.orchardAddress,
                orchardAddressUrdu: this.orchardAddressUrdu,
            }
            try {
                await this.$store.dispatch('postData', { key: 'orchardlist', newData: myForm });
                this.newData = {};
                this.$refs.orchardForm.reset();
            } catch (error) {
                console.error('Error adding data:', error);
            }
        },

        recieveData(data) {
            this.supplierCode = data.accountCode;
            this.supplierName = data.nameEng;
        },
        editMode(valf){
            console.log(valf);
            // this.$data = {...valf}
            // this.orchardName = valf.orchardName;
            this.supplierName = valf.supplierName
            this.supplierCode = valf.supplierCode
            this.orchardName = valf.orchardName
            this.orchardNameUrdu = valf.orchardNameUrdu
            this.orchardAge = valf.orchardAge
            this.orchardCode = valf.orchardCode
            this.orchardAddress = valf.orchardAddress
            this.orchardAddressUrdu = valf.orchardAddressUrdu;    
         },
    },
    watch:{
        edit(val){
            this.editMode(val)
        }
    },
    name: "OrchardManagementHeader"
}
</script>
<style scoped>
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



.modal .modal-body {
    font-size: 0.82rem !important;
}

/* .modal .modal-body .kino-input input,
.modal .modal-body .kino-input textarea{
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