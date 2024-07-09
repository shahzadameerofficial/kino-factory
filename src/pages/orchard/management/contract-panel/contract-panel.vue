<template>
    <form class="row main" @submit.prevent="submitContract()" ref="contractPanel">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Contract Panel <button class="kino-btn-text resetbtn" @click="resetbtn" type="button"><i class="fa-solid fa-arrow-rotate-left"></i></button></h6>
                <KinoInput type="date" label="Contract Date" v-model="contractDate" />
            </div>
        </div>
        <div class="col-12">
            <div class="company rounded mb-2">
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
            <div class="bg-fade p-2">
                <div class="row">
                    <div class="col-sm-6 mb-2">
                        <!-- <KinoInput label="Supplier" :options="suppliers" optionsKey="name" v-model="selectedSupplier" output="id"/> -->
                        <KinoSearch :data="suppliers" :customHeadings="['name','address']" v-model="selectedSupplier" label="supplier"/>
                    </div>
                    
                    <div class="col-sm-6 mb-2">
                        <KinoSearch :data="orchards" :customHeadings="['orchardCode']" v-model="selectedOrchard" label="orchard"/>
                    </div>

                    <div class="col-sm-6 mb-2">
                        <div class="supplier" v-if="selectedSupplier">
                            <h6 class="text-urdu kino-text">{{ selectedSupplier.nameUr }} <span
                                    class="address text-urdu"> ({{ selectedSupplier.addressUr }})</span>
                            </h6>
                            <div class="address text-end"><i class="fa-solid fa-location-dot"></i>
                                {{ selectedSupplier.address }}</div>
                        </div>
                        <div class="supplier" v-else>
                            <h6 class="text-secondary">No Supplier Selected</h6>
                        </div>

                    </div>

                    <div class="col-sm-6 mb-2">
                        <div class="orchard" v-if="selectedOrchard">
                            <h6 class="text-urdu kino-text">{{ (orchards.find(i => i.id === selectedOrchard.id) ||
                                {}).orchardNameUrdu }} نمبر{{ (orchards.find(i => i.id === selectedOrchard.id) ||
                                {}).orchardCode }} </h6>
                            <div class="address text-end"><i class="fa-solid fa-location-dot"></i> {{
                                (orchards.find(i => i.id === selectedOrchard.id) ||
                                {}).orchardAddress }}</div>
                        </div>
                        <div class="orchard" v-else>
                            <h6 class="text-secondary">Please Select the Orchard</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="row py-2 gx-5">

                <div class="col-12 mb-2">
                    <h6>Details</h6>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-2">
                    <KinoInput label="Orchard Type" :options="['Global Gap Orchard', 'Seed Orchard', 'Nut Orchard']"
                        v-model="orchardType" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-2">
                    <KinoInput label="Contract Till" type="date" v-model="contractTill" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-2">
                    <KinoInput label="Bin Weight (Kg)" type="number" placeholder="e.g 50" v-model="binWeight" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-2">
                    <KinoInput label="Advance" type="number" placeholder="e.g 50000" v-model="advance" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-2">
                    <KinoInput label="Area (Acre)" type="number" placeholder="e.g 50" v-model="area" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-2">
                    <KinoInput label="Bins" type="number" placeholder="e.g 250" v-model="bins" />
                </div>

            </div>
        </div>
        <hr class="mb-0">
        <div class="col-12 py-2 agreement">
            <div class="kino-title-head">
                <h6 class="">Terms and Conditions</h6>
                <KinoInput :options="['Contract Type', '1', '2']" v-model="contractType" />
                <div class="ustom-control custom-switch">
                    <input class="custom-control-input" type="checkbox" id="flexSwitchCheckChecked" checked
                        ref="languageMode" v-on:click="changeLanguage()">
                    <label class="custom-control-label" for="flexSwitchCheckChecked"></label>
                    <span></span>
                </div>
            </div>


            <div class="tab-content my-2" id="myTabContent">
                <div class="tab-pane fade show active" id="moviestab" role="tabpanel">
                    <div class="alert alert-secondary mb-2 p-1" role="alert">
                        <div><i class="fa-solid fa-circle-info text-theme"></i> According to Factory Rules and Regulation,
                            The Price of Safi is <input type="number" value="400" class="form-control" v-model="safiPrice">
                            and Chant Price is
                            <input type="number" class="form-control" value="800" v-model="chantPrice">. This price does not
                            includes Kargal and Virus.
                        </div>
                    </div>
                    <div class="input-group mb-2">
                        <span class="input-group-text" id="basic-addon1">Remarks</span>
                        <textarea class="form-control" cols="30" rows="1" v-model="remarks"></textarea>
                    </div>
                    <textarea name="" class="form-control no-shadow" id="agreement" cols="30" rows="6" v-model="agreement">
                            Agreement English
                        </textarea>
                </div>
                <div class="tab-pane fade show" id="peopletab" role="tabpanel">
                    <div class="alert alert-secondary mb-2 p-1" role="alert">
                        <div class="text-urdu">نوٹ :فیکٹری کے طے کردہ قوانین کے مطابق صافی ریٹ <input type="number"
                                class="form-control" value="800" v-model="safiPrice"> اور چھانٹ ریٹ <input type="number"
                                class="form-control" value="400" v-model="chantPrice"> ہے۔ یہ ریٹ کارگل اور وائرس کو نکال کر
                            ہے</div>
                    </div>
                    <div class="input-group mb-2">
                        <textarea class="form-control text-urdu" cols="30" rows="1" v-model="remarksUrdu"></textarea>
                        <span class="input-group-text text-urdu" id="basic-addon1">ریمارکس</span>
                    </div>
                    <textarea name="" class="form-control text-urdu" id="agreement" cols="30" rows="6"
                        v-model="agreementUrdu">چونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوںچونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوںچونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوںچونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوںچونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوںچونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوںچونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوںچونکہ ہر انسان کی ذاتی عزت اور حرمت اور انسانوں</textarea>
                </div>

            </div>

            <div class="actions text-end">
                <button class="kino-btn mx-2 rounded-pill" type="submit">Save</button>
                <button class="kino-btn rounded-pill">Dismiss</button>
            </div>
        </div>

    </form>
