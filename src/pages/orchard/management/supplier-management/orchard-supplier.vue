<template>
    <div>
        <SupplierHeader :edit="editData" />
        <KinoTable :tableData="suppliers" :actions="tableConfig.actions"
            :displayedHeadings="['id', 'accountCode', 'name', 'cnic', 'email', 'address']" tableTitle="Supplier List"
            @action="performAction" :statements="conditions"/>
        <AlertBox v-for="alert in alerts" :key="alert.id" :alert="alert" @dismiss="dismissAlert" />
    </div>
</template>
<script>
import SupplierHeader from "./supplier-header.vue"
export default {
    name: "OrchardSupplierComponent",
    components: {
        SupplierHeader,
    },
    data() {
        return {
            tableConfig: {
                actions: [
                    { type: 'edit', modalId: 'exampleModal' },
                    { type: 'delete', modalId: 'deleteModal' },
                    { type: 'print'}
                ]
            },
            editData: {},
            alerts: [],
            conditions:['Remove associated orchards of this supplier']
        }
    },
    computed: {
        suppliers() {
            return this.$store.getters.getData('supplierList') || [];
        },
    },
    created() {
        this.$store.dispatch('fetchData', 'supplierList');
        // this.suplength();
    },
    methods: {
        performAction(action) {
            if (action.type === 'delete') {
                this.suppliers.splice(action.index, 1);

                const newAlert = {
                    id: Date.now(), // Unique identifier for each alert
                    status: 'success',
                    duration: 3000, // in Milliseconds
                    message: `Item of id ${action.id} deleted successfully`
                };
                this.alerts.push(newAlert);

            } else if (action.type === 'edit') {
                this.editData = this.suppliers[action.index]
            } else if (action.type === 'print') {
                this.printRowData(this.suppliers[action.index]);
            }
        },
        dismissAlert(dismiss) {

            this.alerts = this.alerts.filter(v => v.id !== dismiss.id);
            // console.log('dismissed successfully');
        },
        suplength() {
            let al = ['warning','success','failed','info','warning','success','failed','info','warning','success','failed','info','warning','success','failed','info',]
            let i = 0;
            setInterval(() => {
                if (i <= 15) {
                    const newAlert = {
                        id: Date.now(), // Unique identifier for each alert
                        status: al[i],
                        duration: 3000, // in Milliseconds
                        message: `You have very low supplier list`
                    };
                    this.alerts.push(newAlert);
                }
                i++
            }, 5000);
        },
        printRowData(row) {
      const printableContent = `Name: ${row.name}, Email: ${row.email}`;
      
      // Create a new window for printing
      const printWindow = window.open('', '_blank');
      printWindow.document.write(printableContent);
      printWindow.document.close();
      printWindow.print();
      setTimeout(() => printWindow.close(), 1000);
    }
    }

}
</script>
<style scoped></style>
