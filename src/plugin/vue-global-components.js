import Vue from 'vue';

import KinoInput from '../components/common/input-components/kino-input/kino-input.vue'
import SearchBox from '../components/common/input-components/searchbox/searchbox.vue'
import KinoTable from '../components/common/tables/kino-table/kino-table.vue'
import ConfirmBox from '../components/common/modals/confirmbox/confirmbox.vue'
import AlertBox from '../components/common/modals/alertbox/alertbox.vue'
import counterField from '../components/common/display-components/counter-field/counter-field.vue'
import displayField from '../components/common/display-components/display-field/display-field.vue'
import KinoSearch from '../components/common/input-components/kino-search/kino-search.vue'
import CustomSelect from '../components/common/input-components/custom-selectbox/custom-selectbox.vue';
import TypographyComponent from '../components/common/Typography/Typography.vue'

Vue.component('KinoInput',KinoInput);
Vue.component('SearchBox',SearchBox);
Vue.component('KinoTable',KinoTable);
Vue.component('ConfirmBox',ConfirmBox);
Vue.component('AlertBox',AlertBox);
Vue.component('CounterField',counterField);
Vue.component('KinoSearch',KinoSearch);
Vue.component('CustomSelect',CustomSelect);
Vue.component('DisplayField',displayField);
Vue.component('TypographyComponent',TypographyComponent);