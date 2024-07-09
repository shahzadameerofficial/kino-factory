import LocalLoadingPanelComponent from '../../pages/sales/local-loading-panel/local-loading-panel.vue'
import LocalLoadingRegister from '../../pages/sales/local-loading-register/local-loading-register.vue'
import PendingLocalSales from '../../pages/sales/pending-local-sales/pending-local-sales.vue'
import LocalSalesRegister from '../../pages/sales/local-sales-register/local-sales-register.vue'
import ExportLoading from '../../pages/sales/export-loading/export-loading.vue'
import OtherSales from '../../pages/sales/other-sales/other-sales.vue'
import ExportSaleExpense from '../../pages/sales/export-sale-expense/export-sale-expense.vue'
import ExportSalesProfitLossReport from '../../pages/sales/export-sales-profit-loss-report/export-sales-profit-loss-report.vue'

export const salesRoutes = [
    {
        path: '/sales/local-loading-panel',
        name: 'LocalLoadingPanelComponent',
        component: LocalLoadingPanelComponent,
    },
    {
        path: '/sales/local-loading-register',
        name: 'LocalLoadingRegister',
        component: LocalLoadingRegister,
    },
    {
        path: '/sales/pending-local-sales',
        name: 'PendingLocalSales',
        component: PendingLocalSales,
    },
    {
        path: '/sales/local-sales-register',
        name: 'LocalSalesRegister',
        component: LocalSalesRegister,
    },
    {
        path: '/sales/export-loading',
        name: 'ExportLoading',
        component: ExportLoading,
    },
    {
        path: '/sales/other-sales',
        name: 'OtherSales',
        component: OtherSales,
    },
    {
        path: '/sales/export-sale-expense',
        name: 'ExportSaleExpense',
        component: ExportSaleExpense,
    },
    {
        path: '/sales/export-sales-profit-loss-report',
        name: 'ExportSalesProfitLossReport',
        component: ExportSalesProfitLossReport,
    }
]