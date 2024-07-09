<template>
    <div class="">
        <div class="kino-table-head mb-2">
            <h5 class="main-header">Check In Log</h5>
            <div class="searchbox rounded">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search">
                <select name="" id="">
                    <option value="">By Date</option>
                    <option value="">By Token</option>
                </select>
            </div>
        </div>
        <div class="kino-table kino-table-responsive-md">
            <table class="">
                <thead>
                    <tr>
                        <th>Date <i class="fa-solid fa-sort"></i></th>
                        <th>Token <i class="fa-solid fa-sort"></i></th>
                        <th>Safi <i class="fa-solid fa-sort"></i></th>
                        <th>Chant <i class="fa-solid fa-sort"></i></th>
                        <th>Kargal <i class="fa-solid fa-sort"></i></th>
                        <th>Total <i class="fa-solid fa-sort"></i></th>
                    </tr>
                </thead>
                <tbody class="scroll-element scroll-element-parent">
                    <tr>
                        <td data-label="Date">3 Sep 2023</td>
                        <td data-label="Token">63553453</td>
                        <td data-label="Safi">60/30/10 +294000</td>
                        <td data-label="Chant">20/50/30 +511020</td>
                        <td data-label="Kargal">40/10/50 +414242</td>
                        <td data-label="Total">414200</td>
                    </tr>
                    <tr>
                        <td data-label="Date">5 Aug 2023</td>
                        <td data-label="Token">353542</td>
                        <td data-label="Safi">32/32/34 +423211</td>
                        <td data-label="Chant">75/43/65 +423325</td>
                        <td data-label="Kargal">46/43/32 +345234</td>
                        <td data-label="Total">100200</td>
                    </tr>
                    <tr>
                        <td data-label="Date">5 Jul 2023</td>
                        <td data-label="Token">1243523</td>
                        <td data-label="Safi">53/23/56 +435234</td>
                        <td data-label="Chant">12/86/11 +532425</td>
                        <td data-label="Kargal">40/10/50 +723435</td>
                        <td data-label="Total">755000</td>
                    </tr>
                    <tr>
                        <td data-label="Date">15 Mar 2022</td>
                        <td data-label="Token">213213</td>
                        <td data-label="Safi">42/43/23 +311223</td>
                        <td data-label="Chant">11/42/53 +532432</td>
                        <td data-label="Kargal">21/53/32 +213123</td>
                        <td data-label="Total">235000</td>
                    </tr>
                    <tr>
                        <td data-label="Date">13 Sep 2023</td>
                        <td data-label="Token">242100</td>
                        <td data-label="Safi">23/54/32 +232421</td>
                        <td data-label="Chant">42/63/53 +234324</td>
                        <td data-label="Kargal">12/42/24 +532423</td>
                        <td data-label="Total">424600</td>
                    </tr>
                    <tr>
                        <td data-label="Date">23 Aug 2023</td>
                        <td data-label="Token">242350</td>
                        <td data-label="Safi">64/53/12 +234000</td>
                        <td data-label="Chant">32/23/43 +345800</td>
                        <td data-label="Kargal">53/10/23 +435000</td>
                        <td data-label="Total">408000</td>
                    </tr>
                    <tr>
                        <td data-label="Date">15 Mar 2022</td>
                        <td data-label="Token">213213</td>
                        <td data-label="Safi">42/43/23 +311223</td>
                        <td data-label="Chant">11/42/53 +532432</td>
                        <td data-label="Kargal">21/53/32 +213123</td>
                        <td data-label="Total">235000</td>
                    </tr>
                    <tr>
                        <td data-label="Date">23 Aug 2023</td>
                        <td data-label="Token">242350</td>
                        <td data-label="Safi">64/53/12 +234000</td>
                        <td data-label="Chant">32/23/43 +345800</td>
                        <td data-label="Kargal">53/10/23 +435000</td>
                        <td data-label="Total">408000</td>
                    </tr>
                    <tr>
                        <td data-label="Date">13 Sep 2023</td>
                        <td data-label="Token">242100</td>
                        <td data-label="Safi">23/54/32 +232421</td>
                        <td data-label="Chant">42/63/53 +234324</td>
                        <td data-label="Kargal">12/42/24 +532423</td>
                        <td data-label="Total">424600</td>
                    </tr>
                    <tr>
                        <td data-label="Date">29 Sep 2023</td>
                        <td data-label="Token">435033</td>
                        <td data-label="Safi">53/14/32 +23425</td>
                        <td data-label="Chant">43/53/08 +45634</td>
                        <td data-label="Kargal">21/53/34 +23432</td>
                        <td data-label="Total">451000</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
<script>
export default {
    name: "CheckInLog"
}
</script>
<style scoped></style>