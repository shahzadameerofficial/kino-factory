import GeneralContractList from '../../pages/general-contracts/general-contract-list/general-contract-list.vue'
import GeneralContractGroups from '../../pages/general-contracts/general-contract-groups/general-contract-groups.vue'
import GeneralContractPanel from '../../pages/general-contracts/general-contract-panel/general-contract-panel.vue';

export const generalContractRoutes = [
    {
        path: '/general-contract/general-contract-list',
        name: 'GeneralContractList',
        component: GeneralContractList,
    },
    
    {
        path: '/general-contract/general-contract-panel',
        name: 'GeneralContractPanel',
        component: GeneralContractPanel,
    },
    {
        path: '/general-contract/general-contract-groups',
        name: 'GeneralContractGroups',
        component: GeneralContractGroups,
    }
]