</template>
<script>
// import axios from 'axios';
export default {
    name: "ContractPanelComponent",
    data() {
        return {
            isEnglish: true,
            // orchards: [],
            contractDate: '',
            selectedSupplier: '',
            selectedOrchard: '',
            orchardType: '',
            contractTill: '',
            binWeight: '',
            advance: '',
            area: '',
            bins: '',
            contractType: '',
            safiPrice: '',
            chantPrice: '',
            remarks: '',
            agreement: '',
            remarksUrdu: '',
            agreementUrdu: '',
            rotate:360
        }
    },
    computed: {
        suppliers() {
            return this.$store.getters.getData('supplierList') || [];
        },
        orchards() {
            return this.$store.getters.getSlice('orchardsList') || [];
        },
    },
    created() {
        this.$store.dispatch('fetchData', 'supplierList');
    },
    watch: {
        selectedSupplier(supplier) {
            this.selectedOrchard = null;
            this.orchards = [];
            this.$store.dispatch('fetchSlice', {key:'orchardsList',params:`?supplierCode=${supplier.accountCode}`});
            
        }
    },
    methods: {
        submitContract() {
            let contract = {
                contractDate: this.contractDate,
                supplierCode: this.selectedSupplier.accountCode,
                orchardCode: this.selectedOrchard.orchardCode,
                orchardType: this.orchardType,
                contractTill: this.contractTill,
                binWeight: this.binWeight,
                advance: this.advance,
                area: this.area,
                bins: this.bins,
                contractType: this.contractType,
                safiPrice: this.safiPrice,
                chantPrice: this.chantPrice,
                remarks: this.remarks,
                agreement: this.agreement,
                remarksUrdu: this.remarksUrdu,
                agreementUrdu: this.agreementUrdu,
            };
            console.log(contract);
            this.$refs.contractPanel.reset();
            this.selectedOrchard = '';
            this.$store.dispatch('postData', { key: 'orchardcontracts', newData: contract })
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
        },
        resetbtn(e){
            
            e.target.style.transition = 'transform 1s'
            e.target.style.transform = `rotateZ(-${this.rotate}deg)`;
            this.rotate = this.rotate + 360
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
.resetbtn{
    font-size: 0.8em;
    transform-origin: center;
    /* background-color: red; */
    /* width: 16px; */
    height: 14px;
    padding: 0;
    transition: all 1s;
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

.supplier,
.orchard {
    border-radius: 5px;
    /* height: 56px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
    text-align: end;
}


.distributer .row {
    font-size: 0.9em !important;
}



.btns:last-child {
    background-color: #757575;
    margin-left: 10px;
    /* color: #757575; */
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
}

#agreement {
    width: 100%;
}


.nav-tabs {
    border: 0;
    padding: 0;
}

.nav-tabs .nav-item {
    margin: 0 0 5px 0;
}

.nav-tabs .nav-item .nav-link {
    color: white;
    border: 0;
    background-color: #757575;
    margin-right: 5px;
    /* border-radius: 25px; */
    padding: 3px 8px;
    font-size: 0.8rem;
}

.nav-tabs .nav-item .nav-link.active {
    background-color: var(--theme-text);
    color: white;
}

.company .address {
    color: #e7e7e7;
}</style>