<template>
    <div class="kino-input">
        <input :type="type" class="form-control" :id="label" :placeholder="placeholder" v-if="type && type !== 'textarea'"
            :required="required" :inputmode="inputmode" :pattern="pattern" :accept="accept" :class="inputClass"
            :disabled="disabled" :name="name" v-model="inputValue"/>

        <textarea class="form-control" v-if="type === 'textarea'" :placeholder="placeholder" :id="label" :rows="rows"
            :cols="cols" :class="inputClass" v-model="inputValue" @input="updateValue"></textarea>

        
        <select class="form-control" :id="label" v-if="options && optionsKey" :required="required" :class="inputClass"
            :disabled="disabled" v-model="inputValue" @change="updateSelection">
            <option value="" selected>{{ options.length > 0 ? 'Select an Option' : 'No Options Found' }}</option>
            
            <option :value="output?op[output]:op[optionsKey]" v-for="op in options" :key="op.id">{{ op[optionsKey] }}</option>
        </select>
        
        <select class="form-control" :id="label" v-else-if="options && !optionsKey" :required="required" :class="inputClass"
        :disabled="disabled" v-model="inputValue" @change="updateSelection">
        <option value="" selected>{{ options.length > 0 ? 'Select an Option' : 'No Options Found' }}</option>
            <option :value="output?output:op" v-for="op in options" :key="op.id">{{ op }}</option>
        </select>

        <label :for="label" v-if="label" :class="labelClass">{{ label }}</label>
    </div>
</template>
<script>

export default {
    name: "KinoInput",
    props: {
        label: String,
        type: String,
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
        },
        updateSelection() {
            this.$emit('change', this.inputValue); // Emitting input event with updated value
        }
    }
}
</script>
<style scoped>
input {
    padding-top: 8px;
}
</style>