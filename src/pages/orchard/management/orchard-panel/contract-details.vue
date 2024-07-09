<template>
    <div class="contract mb-2">
        <!-- <h5 class="main-header">About Contract</h5> -->
        <div class="row">
            <div class="col-md-6">
                <div class="details">
                    <div class="name">Farhan Akhtar</div>
                    <span class="head">49 Chak NB, Sargodha, Punjab, Pakistan</span>
                    <div class="head ">Last Harvesting : 15 Sep, 2023</div>
                    <div class="head"><i class="fa-solid fa-square-phone" style="color: var(--theme-text);"></i> 03012345678</div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row prices">
                    <div class="col-12 text-end my-2">
                        <span class="details labels rounded-pill px-2 mx-2">
                            <span class="">Advance: </span>
                            <span>{{dat.contract?.advance}}PKR</span>
                        </span>
                        <span class="details labels rounded-pill px-2" v-if="dat.contract">
                            <span class="">Contract Date: </span>
                            <span>{{dat.contract?.contractDate | formatDate('full')}}</span>
                        </span>
                    </div>
                    <div class="col-4">
                        <div class="details">
                            <div>{{dat.contract?.chantPrice}}PKR</div>
                            <span class="head">Chant Price</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="details">
                            <div>720PKR</div>
                            <span class="head">Kargal Price</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="details">
                            <div>570PKR</div>
                            <span class="head">Safi Price</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>

export default {
    name: "ContractDetails",
    props:{
        details: Object
    },
    data(){
        return{
            dat:{}
        }
    },
    computed:{
        data(){
            return this.details
        }
    },
    mounted(){
        setInterval(() => {
            this.dat = this.details
        }, 3000);
    },

    methods: {
        
    },
    watch:{
        details(newVal){
            this.dat = newVal
        }
    }
}
</script>

<style scoped>
.contract {
    background-color: #fff;
    border-radius: 10px;
    padding: 0.5em 0.8em;
    box-shadow: 0px 0px 3px 0 rgba(0, 0, 0, 0.2);
    font-size: 0.9rem;
}

.contract .fields {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}


.contract .details div {
    font-size: 1em;
    font-weight: 500;
    color: #313131;
}

.contract .details .head {
    font-size: 0.8em;
    color: #696969;
}

.contract .prices {

    text-align: end;
}

.contract .prices .details div {
    color: var(--theme-text);
    font-weight: bold;
    font-size: 1rem;
}

.contract a {
    text-decoration: none;
    color: #696969;
}

.contract .name {
    font-size: 1.5rem !important;
    font-weight: 600 !important;
    color: var(--theme-text) !important;
}

.contract .labels {
    font-size: 0.8rem;
    color: #585858;
    background-color: #e7e7e7;
    /* background-color: #b9b9b9; */
}

.contract .cell-info {
    font-size: 0.8rem !important;
    font-weight: 500 !important;
}
</style>