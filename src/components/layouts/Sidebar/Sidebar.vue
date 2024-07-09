<template>
  <aside>
    <div class="logo"><i class="fa-solid fa-lemon"></i> Kino Factory</div>
    <!-- <h6 class="text-secondary">Menu</h6> -->
    <button class="kino-btn hamburg-menu" @click="stickyBar()">
      <i class="fa-solid fa-bars"></i>
    </button>
    <ul class="side-navbar">
      <li class="dashboard">
        <router-link @click="goTo($event)" to="/dashboard">
          <i class="fa-solid fa-chart-line"></i>
          <span>Dashboard</span>
        </router-link>
      </li>
      <li>
        <a href="" @click="goTo($event)">
          <i class="fa-solid fa-boxes-stacked"></i>
          <span>Inventory</span>
          <i class="fa-solid fa-angle-up"></i>
        </a>
        <ul class="menu">
          <li>
            <router-link to="/inventory/purchase-panel"
              >Purchase Panel</router-link
            >
          </li>
          <li>
            <router-link to="/inventory/allotment-panel"
              >Allotment Panel</router-link
            >
          </li>
          <li>
            <router-link to="/inventory/return-allotment-panel"
              >Return Allotment Panel</router-link
            >
          </li>

          <li>
            <router-link to="/inventory/vehicle-fueling-panel"
              >Vehicle Fueling Panel</router-link
            >
          </li>
          <li>
            <router-link to="/inventory/fueling-log-report"
              >Fueling Log Report</router-link
            >
          </li>
          <li>
            <router-link to="/inventory/consolidated-fuel-report"
              >Consolidated Fuel Report</router-link
            >
          </li>
          <li>
            <router-link to="/inventory/product-management"
              >Product Management</router-link
            >
          </li>
          <li>
            <router-link to="/inventory/vendor-stock-in-report"
              >Vendor Stock In Report</router-link
            >
          </li>
        </ul>
      </li>
      <li>
        <a href="" @click="goTo($event)">
          <i class="fa-solid fa-fan"></i>
          <span>Orchards</span>
          <i class="fa-solid fa-angle-up"></i>
        </a>
        <ul class="menu">
          <li>
            <a href="" @click="dropDown($event)">
              <span>Management</span>
              <i class="fa-solid fa-caret-up"></i>
            </a>
            <ul class="submenu">
              <li>
                <router-link to="/orchards/management/orchard-supplier"
                  >Supplier Management</router-link
                >
              </li>
              <li>
                <router-link to="/orchards/management/orchard-management"
                  >Orchard Management</router-link
                >
              </li>
              <li>
                <router-link to="/orchards/management/orchard-contract-panel"
                  >Contract Panel</router-link
                >
              </li>
              <li>
                <router-link to="/orchards/management/orchard-panel"
                  >Orchard Panel</router-link
                >
              </li>
              <li>
                <router-link to="/orchards/management/survey-reports"
                  >Survey Reports</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="" @click="dropDown($event)">
              <span>Vehicle Management</span>
              <i class="fa-solid fa-caret-up"></i>
            </a>
            <ul class="submenu">
              <li>
                <router-link
                  to="/orchards/vehicle-management/vehicle-departure-panel"
                  >Vehicle Departure Panel</router-link
                >
              </li>
              <li>
                <router-link to="/departure-token-list"
                  >Departure Token List</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="" @click="dropDown($event)">
              <span>Orchard Reports</span>
              <i class="fa-solid fa-caret-up"></i>
            </a>
          </li>
          <li>
            <a href="" @click="dropDown($event)">
              <span>Kino Casting</span>
              <i class="fa-solid fa-caret-up"></i>
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="" @click="goTo($event)">
          <i class="fa-solid fa-money-bill-transfer"></i>
          <span>Transactions</span>
          <i class="fa-solid fa-angle-up"></i>
        </a>

        <ul class="menu">
          <li>
            <router-link to="/transactions/general-vouncher"
              >General Vouncher</router-link
            >
          </li>
          <li>
            <router-link to="/transactions/general-vouncher-inter-companies"
              >General Vouncher (Inter Companies)</router-link
            >
          </li>
          <li>
            <a href="" @click="dropDown($event)">
              <span>Single Transaction Vouncher</span>
              <i class="fa-solid fa-caret-up"></i>
            </a>
            <ul class="submenu">
              <li>
                <router-link to="/transactions/single-transaction-vouncher"
                  >Daily Financial Report</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="" @click="dropDown($event)">
              <span>Multi Transaction Vouncher</span>
              <i class="fa-solid fa-caret-up"></i>
            </a>
            <ul class="submenu">
              <li>
                <router-link
                  to="/transactions/multi-transaction-vouncher/cash-paid-vouncher"
                  >Cash Paid Vouncher</router-link
                >
              </li>
              <li>
                <router-link
                  to="/transactions/multi-transaction-vouncher/cash-recieved-vouncher"
                  >Cash Recieved Vouncher</router-link
                >
              </li>

              <li>
                <router-link
                  to="/transactions/multi-transaction-vouncher/bank-paid-vouncher"
                  >Bank Paid Vouncher</router-link
                >
              </li>
              <li>
                <router-link
                  to="/transactions/multi-transaction-vouncher/bank-recieved-vouncher"
                  >Bank Recieved Vouncher</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/transactions/foreign-transactions"
              >Foreign Transactions</router-link
            >
          </li>
          <li>
            <router-link to="/transactions/foreign-multiple-transactions"
              >Foreign Multiple Transactions</router-link
            >
          </li>
        </ul>
      </li>
      <li>
        <a href="" @click="goTo($event)">
          <i class="fa-solid fa-file-waveform"></i>
          <span>Reports</span>
          <i class="fa-solid fa-angle-up"></i>
        </a>

        <ul class="menu">
          <li>
            <a href="" @click="dropDown($event)">
              <span>Accounts</span>
              <i class="fa-solid fa-caret-up"></i>
            </a>
            <ul class="submenu">
              <li>
                <router-link to="/reports/accounts/daily-financial-report"
                  >Daily Financial Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/local-ledger-report"
                  >Local Ledger Report</router-link
                >
              </li>
              <li>
                <router-link
                  to="/reports/accounts/foreign-currency-trail-report"
                  >Foreign Currency Trail Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/foreign-ledger-report"
                  >Foreign Ledger Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/chart-of-accounts"
                  >Chart of Accounts</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/cash-recieved-report"
                  >Cash Recieved Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/cash-paid-report"
                  >Cash Paid Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/cash-eport"
                  >Cash Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/trial-balance-report"
                  >Trail Balance Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/profit-loss-report"
                  >Profit Loss Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/balance-sheet-report"
                  >Balance Sheet Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/generel-vouncher-report"
                  >General Vouncher Report</router-link
                >
              </li>
              <li>
                <router-link
                  to="/reports/accounts/generel-vouncher-report-inter-comp"
                  >General Vouncher (Inter-Comp) Report</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="" @click="dropDown($event)">
              <span>Stock</span>
              <i class="fa-solid fa-caret-up"></i>
            </a>
            <ul class="submenu">
              <li>
                <router-link to="/reports/accounts/daily-financial-report"
                  >Daily Financial Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/local-ledger-report"
                  >Local Ledger Report</router-link
                >
              </li>
              <li>
                <router-link
                  to="/reports/accounts/foreign-currency-trail-report"
                  >Foreign Currency Trail Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/foreign-ledger-report"
                  >Foreign Ledger Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/chart-of-accounts"
                  >Chart of Accounts</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/cash-recieved-report"
                  >Cash Recieved Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/cash-paid-report"
                  >Cash Paid Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/cash-eport"
                  >Cash Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/trial-balance-report"
                  >Trail Balance Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/profit-loss-report"
                  >Profit Loss Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/balance-sheet-report"
                  >Balance Sheet Report</router-link
                >
              </li>
              <li>
                <router-link to="/reports/accounts/generel-vouncher-report"
                  >General Vouncher Report</router-link
                >
              </li>
              <li>
                <router-link
                  to="/reports/accounts/generel-vouncher-report-inter-comp"
                  >General Vouncher (Inter-Comp) Report</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/reports/post-gaurented-cheques"
              >Post/Gaurented Cheques</router-link
            >
          </li>
          <li>
            <router-link to="/reports/customer-ledger-report"
              >Customer Ledger Report</router-link
            >
          </li>
          <li>
            <router-link to="/reports/export-customer-ledger-report"
              >Export Customer Ledger Report</router-link
            >
          </li>
        </ul>
      </li>

      <li>
        <a href="" @click="goTo($event)">
          <i class="fa-solid fa-file-contract"></i>
          <span>General Contract</span>
          <i class="fa-solid fa-angle-up"></i>
        </a>
        <ul class="menu">
          <li>
            <router-link to="/general-contract/general-contract-panel"
              >General Contract Panel</router-link
            >
          </li>
          <li>
            <router-link to="/general-contract/general-contract-list"
              >General Contract List</router-link
            >
          </li>
          <li>
            <router-link to="/general-contract/general-contract-groups"
              >General Contract Groups</router-link
            >
          </li>
        </ul>
      </li>
      <li>
        <a href="" @click="goTo($event)">
          <i class="fa-solid fa-hand-holding-dollar"></i>
          <span>Sales</span>
          <i class="fa-solid fa-angle-up"></i>
        </a>
        <ul class="menu">
          <li>
            <router-link to="/sales/local-loading-panel"
              >Local Loading Panel</router-link
            >
          </li>
          <li>
            <router-link to="/sales/local-loading-register"
              >Local Loading Register</router-link
            >
          </li>
          <li>
            <router-link to="/sales/pending-local-sales"
              >Pending Local Sales</router-link
            >
          </li>
          <li>
            <router-link to="/sales/local-sales-register"
              >Local Sales Register</router-link
            >
          </li>
          <li>
            <router-link to="/sales/local-loading-packing-summary"
              >Local Loading Packing Summary</router-link
            >
          </li>
          <li>
            <router-link to="/sales/export-loading">Export Loading</router-link>
          </li>
          <li>
            <router-link to="/sales/export-loading-register"
              >Export Loading Register</router-link
            >
          </li>
          <li>
            <router-link to="/sales/pending-exports-sales"
              >Pending Exports Sales</router-link
            >
          </li>
          <li>
            <router-link to="/sales/export-sale-register"
              >Export Sale Register</router-link
            >
          </li>
          <li>
            <router-link to="/sales/other-sales">Other Sales</router-link>
          </li>
          <li>
            <router-link to="/sales/other-sale-register"
              >Other Sale Register</router-link
            >
          </li>
          <li>
            <router-link to="/sales/billing-hopes-rate-management"
              >Billing Hopes Rate Management</router-link
            >
          </li>
          <li>
            <router-link to="/sales/export-sale-expense"
              >Export Sale Expense</router-link
            >
          </li>
          <li>
            <router-link to="/sales/brands-loading">Brands Loading</router-link>
          </li>
          <li>
            <router-link to="/sales/export-loadings-expense"
              >Export Loadings Expense</router-link
            >
          </li>
          <li>
            <router-link to="/sales/export-sales-profit-loss-report"
              >Export Sales Profit Loss Report</router-link
            >
          </li>
          <li>
            <router-link to="/sales/export-customer-packing-summary"
              >Export Customer Packing Summary</router-link
            >
          </li>
          <li>
            <router-link to="/sales/export-sales-profit-loss-business-report"
              >Export Sales Profit Loss Business Report</router-link
            >
          </li>
        </ul>
      </li>
      <li>
        <a href="" @click="goTo($event)">
          <i class="fa-solid fa-dna"></i>
          <span>Production</span>
          <i class="fa-solid fa-angle-up"></i>
        </a>
        <ul class="menu">
          <li>
            <a href="" @click="dropDown($event)">
              <span>Production Panels</span>
              <i class="fa-solid fa-caret-up"></i>
            </a>
            <ul class="submenu">
              <li>
                <router-link to="/production-panel"
                  >Production Panel</router-link
                >
              </li>
              <li>
                <router-link to="/repack-production-panel"
                  >Repack Production Panel</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="" @click="dropDown($event)">
              <span>Production Reports</span>
              <i class="fa-solid fa-caret-up"></i>
            </a>
            <ul class="submenu">
              <li>
                <router-link
                  to="/production/production-reports/daily-production-report"
                  >Daily Production Report</router-link
                >
              </li>
              <li>
                <router-link
                  to="/production/production-reports/repacking-report"
                  >Repacking Report</router-link
                >
              </li>
              <li>
                <router-link
                  to="/production/production-reports/departure-token-list"
                  >Stock Position Report</router-link
                >
              </li>
              <li>
                <router-link
                  to="/production/production-reports/current-stock-position-report"
                  >Current Stock Position Report</router-link
                >
              </li>
              <li>
                <router-link
                  to="/production/production-reports/current-stock-position-report-day-wise"
                  >Current Stock Position Report Day-Wise</router-link
                >
              </li>
              <li>
                <router-link
                  to="/production/production-reports/stock-out-report"
                  >Stock Out Report</router-link
                >
              </li>
              <li>
                <router-link
                  to="/production/production-reports/weight-gain-and-loss-report"
                  >Weight Gain and Loss Report</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="" @click="dropDown($event)">
              <span>Management</span>
              <i class="fa-solid fa-caret-up"></i>
            </a>
            <ul class="submenu">
              <li>
                <router-link to="/vehicle-departure-panel"
                  >Brand Management</router-link
                >
              </li>
              <li>
                <router-link to="/departure-token-list"
                  >Packing Weight / Piece Management</router-link
                >
              </li>
              <li>
                <router-link to="/departure-token-list"
                  >Billing Hope Rate Manangement</router-link
                >
              </li>
              <li>
                <router-link to="/departure-token-list"
                  >Box and Sheet Usage Management</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a href="">
          <i class="fa-solid fa-truck-fast"></i>
          <span>Exports</span>
        </a>
      </li>
      <li>
        <a href="" @click="goTo($event)">
          <i class="fa-solid fa-bars-progress"></i>
          <span>Management</span>
          <i class="fa-solid fa-angle-up"></i>
        </a>
        <ul class="menu">
          <li>
            <router-link to="/management/user-management"
              >User Management</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "SidebarComponent",
  components: {},
  mounted() {
    this.activeRoute();
  },
  methods: {
    goTo(event) {
      event.preventDefault();
      event.currentTarget.parentElement.classList.toggle("active");
    },
    dropDown(event) {
      event.preventDefault();
      event.currentTarget.parentElement.classList.toggle("activate-dropdown");
    },
    activeRoute() {
      let x = document.getElementsByTagName("a");
      for (const ee of x) {
        if (ee.classList.contains("router-link-active")) {
          // console.log(ee);
          if (ee.parentElement.parentElement.classList.contains("submenu")) {
            ee.parentElement.parentElement.parentElement.classList.add(
              "activate-dropdown"
            );
            ee.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(
              "active"
            );
          } else {
            ee.parentElement.parentElement.parentElement.classList.add(
              "active"
            );
          }
        }
      }
    },
    stickyBar() {
      let sidebar = document.querySelector(".side-navbar");
      let hamburg = document.querySelector(".hamburg-menu i");
      sidebar.classList.toggle("active");
      hamburg.classList.toggle("fa-xmark");
    },
  },
};
</script>

