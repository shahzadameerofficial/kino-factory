<template>
    <div class="kino-table responsive-lg">
        <div class="kino-table-head">
            <h6 v-if="tableTitle">{{ tableTitle }} {{ sortedTableData.length + '/' + tableData.length }}</h6>
            <form class="searchbox" @submit.prevent="">
                <i class="fa-solid fa-magnifying-glass" title="Search"></i>
                <!-- Input Box -->
                <input type="search" placeholder="Search" @input="performSearch($refs.searchBox.value)" ref="searchBox">

                <!-- Search Type -->
            </form>

            <div class="btn-group"  v-if="filters && filters.length > 0"
                :class="showFilters ? 'show' : ''">
                    <button class="filter-btn btn-sm" type="button" @click="showFilters = !showFilters">
                        <i class="fa-solid fa-filter"></i>
                    </button>
                <button type="button" class="filter-btn btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false"  v-if="excludedFilter">
                </button>
                <div class="dropdown-menu" v-if="excludedFilter">
                    <a class="dropdown-item" :class="currentType==types?'active':''" v-for="types in filterTypes" :key="types" @click="currentType = types">{{types}}</a>
                </div>
            </div>
        </div>
        <div class="bg-fade p-2 d-flex align-items-center" v-if="filters && filters.length > 0 && showFilters">
            <h6 class="mb-2 mx-2">Filters 
                <button class="kino-btn-text" @click="resetFilters"><i class="fa-solid fa-rotate-left"></i></button></h6>
            <div class="filters">
                <!-- From Date Filter -->
                <KinoInput label="From" type="date" class="mb-2" v-if="filters?.includes('from')" v-model="fromDate"
                    @change="filterByDate" />
                <!-- To Date Filter -->
                <KinoInput label="To" type="date" class="mb-2" v-model="toDate" @change="filterByDate"
                    v-if="filters?.includes('to')" />

                <!-- Dynamic Filters -->
                <KinoInput :label="item.replace(/([a-z])([A-Z])/g, '$1 $2')"
                    :options="[...new Set(tableData.map(entry => entry[item]))]" class="mb-2" v-for="item in excludedFilter"
                    :key="item" v-model="otherFilters[item]" @change="filterByString(item)" />
                </div>
            </div>
        <table class="">
            <thead>
                <tr>
                    <th v-for="(heading, index) in displayedKeys" :key="index" @click="sortColumn(heading)"
                        :class="{ 'kino-text': sortColumnKey === heading && sortDirection === 'asc', '': sortColumnKey === heading && sortDirection === 'desc' }">
                        {{ heading.replace(/([a-z])([A-Z])/g, '$1 $2') }} <i class="fa-solid fa-sort"></i>
                    </th>
                    <th v-if="actions && actions.length > 0 && tableData.length > 0">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="sortedTableData.length == 0">
                    <td :colspan="displayedKeys.length" class="text-center">{{ placeholder ? placeholder : 'No Records Found' }}
                    </td>
                </tr>
                <tr v-for="(item, rowIndex) in sortedTableData" :key="rowIndex">
                    <td :data-label="displayedKeys[colIndex]" v-for="(key, colIndex) in displayedKeys" :key="colIndex">
                        {{ item[key] }}
                    </td>

                    <td data-label="Action" v-if="actions && actions.length > 0">
                        <!-- Edit Button -->
                        <button class="kino-btn-text" title="Edit" data-toggle="modal"
                            :data-target="'#' + (actions.find(item => item.type === 'edit') || {}).modalId"
                            @click="performAction(rowIndex, item.id, 'edit')" v-if="actions.some(e => e.type == 'edit')">
                            <i class="fa-solid fa-pen"></i>
                        </button>

                        <!-- Print Button -->
                        <button class="kino-btn-text text-secondary" title="Print"
                            @click="performAction(rowIndex, item.id, 'print')" v-if="actions.some(e => e.type == 'print')"
                            data-toggle="modal"
                            :data-target="'#' + (actions.find(item => item.type === 'print') || {}).modalId"><i
                                class="fa-solid fa-print"></i></button>

                        <!-- Delete Button -->
                        <button class="kino-btn-text text-danger" title="Delete" v-if="actions.some(e => e.type == 'delete')"
                            @click="performAction(rowIndex, item.id, 'delete')" type="button" data-toggle="modal"
                            :data-target="'#' + (actions.find(item => item.type === 'delete') || {}).modalId">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <ConfirmBox v-if="modalActive"
            :message="toPerform.index ? `Do you want to delete row of id ${tableData[toPerform.index].id}` : 'Do you want to remove the row?'"
            @confirmed="handleAction" :statements="allConditions" :id="(actions.find(item => item.type === 'delete') || {}).modalId" />
    </div>
