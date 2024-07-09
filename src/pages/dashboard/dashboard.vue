<template>
  <div class="row">
    <div class="col-12 mb-2">
      <DashboardHeader />
    </div>
    <div class="col-9">
      <div class="row">
        <div class="col-12 mb-2">
          <DashboardTopDetails />
        </div>
        <div class="col-12 mb-2">
          <DashboardStats1 />
        </div>
      </div>
    </div>

    <div class="col-3">
      <DashboardRightPanel />
    </div>
  </div>
</template>
<script>
import DashboardHeader from "./dashboard-header.vue";
import DashboardTopDetails from "./dashboard-top-details.vue";
import DashboardStats1 from "./dashboard-stats1.vue";
import DashboardRightPanel from "./dashboard-right-panel.vue";
// import Chart from 'chart.js/auto';
export default {
  name: "DashboardComponent",
  components: {
    DashboardHeader,
    DashboardTopDetails,
    DashboardStats1,
    DashboardRightPanel,
  },
};
</script>
<style scoped></style>
