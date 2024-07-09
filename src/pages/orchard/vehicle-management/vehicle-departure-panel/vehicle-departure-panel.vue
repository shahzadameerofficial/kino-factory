<template>
    <div class="row main gx-2">
        <div class="col-12 mb-2">
            <div class="d-flex justify-content-between">

                <h6 class="mb-0">Vehicle Departure Panel</h6>
                <span class="details labels rounded-pill px-2">
                    <span class="">Contract Date: </span>
                    <span>12 Sep, 2023</span>
                </span>
            </div>
        </div>
        <div class="col-12">
            <div class="row transport">
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-12 mb-1">
                            <div class="kino-title-head kino-bg text-white px-2 rounded-pill">
                                <h6>Transport</h6>
                                <button class="kino-btn-text text-white" data-toggle="modal" 
                            data-target="#insertModal" @click="modalType = 'transporter'"><i class="fa-solid fa-square-plus"></i></button>
                            </div>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="top-title" v-if="transporter">
                                <h6 >{{transporter.name | titlecase}}</h6>
                                <div class="details">
                                    <span class="labels rounded-pill px-2 mx-2"><i
                                            class="fa-solid fa-square-phone kino-text"></i> {{transporter.mobile}}</span>
                                    <span class="labels rounded-pill px-2">Contract: 23 Sep 2023</span>
                                </div>
                            </div>
                            <div class="top-title" v-else>
                                Please Select Transporter
                            </div>

                        </div>

                        <div class="col-sm-6 col-md-4 mb-3">
                            <KinoInput label="Driver Name" type="text" placeholder="e.g Shahid" />
                        </div>
                        <div class="col-sm-6 col-md-4 mb-3">
                            <KinoInput label="Driver Cell" type="text" placeholder="e.g 0300-1234567" />
                        </div>
                        <div class="col-sm-6 col-md-4 mb-3">
                            <KinoInput label="Truck No." type="text" placeholder="e.g AF123" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-12 mb-1">
                            <div class="kino-title-head kino-bg text-white px-2 rounded-pill">
                                <h6>Orchard</h6>
                                <button class="kino-btn-text text-white" data-toggle="modal" 
                            data-target="#insertModal" @click="modalType = 'orchard'"><i class="fa-solid fa-square-plus"></i></button>

                            </div>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="top-title" v-if="orchard">
                                <h6>{{orchard.orchardName}}</h6>
                                <span class="labels px-2 rounded-pill"><i class="fa-solid fa-location-dot kino-text"></i> {{ orchard.orchardAddress}}</span>
                            </div>
                            <div class="top-title" v-else>
                                Please Select Orchard
                            </div>

                        </div>

                        <div class="col-6 mb-3">
                            <KinoInput label="Baskets" type="number" placeholder="e.g 5000" />
                        </div>
                        <div class="col-3 mb-3">
                            <KinoInput label="Type" :options="['harvesting','sorting']"/>
                        </div>
                        <div class="col-3 mb-3 p-1">
                            <button class="kino-btn rounded"><i class="fa-solid fa-square-plus"></i> <span
                                class="fs-2">Insert</span></button>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">

                <div class="col-12 mb-2">
                    <div class="kino-table responsive-lg">
                        <table>
                            <thead>
                                <tr>
                                    <th>Id <i class="fa-solid fa-sort"></i></th>
                                    <th>Name <i class="fa-solid fa-sort"></i></th>
                                    <th>Type <i class="fa-solid fa-sort"></i></th>
                                    <th>Cell <i class="fa-solid fa-sort"></i></th>
                                    <th>Contract Date <i class="fa-solid fa-sort"></i></th>
                                    <th>Actions <i class="fa-solid fa-sort"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Id">412</td>
                                    <td data-label="Name">Shahid</td>
                                    <td data-label="Type">Harvesting</td>
                                    <td data-label="Cell">0312-5233231</td>
                                    <td data-label="Contract Date">23 Sep 2023</td>
                                    <td data-label="Action">
                                        <button class="kino-btn-text text-danger"><i class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="">232</td>
                                    <td data-label="">Azam</td>
                                    <td data-label="">Sorting</td>
                                    <td data-label="">0321-4521321</td>
                                    <td data-label="">24 Sep 2023</td>
                                    <td data-label="">
                                        <button class="kino-btn-text text-danger"><i class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="input-group mb-2">
                <span class="input-group-text" id="basic-addon1">Remarks</span>
                <input type="text" class="form-control" placeholder="...">
            </div>
        </div>
        <div class="col-12 text-last">
            <button class="kino-btn-text rounded">Discard</button>
            <button class="kino-btn  mx-2 rounded"><i class="fa-solid fa-truck-ramp-box"></i> Book</button>
        </div>
        <div class="col-12">
            <div class="modal kino-modal" tabindex="-1" id="insertModal">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="modal-title">{{ modalTitle ? modalTitle : 'Confirm' }}</h6>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <KinoSearch :data="transporters" @output="selectedData" v-if="modalType === 'transporter'"/>
                            <KinoSearch :data="orchards" @output="selectedData" v-else-if="modalType === 'orchard'"/>
                            <KinoTable :tableData="currentData"/>
                            <table v-if="currentData">
                                <tbody>
                                    <tr v-for="item in currentData" :key="item.id">
                                        <td v-for="subItem in item" :key="subItem">{{ subItem }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="kino-btn-text rounded" data-dismiss="modal">Discard</button>
                            <button type="button" class="kino-btn rounded" data-dismiss="modal"
                                >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "VehicleDeparturePanel",
    data(){
        return{
            modalType: null,
            currentData:null,
            transporter:'',
            orchard:'',
        }
    },
    computed: {
        transporters() {
            return this.$store.getters.getData('transporters') || [];
        },
        orchards() {
            return this.$store.getters.getData('orchardlist') || [];
        },
    },
    created() {
        this.$store.dispatch('fetchData', 'transporters');
        this.$store.dispatch('fetchData', 'orchardlist');
    },
    methods:{
        selectedData(data){
            if(this.modalType === 'transporter'){
                this.transporter = data
                this.currentData = data
            }else if(this.modalType === 'orchard'){
                this.orchard = data;
                console.log(data);
                this.currentData = data
            }
        }
    }
}
</script>
<style scoped>
.input-group-text {
    background-color: var(--theme-text);
    color: #fff;
}

.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.text-last {
    text-align: end;
}

.top-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.top-title h6 {
    margin-bottom: 0;
    color: var(--theme-text);
}


.content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}


.labels {
    font-size: 0.8rem;
    color: #585858;
    background-color: #e7e7e7;
    /* background-color: #b9b9b9; */
}



.kino-title-head select.form-control {
    background-color: transparent;
    border: 0;
    color: #fff;
}

.modal-body{
    min-height: 50vh;
}
</style>