<template>
    <div class="kino-footer-fields" v-if="data && !display">
        <div class="field" v-for="item in data" :key="item">
            <span>{{Object.keys(data).find(key => data[key] === item)}}</span>
            <h6>{{item}}</h6>
        </div>
    </div>
    <div class="kino-footer-fields" v-else-if="data && display">
        <div class="field" v-for="item in display" :key="item">
            <span>{{ item }}</span>
            <h6>{{ data[item] }}</h6>
        </div>
    </div>
    <div v-else class="disabled">
        <h6>No {{ label?label:'Item' }} Selected!</h6>
    </div>
</template>

<script>
export default {
    name: "displayField",
    props: {
        data: Object,
        display: Array,
        label: String
    }
}
</script>
<style scoped>
</style>