<style scoped>
aside {
  background-color: #fff;
  height: calc(100vh - 1rem);
  border: 1px solid #eff0fb;
  position: sticky;
  top: 0.5em;
  border-radius: 10px;
  padding: 0.5rem;
  overflow-y: auto;
}

aside::-webkit-scrollbar {
  width: 5px;
}

aside::-webkit-scrollbar-thumb {
  width: 5px;
  background-color: transparent;
  border-radius: 10px;
}

aside:hover::-webkit-scrollbar-thumb:hover {
  background-color: var(--theme-text-fade);
}

aside:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1);
}

aside .logo {
  font-size: 1.3rem;
  font-weight: bold;
  font-family: "Mooli", sans-serif;
  margin-bottom: 2rem;
  text-align: center;
}

.hamburg-menu {
  display: none;
  border-radius: 1rem 0.5rem;
}

aside .logo i {
  color: var(--theme-text);
}

.side-navbar {
  list-style: none;
  padding: 0;
  font-size: 0.9rem;
  /* font-family: 'Poppins', sans-serif !important; */
}

.side-navbar > li > a:first-child {
  text-decoration: none;
  color: #757575;
  display: flex;
  align-items: center;
  margin: 3px 0;
  padding: 5px;
}

.side-navbar a:first-child i:last-child {
  margin-left: auto;
  transition: 200ms;
}

