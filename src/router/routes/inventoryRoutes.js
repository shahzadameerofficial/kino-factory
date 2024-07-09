import PurchasePanel from '../../pages/inventory/purchase-panel/purchase-panel.vue'
import AllotmentPanel from '../../pages/inventory/allotment-panel/allotment-panel.vue'
import ReturnAllotmentPanel from '../../pages/inventory/return-allotment-panel/return-allotment-panel.vue'
import VehicleFuelingPanel from '../../pages/inventory/vehicle-fueling-panel/vehicle-fueling-panel.vue'
import ProductManagement from '../../pages/inventory/product-management/product-management.vue'
import VendorStockInReport from '../../pages/inventory/vendor-stock-in-report/vendor-stock-in-report.vue'
import FuelingLogReport from '../../pages/inventory/fueling-log-report/fueling-log-report.vue'
import ConsolidatedFuelReport from '../../pages/inventory/consolidated-fuel-report/consolidated-fuel-report.vue'
export const inventoryRoutes = [
    {
        path: '/inventory/purchase-panel',
        name: 'PurchasePanel',
        component: PurchasePanel,
    },
    {
        path: '/inventory/allotment-panel',
        name: 'AllotmentPanel',
        component: AllotmentPanel,
    },
    {
        path: '/inventory/return-allotment-panel',
        name: 'ReturnAllotmentPanel',
        component: ReturnAllotmentPanel,
    },
    {
        path: '/inventory/vehicle-fueling-panel',
        name: 'VehicleFuelingPanel',
        component: VehicleFuelingPanel,
    },
    {
        path: '/inventory/product-management',
        name: 'ProductManagement',
        component: ProductManagement,
    },
    {
        path: '/inventory/vendor-stock-in-report',
        name: 'VendorStockInReport',
        component: VendorStockInReport,
    },
    {
        path: '/inventory/fueling-log-report',
        name: 'FuelingLogReport',
        component: FuelingLogReport,
    },
    {
        path: '/inventory/consolidated-fuel-report',
        name: 'ConsolidatedFuelReport',
        component: ConsolidatedFuelReport,
    }
]