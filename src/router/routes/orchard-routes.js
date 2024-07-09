import OrchardPanelComponent from '../../pages/orchard/management/orchard-panel/orchard-panel.vue'
import ContractPanelComponent from '../../pages/orchard/management/contract-panel/contract-panel.vue'
import OrchardManagement from '../../pages/orchard/management/orchard-management/orchard-management.vue'
import OrchardSupplierComponent from '../../pages/orchard/management/supplier-management/orchard-supplier.vue';
import VehicleDeparturePanel from '../../pages/orchard/vehicle-management/vehicle-departure-panel/vehicle-departure-panel.vue'

export const orchardRoutes = [
    {
        path: '/orchards/management/orchard-panel',
        name: 'OrchardPanel',
        component: OrchardPanelComponent,
    },
    {
        path: '/orchards/management/orchard-management',
        name: 'OrchardManagement',
        component: OrchardManagement,
    },
    {
        path: '/orchards/management/orchard-contract-panel',
        name: 'OrchardContractPanel',
        component: ContractPanelComponent,
    },
    {
        path: '/orchards/management/orchard-supplier',
        name: 'OrchardSupplier',
        component: OrchardSupplierComponent,
    },
    // Orchard > Vehicle Management
    {
        path: '/orchards/vehicle-management/vehicle-departure-panel',
        name: 'VehicleDeparturePanel',
        component: VehicleDeparturePanel,
    },
]