<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Foreign Vouncher Panel</h6>
                <div class="contract-date text-min text-end"><span class="labels rounded-pill px-2">Transaction Date : 20
                        Sep,
                        2023</span>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="kino-table-head kino-bg text-white p-2">
                <h6>Value Date</h6>
                <div class="searchbox rounded">
                    <input type="date" placeholder="Search">
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="row py-2">
                <div class="col-12 mb-2">
                    <h6>Debit Account</h6>
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Code" type="number" placeholder="e.g 501245" />
                </div>


                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Account Title" type="text" placeholder="e.g title-1" />
                </div>


                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Ledger Balance" type="number" placeholder="e.g 500000" />
                </div>


                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Foreign Amount" type="number" placeholder="e.g 500000" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Currency" :options="['Pakistani Rupee (PKR)', 'Saudi Rayal (SAR)']" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Exchange Rate" type="number" placeholder="e.g 250" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Local Amount" type="number" placeholder="e.g 250000" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Description" type="text" placeholder="e.g abcxyz" />
                </div>
            </div>
            <div class="row pb-2">

                <div class="col-12 mb-2">
                    <h6>Credit Account</h6>
                </div>


                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Code" type="number" placeholder="e.g 501245" />
                </div>


                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Account Title" type="text" placeholder="e.g title-1" />
                </div>


                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Ledger Balance" type="number" placeholder="e.g 500000" />
                </div>


                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Foreign Amount" type="number" placeholder="e.g 500000" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Currency" :options="['Pakistani Rupee (PKR)', 'Saudi Rayal (SAR)']" />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Exchange Rate" type="number" placeholder="e.g 250" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Local Amount" type="number" placeholder="e.g 250000" />
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Description" type="text" placeholder="e.g abcxyz" />
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="d-flex mb-2 align-items-center justify-content-between flex-wrap p-2 bg-fade">

                <div class="btns">
                    <button class="kino-btn-text rounded">Dismiss</button>
                </div>
                <div class="kino-footer-fields bg-fade">
                    <div class="field">
                        <span>Difference</span>
                        <h6>0</h6>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    name: "ForeignTransactions",
    data() {
        return {}
    },
    methods: {}
}
</script>
<style scoped>
.row {
    font-size: 0.9rem;
}
</style>