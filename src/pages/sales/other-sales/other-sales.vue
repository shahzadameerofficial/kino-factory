<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Other Sales Panel</h6>
                <div class="contract-date text-min text-end"><span class="labels rounded-pill px-2">Invoice Id :
                        0131200</span>
                </div>
                <div class="contract-date text-min text-end"><span class="labels rounded-pill px-2">Date : 20 Sep,
                        2023</span>
                </div>
            </div>
        </div>
        <div class="col-12">
            <KinoInput label="Sale Type" class="mb-2" :options="['Free Of Cost','Credit Sale','Cash Sale']"/>
            <div class="bg-fade px-2">
                <div class="row gx-2 py-2 d-flex align-items-center flex-wrap">
                    <div class="col-sm-5 col-md-4 col-lg-2 mb-3">
                        <KinoInput label="Customer" :options="['Usman','Zeeshan']"/>
                    </div>
                    <div class="col-sm-7 col-md-8 col-lg-4 mb-2">
                        <div class="supplier">
                            <h6 class="kino-text">Farhan Akhtar</h6>
                            <div class="address"><i class="fa-solid fa-phone"></i> 0301 2345678</div>
                        </div>
                    </div>
                    <div class="col-sm-5 col-md-4 col-lg-2 mb-3 border-l-theme">
                        <KinoInput label="Supervisor" :options="['535','512']"/>
                    </div>

                    <div class="col-sm-7 col-md-8 col-lg-4 mb-2">
                        <div class="orchard">
                            <h6 class="kino-text">Ijaz Aslam</h6>
                            <div class="address"><i class="fa-solid fa-phone"></i> 0301 2345678</div>
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

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Loading #" type="number" placeholder="e.g 500000"/>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Customer Name" type="text" placeholder="e.g Umar"/>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Truck #" type="text" placeholder="e.g LRT931"/>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Builty #" type="text" placeholder="e.g builty123"/>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Driver Name" type="text" placeholder="e.g Maqsood"/>
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Driver Mobile #" type="number" placeholder="e.g 0300-1234567"/>
                </div>
                <div class="col-12">
                    <hr />
                </div>
            </div>
        </div>
        <div class="col-12">
            <h6>Production Details</h6>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Brand Type" :options="['Local','Foreign']"/>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Brand Name" :options="['5 Star','GoStar']"/>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Weight" :options="['7.00','10.00']"/>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Pieces/Pack" :options="['24','32']"/>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mb-3">
                    <KinoInput label="Batch #" :options="['401','540']"/>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="content d-flex align-items-center justify-content-between flex-wrap bg-fade p-2 kino-bg">
                <div class="kino-footer-fields">
                    <div class="fields text-white">
                        <span>Production Date</span>
                        <h6>23 Sep 2023</h6>
                    </div>
                    <div class="fields text-white">
                        <span>Store</span>
                        <h6>A.R.E</h6>
                    </div>
                    <div class="fields text-white">
                        <span>Room #</span>
                        <h6>1</h6>
                    </div>
                    <div class="fields text-white">
                        <span>Rack #</span>
                        <h6>14</h6>
                    </div>
                    <div class="fields text-white">
                        <span>Position</span>
                        <h6>Front</h6>
                    </div>

                </div>
                <div class="d-flex">

                    <div class="kino-input mx-1">
                        <input type="text" class="form-control" id="" placeholder="Quantity">
                    </div>
                    <button class="kino-btn rounded my-1"><i class="fa-solid fa-square-plus"></i> <span
                            class="fs-2">Insert</span></button>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="kino-table responsive-lg mb-2">
                <table>
                    <thead>
                        <tr>
                            <th>Brand <i class="fa-solid fa-sort"></i></th>
                            <th>Weight <i class="fa-solid fa-sort"></i></th>
                            <th>Pieces/Box <i class="fa-solid fa-sort"></i></th>
                            <th>Batch <i class="fa-solid fa-sort"></i></th>
                            <th>Production Date <i class="fa-solid fa-sort"></i></th>
                            <th>Store <i class="fa-solid fa-sort"></i></th>
                            <th>Room # <i class="fa-solid fa-sort"></i></th>
                            <th>Rack # <i class="fa-solid fa-sort"></i></th>
                            <th>Position <i class="fa-solid fa-sort"></i></th>
                            <th>Quantity <i class="fa-solid fa-sort"></i></th>
                            <th>Amount <i class="fa-solid fa-sort"></i></th>
                            <th>Action <i class="fa-solid fa-sort"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Brand">5 Star</td>
                            <td data-label="Weight">7.00</td>
                            <td data-label="Pieces/Box">150</td>
                            <td data-label="Batch">21</td>
                            <td data-label="Production Date">23/08/2023</td>
                            <td data-label="Store">A.R.E</td>
                            <td data-label="Room #">02</td>
                            <td data-label="Rack #">23</td>
                            <td data-label="Position">Front</td>
                            <td data-label="Quantity">200</td>
                            <td data-label="Amount">1000</td>
                            <td data-label="Action"><button class="kino-btn-text text-danger"><i
                                        class="fa-solid fa-trash"></i></button></td>
                        </tr>
                        <tr>
                            <td data-label="Brand">5 Star</td>
                            <td data-label="Weight">7.00</td>
                            <td data-label="Pieces/Box">150</td>
                            <td data-label="Batch">21</td>
                            <td data-label="Production Date">23/08/2023</td>
                            <td data-label="Store">A.R.E</td>
                            <td data-label="Room #">02</td>
                            <td data-label="Rack #">23</td>
                            <td data-label="Position">Front</td>
                            <td data-label="Quantity">200</td>
                            <td data-label="Amount">1000</td>
                            <td data-label="Action"><button class="kino-btn-text text-danger"><i
                                        class="fa-solid fa-trash"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-12">
            <div class="bg-fade d-flex align-items-center flex-wrap justify-content-between">
                <div class="kino-footer-fields my-1">
                    <div class="fields">
                        <span>Total Boxes</span>
                        <h6>250</h6>
                    </div>
                    <div class="fields">
                        <span>Packing Weight</span>
                        <h6>2200</h6>
                    </div>
                    <div class="fields">
                        <span>Net Weight</span>
                        <h6>2150</h6>
                    </div>
                    <div class="fields">
                        <span>Grand Total</span>
                        <h6>12000</h6>
                    </div>
                </div>

                <div class="my-1">
                    <button class="kino-btn-text py-2 rounded">Dismiss</button>
                    <button class="kino-btn py-2 mx-2 rounded"><i class="fa-solid fa-floppy-disk"></i> Save</button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: "OtherSales"
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