<template>
    <div class="kino-footer-fields" v-if="keys[0].key">
        <div class="" v-for="item in keys" :key="item">
            <span>{{item.title}}</span>
            <h6>{{ data.reduce((accumulator, object) => {
                        return accumulator + parseFloat(object[item.key]);
                    }, 0) }}</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: "counterField",
    props: {
        data: Array,
        keys: Array
    }
}
</script>
<style scoped>
.kino-footer-fields {
    display: flex;
    align-items: center;
    gap: .5rem;
}
.kino-footer-fields > div {
    color: #696969;
    font-size: 0.8em;
    padding: .3rem;
}
.kino-footer-fields >div >h6 {
    font-size: .8rem;
    margin-bottom: 0;
}
</style>