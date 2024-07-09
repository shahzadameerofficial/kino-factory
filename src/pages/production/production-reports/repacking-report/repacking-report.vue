<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Repacking Report</h6>
            </div>
        </div>
        <div class="col-12">
            <div class="kino-title-head kino-bg text-white p-2">
                <h6>Production List</h6>
            </div>
        </div>
        <div class="col-12">
            <div class="bg-fade p-2 d-flex align-items-center">
                <h6 class="mb-2 mx-2">Filters </h6>
                <div class="filters">
                    
                    <div class="kino-input mb-2">
                        <input type="date" class="form-control">
                        <label for="">From</label>
                    </div>
                    <div class="kino-input mb-2">
                        <input type="date" class="form-control">
                        <label for="">To</label>
                    </div>
                    <div class="kino-input mb-2">
                        <select name="" class="form-control" id="">
                            <option value="" selected>Select Company</option>
                            <option value="">Aziz Distributer</option>
                            <option value="">32</option>
                        </select>
                        <label for="">Sale</label>
                    </div>
                    <div class="kino-input mb-2">
                        <select name="" class="form-control" id="">
                            <option value="" selected>All</option>
                            <option value="">Foreign</option>
                            <option value="">Local</option>
                        </select>
                        <label for="">Brand Type</label>
                    </div>
                    <div class="kino-input mb-2">
                        <select name="" class="form-control" id="">
                            <option value="" selected>All</option>
                            <option value="">5 Star</option>
                            <option value="">Aniq</option>
                        </select>
                        <label for="">Brand</label>
                    </div>
                    <div class="kino-input mb-2">
                        <select name="" class="form-control" id="">
                            <option value="" selected>Weight / Pack</option>
                            <option value="">All</option>
                            <option value="">ABC</option>
                            <option value="">XYZ</option>
                        </select>
                        <label for="">Weight/Pack</label>
                    </div>
                    
                    <div class="kino-input mb-2">
                        <select name="" class="form-control" id="">
                            <option value="" selected>Pieces / Pack</option>
                            <option value="">24</option>
                            <option value="">32</option>
                        </select>
                        <label for="">Pieces/Pack</label>
                    </div>

                    
                </div>
            </div>



            <div class="kino-table responsive-lg mb-2">
                <table>
                    <thead>
                        <tr>
                            <th>Sale <i class="fa-solid fa-sort"></i></th>
                            <th>Loading # <i class="fa-solid fa-sort"></i></th>
                            <th>Date <i class="fa-solid fa-sort"></i></th>
                            <th>Customer Code <i class="fa-solid fa-sort"></i></th>
                            <th>Customer Name <i class="fa-solid fa-sort"></i></th>
                            <th>Brand <i class="fa-solid fa-sort"></i></th>
                            <th>Days Old <i class="fa-solid fa-sort"></i></th>
                            <th>Weight <i class="fa-solid fa-sort"></i></th>
                            <th>Pieces <i class="fa-solid fa-sort"></i></th>
                            <th>Quantity <i class="fa-solid fa-sort"></i></th>
                            <th>Action <i class="fa-solid fa-sort"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Sale">23/08/2023</td>
                            <td data-label="Loading #">12</td>
                            <td data-label="Date">5 Star</td>
                            <td data-label="Customer Code">MTA-5</td>
                            <td data-label="Customer Name">342</td>
                            <td data-label="Brand">32</td>
                            <td data-label="Days Old">52</td>
                            <td data-label="Weight">MTA-5</td>
                            <td data-label="Pieces">342</td>
                            <td data-label="Quantity">32</td>
                            <td data-label="Action"><button class="kino-btn-text text-danger"><i class="fa-solid fa-trash"></i></button></td>
                        </tr>
                        <tr>
                            <td data-label="Sale">23/08/2023</td>
                            <td data-label="Loading #">12</td>
                            <td data-label="Date">5 Star</td>
                            <td data-label="Customer Code">MTA-5</td>
                            <td data-label="Customer Name">342</td>
                            <td data-label="Brand">32</td>
                            <td data-label="Days Old">52</td>
                            <td data-label="Weight">MTA-5</td>
                            <td data-label="Pieces">342</td>
                            <td data-label="Quantity">32</td>
                            <td data-label="Action"><button class="kino-btn-text text-danger"><i class="fa-solid fa-trash"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "RepackingReport",
    data() {
        return {
            isEnglish: true
        }
    },
    methods: {
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

.filters {
    display: flex;
    align-items: center;
    gap: .2rem;
    flex-wrap: wrap;
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

.actions {
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
</style>