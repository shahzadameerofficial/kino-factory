<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Export Sales Profit Loss Report</h6>
            </div>
        </div>
        <div class="col-12">
            <div class="kino-table-head kino-bg text-white p-2">
                <h6>Farhan Akhtar</h6>
                <div class="searchbox rounded">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search" placeholder="Search">
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="kino-table responsive-lg line-border mb-2">
                <table>
                    <thead>
                        <tr>
                            <th>Loading # <i class="fa-solid fa-sort"></i></th>
                            <th>Date <i class="fa-solid fa-sort"></i></th>
                            <th>Container # <i class="fa-solid fa-sort"></i></th>
                            <th>Qty <i class="fa-solid fa-sort"></i></th>
                            <th>Amount <i class="fa-solid fa-sort"></i></th>
                            <th>Sea Freight <i class="fa-solid fa-sort"></i></th>
                            <th>Local Fare <i class="fa-solid fa-sort"></i></th>
                            <th>Clearance <i class="fa-solid fa-sort"></i></th>
                            <th>Plug In <i class="fa-solid fa-sort"></i></th>
                            <th>Courier <i class="fa-solid fa-sort"></i></th>
                            <th>Total <i class="fa-solid fa-sort"></i></th>
                            <th>Purchase <i class="fa-solid fa-sort"></i></th>
                            <th>Sale <i class="fa-solid fa-sort"></i></th>
                            <th>Loss/Profit <i class="fa-solid fa-sort"></i></th>
                            <th>Ex.Rate <i class="fa-solid fa-sort"></i></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Loading #">23421</td>
                            <td data-label="Date">23/08/2023</td>
                            <td data-label="Container #">5 Star</td>
                            <td data-label="Quantity">MTA</td>
                            <td data-label="Amount">342</td>
                            <td data-label="Sea Freight">32</td>
                            <td data-label="Local Fare">MTA-5</td>
                            <td data-label="Clearance">342</td>
                            <td data-label="Plug In">342</td>
                            <td data-label="Courier">32</td>
                            <td data-label="Total">32</td>
                            <td data-label="Purchase">MTA-5</td>
                            <td data-label="Sale">342</td>
                            <td data-label="Loss/Profit">342</td>
                            <td data-label="Ex.Rate">32</td>
                            <td data-label="Action">
                                <button class="kino-btn-text kin-text" title="Edit/View"><i
                                        class="fa-solid fa-file-pen"></i></button>
                                <button class="kino-btn-text text-secondary" title="Print"><i
                                        class="fa-solid fa-print"></i></button>
                                <button class="kino-btn-text text-danger" title="Delete"><i
                                        class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>

                        <tr>
                            <td data-label="Loading #">23421</td>
                            <td data-label="Date">23/08/2023</td>
                            <td data-label="Container #">5 Star</td>
                            <td data-label="Quantity">MTA</td>
                            <td data-label="Amount">342</td>
                            <td data-label="Sea Freight">32</td>
                            <td data-label="Local Fare">MTA-5</td>
                            <td data-label="Clearance">342</td>
                            <td data-label="Plug In">342</td>
                            <td data-label="Courier">32</td>
                            <td data-label="Total">32</td>
                            <td data-label="Purchase">MTA-5</td>
                            <td data-label="Sale">342</td>
                            <td data-label="Loss/Profit">342</td>
                            <td data-label="Ex.Rate">32</td>
                            <td data-label="Action">
                                <button class="kino-btn-text kin-text" title="Edit/View"><i
                                        class="fa-solid fa-file-pen"></i></button>
                                <button class="kino-btn-text text-secondary" title="Print"><i
                                        class="fa-solid fa-print"></i></button>
                                <button class="kino-btn-text text-danger" title="Delete"><i
                                        class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="d-flex mb-2 align-items-center justify-content-between flex-wrap p-2 bg-fade">

                <div class="kino-footer-fields">
                    <div class="field">
                        <span>Total Carton's</span>
                        <h6>3</h6>
                    </div>
                    <div class="field">
                        <span>Total Container's</span>
                        <h6>250.00</h6>
                    </div>
                    <div class="field">
                        <span>Profit/Loss</span>
                        <h6>0</h6>
                    </div>
                </div>
                <div class="btns">
                    <button class="kino-btn rounded"><i class="fa-solid fa-floppy-disk"></i> Save Changes</button>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
export default {
    name: "ExportSalesProfitLossReport",
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