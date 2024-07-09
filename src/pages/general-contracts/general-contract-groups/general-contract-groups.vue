<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">General Contract Groups</h6>
            </div>
        </div>
        <div class="col-12">
            <KinoTable :tableData="groups" :displayedHeadings="['id','code','name','description']" tableTitle="Contract Groups"/>
        </div>

    </div>
</template>
<script>
export default {
    name: "GeneralContractGroups",
    data(){
        return{
        }
    },
    computed:{
        groups(){
            return this.$store.getters.getData('contractgroups') || []
        }
    },
    created(){
        this.$store.dispatch('getData','contractgroups')
    }
}
</script>
<style scoped>
.row {
    font-size: 0.9rem;
}

</style>