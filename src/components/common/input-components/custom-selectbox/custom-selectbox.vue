<template>
    <div class="dropdown">
        <button class="dropdown-toggle btn btn-primary" type="button" data-toggle="dropdown">
            Select Details
        </button>
        <div class="dropdown-menu">
            <span class="dropdown-item" v-for="heading in data" :key="heading"
                @click="setData(heading)">{{ heading.replace(/([a-z])([A-Z])/g, '$1 $2') }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "CustomSelect",
    props:{
        data: Array
    },
    methods:{
        setData(data){
            this.$emit('input',data)
        }
    }
}
</script>
<style scoped></style>