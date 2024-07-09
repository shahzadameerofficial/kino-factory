<template>
    <div class="kino-input">
        <input :type="type" class="form-control" :id="label" :placeholder="placeholder" v-if="type && type !== 'textarea'"
            :required="required" :inputmode="inputmode" :pattern="pattern" :accept="accept" :class="inputClass"
            :disabled="disabled" :name="name" v-model="inputValue"/>

        <label :for="label" v-if="label" :class="labelClass">{{ label }}</label>
    </div>
</template>
<script>

export default {
    name: "KInput",
    props: {
        label: String,
        type: {
            type: String,
            default: 'text'
        },
        name: String,
        inputmode: String,
        pattern: String,
        disabled: Boolean,
        labelClass: String,
        inputClass: String,
        rows: String,
        cols: String,
        accept: String,
        required: Boolean,
        placeholder: String,
        options: Array,
        optionsKey: String,
        output:String,

        currentValue: String,
        value: null  // Assuming this is the v-model value bound to this component
    },
    data() {
        return {
            inputValue: this.value // Set initial value based on the v-model value
        };
    },
    watch: {
        value(newVal) {
            this.inputValue = newVal; // Update inputValue when the v-model value changes
        },
        inputValue(newVal) {
            this.$emit('input', newVal); // Emitting input event with updated value
        }
    },
    methods: {
        updateValue() {
            this.$emit('input', this.inputValue); // Emitting input event with updated value
        }
    }
}
</script>
<style scoped>
input {
    padding-top: 8px;
}
</style>