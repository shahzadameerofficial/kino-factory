<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">Weight Gain and Loss Report</h6>
            </div>
        </div>
        <div class="col-12">
            <div class="kino-title-head kino-bg text-white p-2">
                <h6>Production List</h6>
            </div>
        </div>
        <div class="col-12">
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
                            <td data-label="Loading # ">12</td>
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
                            <td data-label="Loading # ">12</td>
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
    name: "WeightGainAndLossReport",
    data() {
        return {
            isEnglish: true
        }
    },
}
</script>
<style scoped>
.row {
    font-size: 0.9rem;
}

</style>