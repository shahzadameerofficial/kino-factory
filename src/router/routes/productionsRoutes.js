import ProductionPanelComponent from '../../pages/production/production-panels/production-panel/production-panel.vue'
    import RepackProductionPanelComponent from '../../pages/production/production-panels/repack-production-panel/repack-production-panel.vue'

// Home > Production > Production Reports
import DailyProductionReportComponent from '../../pages/production/production-reports/daily-production-report/daily-production-report.vue'
import CurrentStockPositionReport from '../../pages/production/production-reports/current-stock-position-report/current-stock-position-report.vue'
import CurrentStockPositionReportDayWise from '../../pages/production/production-reports/current-stock-position-report-day-wise/current-stock-position-report-day-wise.vue'
import ProductionStockOutReport from '../../pages/production/production-reports/stock-out-report/stock-out-report.vue'
import WeightGainAndLossReport from '../../pages/production/production-reports/weight-gain-and-loss-report/weight-gain-and-loss-report.vue'
import RepackingReport from '../../pages/production/production-reports/repacking-report/repacking-report.vue'

export const productionsRoutes = [
    // Production > Production Panels
    {
        path: '/production-panel',
        name: 'ProductionPanelComponent',
        component: ProductionPanelComponent,
    },
    {
        path: '/repack-production-panel',
        name: 'RepackProductionPanelComponent',
        component: RepackProductionPanelComponent,
    },

    // Production > Production Reports
    {
        path: '/production/production-reports/daily-production-report',
        name: 'DailyProductionReportComponent',
        component: DailyProductionReportComponent,
    },
    {
        path: '/production/production-reports/current-stock-position-report',
        name: 'CurrentStockPositionReport',
        component: CurrentStockPositionReport,
    },
    {
        path: '/production/production-reports/current-stock-position-report-day-wise',
        name: 'CurrentStockPositionReportDayWise',
        component: CurrentStockPositionReportDayWise,
    },
    {
        path: '/production/production-reports/stock-out-report',
        name: 'ProductionStockOutReport',
        component: ProductionStockOutReport,
    },
    {
        path: '/production/production-reports/repacking-report',
        name: 'RepackingReport',
        component: RepackingReport,
    },
    {
        path: '/production/production-reports/weight-gain-and-loss-report',
        name: 'WeightGainAndLossReport',
        component: WeightGainAndLossReport,
    }
]