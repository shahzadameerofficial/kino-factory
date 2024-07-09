<template>

    <!-- Modal -->
    <div class="modal kino-modal" tabindex="-1" :id="id" @keydown.enter="handleEnter" @keydown.delete="handleEnter">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">{{modalTitle?modalTitle:'Confirm'}}</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h6>{{message}}?</h6>
                    <div class="statements" v-if="statements">
                        <div class="statement" v-for="st,index in statements" :key="index">
                            <input type="checkbox" :id="index" v-model="conditions[st]">
                            <label :for="index">{{st | titlecase}}</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="kino-btn-text rounded" data-dismiss="modal" aria-label="discard">Discard</button>
                    <button type="button" class="kino-btn rounded" data-dismiss="modal" @click="confirm()">{{submitText?submitText:'Submit'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ConfirmBox",
    props: {
        id: String,
        message:String,
        modalTitle:String,
        submitText:String,
        statements:Array
    },
    data(){
        return{
            conditions:{}
        }
    },
    methods:{
        confirm(){
            this.$emit('confirmed',this.conditions)
        },
        handleEnter(e){
            e.target.style.display = 'none'
            e.target.classList.remove('show')
            e.target.setAttribute('aria-modal',false);
            document.body.classList.remove('modal-open')
            document.querySelector('.modal-backdrop').remove()
            // document.querySelector('.modal-backdrop').classList.remove('show')
            this.confirm()
            // console.log(e.target);
        }
    }
}
</script>

<style scoped>
.statements{
    font-size: 0.8em;
}
.statement{
    display: flex;
    align-items: center;
    gap: .3rem;
}
.statement label{
    margin-bottom: 0;
    user-select: none;
}
</style>