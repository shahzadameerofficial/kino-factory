<template>
    
    <form class="row main" @submit.prevent="submitContract()" ref="contractPanel">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Contract Panel</h6>
                    <KinoInput type="date" label="Contract Date" v-model="contractDate"/>
            </div>
        </div>
        
        <div class="col-12 mb-2">
            <div class="kino-bg p-2 text-white rounded top">
                <div class="row">
                    <div class="col-6">
                        <h6 class="no-margin">Al Rafique Enterprises and Distributers</h6>
                        <div class="address">near Staff Colony, Silanwali Road, Sargodha</div>
                    </div>
                    <div class="col-6 text-end">
                        <h6 class="text-urdu">الرفیق انٹرپرائزز<span class="address text-urdu"> ( نزد سٹاف کالونی،
                                سلانوالی روڈ سرگودھا)</span> </h6>

                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="bg-fade pt-2 px-2 pb-1">
                <div class="row d-flex align-items-center flex-wrap">
                    <div class="col-sm-5 col-md-4 col-lg-2 mb-2">
                        <KinoInput label="Supplier" :options="suppliers" optionsKey="name" v-model="selectedSupplier" output="id"/>
                    </div>

                    <div class="col-sm-7 col-md-8 col-lg-4 mb-2">
                        <div class="supplier" v-if="selectedSupplier">
                            <h6 class="text-urdu kino-text">{{ suppliers[selectedSupplier-1].nameUr }} <span class="address text-urdu"> ({{ suppliers[selectedSupplier-1].addressUr }})</span>
                            </h6>
                            <div class="address text-end"><i class="fa-solid fa-location-dot"></i> {{suppliers[selectedSupplier-1].address}}</div>
                        </div>
                        <div class="supplier" v-else>
                            <h6>No Supplier Selected</h6>
                        </div>
                    </div>
                    <div class="col-sm-5 col-md-4 col-lg-2 mb-2 border-l-theme">
                        <KinoInput label="Contract Group" :options="contractgroups" optionsKey="name" v-model="selectedContractGroup" output="id"/>
                    </div>

                    <div class="col-sm-7 col-md-8 col-lg-4 mb-2">
                        <div class="orchard">
                            <h6 class="kino-text mb-0" v-if="selectedContractGroup">{{ contractgroups[selectedContractGroup-1].name }}</h6>
                            <h6 class="kino-text mb-0" v-else>No Group Selected</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 py-2">
            <div class="main-title">
                <h6 class="">Terms and Conditions</h6>
                <div class="ustom-control custom-switch">
                    <input class="custom-control-input" type="checkbox" id="flexSwitchCheckChecked" checked
                        ref="languageMode" v-on:click="changeLanguage()">
                    <label class="custom-control-label" for="flexSwitchCheckChecked"></label>
                    <span></span>
                </div>
            </div>
            <div class="tab-content my-2" id="myTabContent">
                <div class="tab-pane fade show active" id="moviestab" role="tabpanel">
                    <div class="row">
                        <div class="col-md-4 col-lg-3">

                            <div class="input-group mb-2">
                                <span class="input-group-text" id="basic-addon1">Advance</span>
                                <input type="number" class="form-control" id="floatingNameEmail" placeholder="e.g 500000" v-model="advance">
                            </div>
                        </div>
                        <div class="col-md-8 col-lg-9">

                            <div class="input-group mb-2">
                                <span class="input-group-text" id="basic-addon1">Remarks</span>
                                <textarea class="form-control" cols="30" rows="1" v-model="remarks"></textarea>
                            </div>
                        </div>
                    </div>
                    <textarea name="" class="form-control no-shadow" id="agreement" cols="30" rows="6" v-model="agreement">
                        Agreement English
                    </textarea>
                </div>
                <div class="tab-pane fade show" id="peopletab" role="tabpanel">
                    <div class="row">
                        <div class="col-3">

                            <div class="input-group mb-2">
                                <span class="input-group-text text-urdu" id="basic-addon1">ایڈوانس</span>
                                <input type="number" class="form-control text-urdu" id="floatingNameEmail"
                                    placeholder="e.g 500000" v-model="advance">
                            </div>
                        </div>
                        <div class="col-9">

                            <div class="input-group mb-2">
                                <span class="input-group-text text-urdu" id="basic-addon1">ریمارکس</span>
                                <textarea class="form-control text-urdu" cols="30" rows="1" v-model="remarksUrdu"></textarea>
                            </div>
                        </div>
                    </div>
                    <textarea name="" class="form-control text-urdu" id="agreement" cols="30"
                        rows="6" v-model="agreementUrdu">چونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوںچونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوںچونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوںچونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوںچونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوںچونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوںچونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوںچونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوں</textarea>
                </div>

            </div>

            <div class="text-right">
                <button class="kino-btn rounded-pill" type="submit">Save</button>
                <button class="kino-btn-text rounded-pill" type="button">Dismiss</button>
            </div>
        </div>

    </form>
</template>
<script>
export default {
    name: "GeneralContractPanel",
    data() {
        return {
            isEnglish: true,

            contractDate:'',

            selectedSupplier: null,
            selectedContractGroup: null,
            advance:'',
            remarks:'',
            agreement:'',
            remarksUrdu:'',
            agreementUrdu:'',
        }
    },
    
    computed: {
        suppliers() {
            return this.$store.getters.getData('supplierList') || [];
        },
        contractgroups() {
            return this.$store.getters.getData('contractgroups') || [];
        },
    },
    created() {
        this.$store.dispatch('fetchData', 'supplierList');
        this.$store.dispatch('fetchData', 'contractgroups');
    },
    methods: {
        submitContract(){
            let contract = {
                contractDate:this.contractDate,
                supplier:this.selectedSupplier.name,
                type:this.selectedContractGroup.id,
                advance:this.advance,
                remarks:this.remarks,
                agreement:this.agreement,
                remarksUrdu:this.remarksUrdu,
                agreementUrdu:this.agreementUrdu,
            };
            console.log(contract);
            this.$store.dispatch('postData', {key:'contractgroups',newData:contract});
            this.$refs.contractPanel.reset();
            this.selectedOrchard = '';
        },
        
        changeLanguage() {
            let tabs = document.querySelectorAll(".tab-content .tab-pane");
            console.log(tabs)
            this.isEnglish = !this.isEnglish
            if (!this.isEnglish) {
                tabs[0].classList.remove("active")
                tabs[1].classList.add("active")
            } else {
                tabs[1].classList.remove("active")
                tabs[0].classList.add("active")
            }
        }
    }
}
</script>
<style scoped>

.row {
    font-size: 0.9rem;
}

#flexSwitchCheckChecked:checked~span::after {
    content: 'English';
}

#flexSwitchCheckChecked~span::after {
    content: 'Urdu';
}
.form-check-input:checked {
    background-color: var(--theme-text);
    border-color: var(--theme-text);
}

.form-check-input:focus {
    box-shadow: none;
}
.detail {
    font-size: 0.9rem;
    line-height: 1.1rem;
    color: #696969;
    /* padding: 0 0.25rem; */
}




.top .address {
    color: #e7e7e7;
}
</style>