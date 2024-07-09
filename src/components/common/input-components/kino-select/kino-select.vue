<template>
    <div class="kino-input">
        <select class="form-control" :id="Label">
            <option :value="op" v-for="op in Options" :key="op">{{ op }}</option>
        </select>
        <label :for="Label">{{Label}}</label>
    </div>
</template>
<script>
export default {
    name: "KinoSelect",
    props: {
        Label : String,
        Options : Array
    }
}
</script>
<style scoped>


.kino-input select{
    padding-top: 4px;
}

</style>