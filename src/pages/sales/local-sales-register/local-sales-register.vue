<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Local Sales Register</h6>
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
                            <th>Customer Code <i class="fa-solid fa-sort"></i></th>
                            <th>Customer Name <i class="fa-solid fa-sort"></i></th>
                            <th>Vehicle # <i class="fa-solid fa-sort"></i></th>
                            <th>Builty # <i class="fa-solid fa-sort"></i></th>
                            <th>Date <i class="fa-solid fa-sort"></i></th>
                            <th>Driver <i class="fa-solid fa-sort"></i></th>
                            <th>Discount <i class="fa-solid fa-sort"></i></th>
                            <th>Boxes <i class="fa-solid fa-sort"></i></th>
                            <th>Pending <i class="fa-solid fa-sort"></i></th>
                            <th>Action <i class="fa-solid fa-sort"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Loading #">23421</td>
                            <td data-label="Customer Code">23/08/2023</td>
                            <td data-label="Customer Name">5 Star</td>
                            <td data-label="Vehicle #">MTA-5</td>
                            <td data-label="Builty #">342</td>
                            <td data-label="Date">32</td>
                            <td data-label="Driver">MTA-5</td>
                            <td data-label="Discount">342</td>
                            <td data-label="Boxes">342</td>
                            <td data-label="Pending">32</td>
                            <td data-label="Action">
                                <button class="kino-btn-text text-secondary" title="Print"><i
                                        class="fa-solid fa-print"></i></button>
                                <button class="kino-btn-text text-danger" title="Delete"><i
                                        class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>

                        <tr>
                            <td data-label="Loading #">23421</td>
                            <td data-label="Customer Code">23/08/2023</td>
                            <td data-label="Customer Name">5 Star</td>
                            <td data-label="Vehicle #">MTA-5</td>
                            <td data-label="Builty #">342</td>
                            <td data-label="Date">32</td>
                            <td data-label="Driver">MTA-5</td>
                            <td data-label="Discount">342</td>
                            <td data-label="Boxes">342</td>
                            <td data-label="Pending">32</td>
                            <td data-label="Action">
                                <button class="kino-btn-text text-secondary" title="Print"><i
                                        class="fa-solid fa-print"></i></button>
                                <button class="kino-btn-text text-danger" title="Delete"><i
                                        class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="d-flex mb-2 align-items-center justify-content-between p-2 bg-fade">

                <div class="btns">
                    <button class="kino-btn rounded"><i class="fa-solid fa-print"></i> Print Report</button>
                </div>
                <div class="kino-footer-fields">
                    <div class="field">
                        <span>Sales Count</span>
                        <h6>3</h6>
                    </div>
                    <div class="field">
                        <span>Total Boxes</span>
                        <h6>250.00</h6>
                    </div>
                    <div class="field">
                        <span>Grand Total</span>
                        <h6>1242130.00</h6>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
export default {
    name: "LocalSalesRegister",
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
}</style>