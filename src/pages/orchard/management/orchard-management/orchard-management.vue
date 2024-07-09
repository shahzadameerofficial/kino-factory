<template>
    <div>
        <OrchardManagementHeader :edit="editData"/>
        <KinoTable :tableData="orchards"
            :displayedHeadings="['id', 'orchardCode', 'orchardName', 'orchardAge', 'orchardAddress']"
             :actions="tableConfig.actions" tableTitle="Orchards List" @action="performAction"/>
    </div>
</template>
<script>
import OrchardManagementHeader from "./orchard-management-header.vue"
export default {
    name: "OrchardSupplierComponent",
    components: {
        OrchardManagementHeader,
    },
    data() {
        return {
            tableConfig:{
                actions:[
                    {type:'delete',modalId:'deletebox'},
                    {type:'edit',modalId:'exampleModal'},
                ]
            },
            editData:{},
        }
    },
    computed: {
        orchards() {
            return this.$store.getters.getData('orchardlist') || [];
        },
    },
    created() {
        this.$store.dispatch('fetchData', 'orchardlist');
    },
    methods: {
        performAction(action) {
            if (action.type === 'delete') {
                console.log(action);
                this.orchards.splice(action.index,1)
            }else if(action.type === 'edit'){
                console.log('edit');
                this.editData = this.orchards[action.index];
            }
        }
    },
}
</script>
<style scoped></style>