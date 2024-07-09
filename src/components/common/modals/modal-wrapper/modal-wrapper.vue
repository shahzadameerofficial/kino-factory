<template lang="">
    <div class="modal kino-modal" tabindex="-1" id="exampleModal">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content" ref="">
                    <div class="modal-header">
                        <h6 class="modal-title">New Supplier</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="kino-btn-text rounded" data-dismiss="modal">Discard</button>
                        <button type="submit" class="kino-btn rounded" data-dismiss="modal" @click="submitModal">{{submitText?submitText:'Submit'}}</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: "ModalWrapper",
    props:{
        modalTitle:String,
        submitText:String
    },
    methods: {
        submitModal() {
            this.$emit('submit')
        }
    },
}
</script>
<style lang="">
    
</style>