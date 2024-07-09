<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Export Invoice</h6>
                <div class="contract-date text-min text-end"><span class="labels rounded-pill px-2">Date : 20 Sep,
                        2023</span>
                </div>
            </div>
        </div>
        <div class="col-12">
            <h6 class="kino-bg text-white p-1">Details</h6>
        </div>
        <div class="col-sm-6">
            <KinoInput label="Expense Type" class="mb-2" :options="['Sea Freight','Local Fare']"/>
        </div>
        <div class="col-sm-6">
            <KinoInput label="Invoice #" class="mb-2" type="number" placeholder="e.g 40125"/>
        </div>
        <div class="col-12">

            <div class="bg-fade px-2">
                <div class="row gx-2 py-2 d-flex align-items-center flex-wrap">
                    <div class="col-sm-5 col-md-4 col-lg-2 mb-2">
                        <KinoInput label="Service Provider" :options="['Farhan Akhtar','Akram']"/>
                    </div>

                    <div class="col-sm-7 col-md-8 col-lg-4 mb-2">
                        <div class="supplier">
                            <h6 class="kino-text">Farhan Akhtar</h6>
                            <div class="address"><i class="fa-solid fa-phone"></i> 0301 2345678</div>
                        </div>
                    </div>
                    <div class="col-sm-5 col-md-4 col-lg-2 mb-2 border-l-theme">
                        <KinoInput label="Loading #" :options="['1245','6890']"/>
                    </div>

                    <div class="col-sm-7 col-md-8 col-lg-4 mb-2">
                        <div class="orchard">
                            <h6 class="kino-text">Ijaz Aslam</h6>
                            <div class="address"><i class="fa-solid fa-hashtag"></i> 217242105</div>
                        </div>
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



                <div class="col-sm-6 col-md-4 col-lg-2 mb-2">
                    <KinoInput label="Amount" type="number" placeholder="e.g 50000"/>
                </div>
                <div class="col mb-2">
                    <div class="kino-input mb-2">
                        <textarea rows="1" class="form-control"></textarea>
                        <label for="floatingNameEmail">Description</label>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-12">
            
            <div class="my-1">
                    <button class="kino-btn-text py-2 rounded">Dismiss</button>
                    <button class="kino-btn py-2 mx-2 rounded"><i class="fa-solid fa-floppy-disk"></i> Save</button>
                </div>

        </div>
    </div>
</template>
<script>
export default {
    name: "ExportSaleExpense"
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
}
</style>