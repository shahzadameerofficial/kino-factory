<template>
    <div class="row">
        <div class="col-12">
            <h6>Statistics (Weekly)</h6>
            <!-- <KinoInput type="text" :disabled="false" label="Check IT" /> -->
            <canvas id="mychart"></canvas>
        </div>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';
// import KinoInput from '../common/input-components/kino-input/kino-input.vue'
export default {
    name: "DashboardStats1",
    mounted() {
        this.initChar();
    },
    components:{
        // KinoInput
    },
    methods: {
        initChar() {
            let color = getComputedStyle(document.documentElement).getPropertyValue('--theme-text');
            const ctx = document.getElementById('mychart');
            new Chart(ctx, {
                type: "line",
                data: {
                    labels: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    datasets: [
                        {
                            label: "Items Sold",
                            data: [120, 90, 78, 95, 103, 42, 112, 1],
                            // backgroundColor: "rgba(54,73,93,.5)",
                            borderColor: `${color}`,
                            borderWidth: 3
                        },
                        {
                            label: "Customers",
                            data: [96,58,63,109,73,48,86],
                            // backgroundColor: "rgba(71, 183,132,.5)",
                            borderColor: `${color}53`,
                            borderWidth: 3
                        },
                        {
                            label: "Suppliers",
                            data: [12, 9, 15, 24, 28, 7, 22],
                            // backgroundColor: "rgba(71, 183,132,.5)",
                            borderColor: `gray`,
                            borderWidth: 3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                    padding: 25
                                }
                            }
                        ]
                    }
                }
            });
        }
    }
}
</script>

<style scoped>
</style>