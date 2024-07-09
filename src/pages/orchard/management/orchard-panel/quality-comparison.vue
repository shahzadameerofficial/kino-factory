<template>
    <div class="qualities">
        <div class="row">
            <div class="col-md-0">
            </div>
            <div class="col-md-12">
                <canvas id="mychart" class="mx-auto"></canvas>
            </div>
            <div class="col-md-12">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Baskets</th>
                            <th>Muns</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Safi</th>
                            <td>200</td>
                            <td>120</td>
                            <td>12300</td>
                        </tr>
                        <tr>
                            <th>Chant</th>
                            <td>350</td>
                            <td>180</td>
                            <td>12500</td>
                        </tr>
                        <tr>
                            <th>Kargal</th>
                            <td>170</td>
                            <td>240</td>
                            <td>11800</td>
                        </tr>
                        <tr>
                            <th>Total (PKR)</th>
                            <td>730</td>
                            <td>540</td>
                            <td>36600</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';

export default {
    name: "QualityComparison",

    mounted() {
        this.initChar();
    },
    methods: {
        initChar() {
            let color = getComputedStyle(document.documentElement).getPropertyValue('--theme-text');
            const ctx = document.getElementById('mychart');
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ["Kargal 37%", "Safi 40%", "Chant 23%"],
                    datasets: [{
                        label: "Kino Factory",
                        data: [37, 40, 23],
                        backgroundColor: [color, color+'8c', color+'cd'],
                        // backgroundColor: ['#fa7d42', '#f39c73', 'rgb(255, 205, 86)'],
                        hoverOffset: 2
                    }],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            align: 'start',
                            labels: {
                                boxWidth: 12,
                                borderRadius: 5
                            },

                        }
                    }
                },
            });
        }
    }
}
</script>
<style scoped>
#mychart {
    width: 90%;
    text-align: center;
}

.qualities {
    background-color: #fff;
    border-radius: 10px;
    padding: 0.5em 0.8em;
    box-shadow: 0px 0px 3px 0 rgba(0, 0, 0, 0.2);
}

table {
    width: 100%;
    font-size: 0.7em;
    margin-top: 5px;
}

table th {
    white-space: no-wrap;
    text-overflow: ellipsis;
    text-wrap: nowrap;
    font-weight: 600;
    text-align: center;
}
table tbody th{
    text-align: start;
}

table td,
table th {
    border-bottom: 1px solid #e0e0e0;
    text-align: center;
}


table td {
    text-align: center;
    color: #666666;
    white-space: no-wrap;
    text-overflow: ellipsis;
    text-wrap: nowrap;
}
</style>