</template>
<script>
export default {
    name: "KinoTable",
    props: {
        tableData: Array,
        displayedHeadings: Array,
        triggerActions: Function,
        actions: Array,
        tableTitle: String,
        placeholder: String,
        filters: Array,
        statements:Array
    },
    data() {
        return {
            headings: [],
            sortColumnKey: '',
            sortDirection: 'asc',
            sortedTableData: [],
            filteredData: [],
            excludedFilter: [],
            otherFilters: {},
            filtersData:this.tableData,
            filterTypes:['in All Data','in Filtered Data'],
            currentType:'in Filtered Data',
            modalActive: false,
            toPerform: {},
            showFilters: false,
            fromDate: '',
            toDate: '',
            allConditions: this.statements
        }
    },
    computed: {
        displayedKeys() {
            if (this.displayedHeadings && this.displayedHeadings.length > 0) {
                return this.displayedHeadings;
            } else {
                const allKeys = this.tableData.reduce((keys, item) => {
                    return keys.concat(Object.keys(item));
                }, []);
                return Array.from(new Set(allKeys));
            }
        }
    }
    ,
    methods: {
        performAction(index, id, type) {
            let ac = { index: index, id: id, type: type }
            this.toPerform = ac
            if (type === 'delete') {
                this.modalActive = true;
            } else if (type === 'edit') {
                this.handleAction();
            } else if (type === 'print') {
                this.handleAction();
            }
        },
        handleAction(statements) {
            console.log(statements);
            this.$emit('action', this.toPerform,);
            this.modalActive = false;
            this.toPerform = {}
        },
        performSearch(searchQuery) {
            if (searchQuery.trim() === '') {
                this.filteredData = this.sortedTableData;
            } else {
                this.filteredData = this.tableData.filter(item => {
                    const values = Object.values(item).map(val => String(val).toLowerCase());
                    return values.some(val => val.includes(searchQuery.toLowerCase()));
                });
            }
            this.updateFilteredData();
        },
        filterByString(key) {
            setTimeout(() => {
                
                if (this.currentType === this.filterTypes[0]) {
                    this.sortedTableData = this.tableData.filter(item =>
                        item[key].includes(this.otherFilters[key])
                    );
                }else if(this.currentType === this.filterTypes[1]){
                    
                    // this.filteredData = this.tableData;
                    for (let innerKey in this.otherFilters) {
                        if (this.otherFilters[innerKey]) {
                            console.log('Applying filter for:', innerKey, 'with value:', this.otherFilters[innerKey]);
                        this.filteredData = this.tableData.filter(item => item[innerKey].toLowerCase() === this.otherFilters[innerKey].toLowerCase())
                        // this.sortedTableData = this.filtersData;
                        console.log('Filtered Data After:', this.filteredData);
                    }
                    }
                }
            }, 200);
        },
        updateFilteredData() {
            if (this.filteredData.length > 0) {
                this.sortedTableData = this.filteredData.slice();
            } else {
                this.sortedTableData = [];
            }
        },

        sortColumn(key) {
            if (this.sortColumnKey === key) {
                this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortColumnKey = key;
                this.sortDirection = 'asc';
            }

            this.sortedTableData = this.tableData.slice().sort((a, b) => {
                const valA = a[this.sortColumnKey];
                const valB = b[this.sortColumnKey];

                if (this.sortDirection === 'asc') {
                    return valA < valB ? -1 : 1;
                } else {
                    return valA > valB ? -1 : 1;
                }
            });
        },
        filterByDate() {
            console.log('function called');
            const fromDate = this.fromDate ? new Date(this.fromDate) : null;
            const toDate = this.toDate ? new Date(this.toDate) : null;

            this.sortedTableData = this.tableData.filter(item => {
                const itemDate = new Date(item.contractDate); // Replace 'dateField' with your actual date field key
                // console.log(itemDate);
                return (
                    (!fromDate || itemDate >= fromDate) &&
                    (!toDate || itemDate <= toDate)
                );
            });
        },
        resetFilters() {
        this.otherFilters = {};
        this.excludedFilter.forEach(fil => {
            this.otherFilters[fil] = "";
        });
        this.sortedTableData = this.tableData
            
        }
    },
    watch: {
        tableData: {
            handler(newVal) {
                if (this.sortColumnKey !== '') {
                    this.sortedTableData = newVal.slice().sort((a, b) => {
                        const valA = a[this.sortColumnKey];
                        const valB = b[this.sortColumnKey];

                        if (this.sortDirection === 'asc') {
                            return valA < valB ? -1 : 1;
                        } else {
                            return valA > valB ? -1 : 1;
                        }
                    });
                } else {
                    this.sortedTableData = newVal.slice();
                }
            },
            deep: true
        },

        filteredData() {
            this.updateFilteredData();
        },
        fromDate() {
            this.filterByDate();
        },
        toDate() {
            this.filterByDate();
        },
        currentType(){
            // this.filterByString()
        }
    },
    created() {
        this.sortedTableData = this.tableData.slice();
        if (this.filters?.includes('to') && this.filters?.includes('from') && this.filters?.length>2) { 
            this.excludedFilter = this.filters.filter(element => element !== 'to' && element !== 'from');
        } else if(this.filters?.length>0 && !this.filters?.includes('to') && !this.filters?.includes('from')){
            
            this.excludedFilter = this.filters
        }else{
            this.excludedFilter = null
        }
        this.excludedFilter?.forEach(fil => {
            this.otherFilters[fil] = "";
        });
    }
}
</script>
<style scoped>
th {
    user-select: none;
}

th i {
    margin-left: 2%;
}

.filter-btn {
    border: 0;
    outline: 0;
    background-color: transparent;
    /* color: var(--theme-text); */
    color: #fff;
    /* font-size: 1.1rem; */
    /* margin-left: 5px; */
    padding: 2px;
    display: flex;
    align-items: center;
    /* padding: 0; */

    flex-direction: row-reverse;
}
.dropdown-menu{
    
    font-size: 0.9em;
    padding: 5px;
    transform: translate3d(-120px, 28px, 0px) !important;
}
.dropdown-item{
    padding: 2px;
    cursor: pointer;
    user-select: none;
}
.dropdown-item.active{
    background-color: var(--theme-text);
}
.dropdown-item:active{
    background-color: var(--theme-text-fade);
}
.filter-btn:first-child{
    margin-left: 5px;
}

.filter-btn.show {
    background-color: #fff;
    color: var(--theme-text);
}

.filters {
    display: flex;
    align-items: center;
    gap: .2rem;
    flex-wrap: wrap;
}

td {
    text-transform: capitalize;
}</style>