.side-navbar a i:first-child {
  width: 20px;
  color: var(--theme-text);
}

.side-navbar ul {
  list-style: none;
  padding: 0;
  overflow: hidden;
}

.side-navbar .dashboard .router-link-active {
  border-radius: 5px;
  background-color: #75757522;
  color: var(--theme-text) !important;
}
.side-navbar > li ul.menu {
  /* padding: 0.5rem; */
  /* margin-left: 10px; */
  padding: 3px 0;
  margin-top: -5px;
  background-color: #f1f1f171;
  border-radius: 0 0 5px 5px;
  font-size: 0.95em;
  display: none;
  transition: all 500ms;
}

.side-navbar ul.menu > li > .submenu li a {
  overflow: hidden;
  padding-left: 1.2rem;
}

.side-navbar > li.active > ul.menu {
  display: block;
}

.side-navbar ul.menu a {
  text-decoration: none;
  color: #757575;
  display: flex;
  align-items: center;
}

.side-navbar > li.active > a {
  background-color: #75757522;
  border-radius: 5px 5px 0 0;
  color: var(--theme-text);
  font-weight: 600;
}

.side-navbar > li.active > a:first-child i:last-child {
  transform: rotate(180deg);
}

.side-navbar .submenu {
  padding: 0.2em 5px;
  font-size: 0.95em;
  display: none;
  transition: all 500ms;
}

.side-navbar ul.menu > li > a {
  padding: 0 5px 0 24px;
  margin: 1px 0;
}

.side-navbar li.activate-dropdown {
  overflow: hidden;
  background-color: #d8d8d850;
}

.side-navbar li.activate-dropdown > a {
  background-color: var(--theme-text-fade);
  color: white;
}

.side-navbar li.activate-dropdown > a > i {
  transform: rotate(180deg);
}

.side-navbar li.activate-dropdown > ul {
  display: block;
  color: #757575;
}

.side-navbar .submenu a {
  margin: 2px 0;
}

.side-navbar .submenu a:hover {
  background-color: var(--theme-text);
  color: #fff !important;
}

.router-link-active {
  background-color: var(--theme-text);
  color: #fff !important;
  font-weight: 600;
}

</style>
