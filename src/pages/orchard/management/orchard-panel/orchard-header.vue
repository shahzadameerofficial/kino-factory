<template>
    <div class="row">
        <header class="col-12" v-if="elements && elements.length>0">
            
        <!-- <SearchBox :list="elements" :customHeadings="['supplierCode','orchardName','orchardCode']"/> -->
        <KinoSearch :data="elements" :customHeadings="['orchardCode','supplierCode']" @result="getData"/>
            <ul class="d-none">
                <li><a href=""><i class="fa-solid fa-square-plus"></i>Add</a></li>
            </ul>
        </header>
    </div>
</template>
<script>
export default {
    name: 'OrchardHeader',
    data(){
        return{
        }
    },
    props:{
        elements:Array
    },
    methods:{
        getData(data){
            this.$emit('contract',data)
        }
    }
}
</script>
<style scoped>

header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.5em 1em;
    background-color: #fff;
    border-radius: 0.5rem;
    border: 1px solid #EFF0FB;
}
ul{
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    list-style: none;
    margin-left: 10px;
}
ul li a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.7em;
    text-decoration: none;
    transition: all 200ms;
    color: var(--theme-text-fade);
}
ul li a i{
    font-size: 1.8em;
    color: var(--theme-text-fade);
    transition: all 200ms;
}
ul li a:hover{
    color: var(--theme-text);
}
ul li a:hover i{
    color: var(--theme-text);
}
.logo{
    font-family: 'Mooli', sans-serif;
    font-weight: bold;
    font-size: 1.3em;
}
.logo i{
    color: var(--theme-text);
}
/* .searchbox{
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0.3em 1em;
    border-radius: 10px;
    border: 1px solid #EFF0FB;
}
.searchbox input{
    border: 0;
    outline: 0;
    background-color: transparent;
    color: rgb(105, 105, 105);
    width: 100%;
    transition: all 700ms;
}
.searchbox input::-webkit-search-cancel-button{
    opacity: 0;
}
.searchbox:focus-within{
    border-color: var(--theme-text-fade);
}
.searchbox:focus-within i{
    color: var(--theme-text-fade);
}
.searchbox input:focus{
    width: calc(100% + 250px);
}
.searchbox i{
    color: rgb(105, 105, 105);
    cursor: pointer;
    transition: all 200ms;
}
.searchbox i:hover{
    color: var(--theme-text-fade);
} */

@media screen and (max-width:649px){
    
    header{
        flex-direction: column;
    }
    .searchbox{
        margin: 10px 0;
    }
    .searchbox input{
        width: 100%;
    }
}

</style>