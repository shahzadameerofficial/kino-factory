<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Pending Local Sales</h6>
            </div>
        </div>
        <div class="col-12">
            <div class="kino-table-head kino-bg text-white p-2">
                <h6>Logs</h6>
                <div class="searchbox rounded">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search" placeholder="Search">
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="bg-fade p-2 d-flex align-items-center">
                <h6 class="mb-2 mx-2">Filters </h6>
                <div class="filters">
                    <KinoInput label="From" type="date" class="mb-2"/>
                    <KinoInput label="To" type="date" class="mb-2"/>
                    <KinoInput label="Customer Id" type="text" placeholder="e.g 123567" class="mb-2"/>
                </div>
            </div>



            <div class="kino-table responsive-lg mb-2">
                <table>
                    <thead>
                        <tr>
                            <th>Loading # <i class="fa-solid fa-sort"></i></th>
                            <th>Date <i class="fa-solid fa-sort"></i></th>
                            <th>Customer Name <i class="fa-solid fa-sort"></i></th>
                            <th>Vehicle # <i class="fa-solid fa-sort"></i></th>
                            <th>Buily # <i class="fa-solid fa-sort"></i></th>
                            <th>Driver <i class="fa-solid fa-sort"></i></th>
                            <th>Driver CNIC <i class="fa-solid fa-sort"></i></th>
                            <th>Boxes <i class="fa-solid fa-sort"></i></th>
                            <th>Action <i class="fa-solid fa-sort"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>23421</td>
                            <td>23/08/2023</td>
                            <td>5 Star</td>
                            <td>MTA-5</td>
                            <td>342</td>
                            <td>32</td>
                            <td>MTA-5</td>
                            <td>342</td>
                            <td>
                                <button class="kino-btn-text kin-text" title="Edit/View"><i class="fa-solid fa-file-pen"></i></button>
                                <button class="kino-btn-text text-secondary" title="Print"><i class="fa-solid fa-print"></i></button>
                                <button class="kino-btn-text text-danger" title="Delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>

                        <tr>
                            <td>23421</td>
                            <td>23/08/2023</td>
                            <td>5 Star</td>
                            <td>MTA-5</td>
                            <td>342</td>
                            <td>32</td>
                            <td>MTA-5</td>
                            <td>342</td>
                            <td>
                                <button class="kino-btn-text kin-text" title="Edit/View"><i class="fa-solid fa-file-pen"></i></button>
                                <button class="kino-btn-text text-secondary" title="Print"><i class="fa-solid fa-print"></i></button>
                                <button class="kino-btn-text text-danger" title="Delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "PendingLocalSales",
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

.filters {
    display: flex;
    align-items: center;
    gap: .2rem;
    flex-wrap: wrap;
}


</style>