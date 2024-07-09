<template>
    <div @keydown.down.prevent="navigate('down')" @keydown.up.prevent="navigate('up')" @keydown.enter="selectRow"
        class="kino-search">
        <input type="search" v-model="searchQuery" @input="filterData" @focus="showAllData" :placeholder="placeholder || 'Search...'"
            ref="inputbox"  @blur="checkFocus" :id="label" />
        <label :for="label" v-if="label">{{ label | titlecase}}</label>

        <div class="dropdown">
            <button class="dropdown-toggle" type="button" data-toggle="dropdown">
                {{ selectedColumn }}
            </button>
            <div class="dropdown-menu">
                <span class="dropdown-item" v-if="displayHeadings.length > 1" @click="selectedColumn = 'all'">All</span>
                <span class="dropdown-item" v-for="heading in displayHeadings" :key="heading"
                    @click="selectedColumn = heading">{{ heading.replace(/([a-z])([A-Z])/g, '$1 $2') }}</span>
            </div>
        </div>
        <div class="filter-table suggestions kino-scroll" v-if="focused && filteredData.length>0">
            <div class="summary">Showing {{ filteredData.length }} out of {{ data.length }} Records.</div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th v-for="(col, index) in displayHeadings" :key="index">{{ col.replace(/([a-z])([A-Z])/g, '$1 $2')
                        }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in filteredData" :key="index" :class="{ selected: index === selectedRowIndex }"
                        @click="selectRow(item)" @mouseenter="selectedRowIndex = index">
                        <td>{{ index + 1 }}</td>
                        <td v-for="(value, key) in displayHeadings" :key="key">{{ item[value] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="filter-table suggestions" v-else-if="filteredData.length<1  && focused">
            <div class="summary text-center">No Data</div>
        </div>

    </div>
</template>
  
<script>
export default {
    name: "KAutocomplete",
    props: {
        suggestions: Array,
        keysToDisplay: Array,
        label:String,
        placeholder:String,
    },
    data() {
        return {
            searchQuery: '',
            selectedColumn: 'all',
            selectedRowIndex: -1,
            focused: false,
        };
    },
    computed: {
        displayHeadings() {
            if (this.keysToDisplay && this.keysToDisplay.length > 0) {
                return this.keysToDisplay;
            } else {
                const allKeys = this.suggestions.reduce((keys, item) => {
                    return keys.concat(Object.keys(item));
                }, []);
                return Array.from(new Set(allKeys));
            }
        },
        filteredData() {
            let filtered = this.suggestions;
            if (this.searchQuery) {
                filtered = this.filterByQuery(filtered);
            }
            if (this.selectedColumn !== 'all' && this.searchQuery) {
                filtered = this.filterByColumn(filtered);
            }
            return filtered;
        }
    },
    methods: {
        filterByQuery(data) {
            const query = this.searchQuery.toLowerCase();
            return data.filter(item =>
                Object.values(item).some(val => String(val).toLowerCase().includes(query))
            );
        },
        filterByColumn(data) {
            const query = this.searchQuery.toLowerCase();
            return data.filter(item =>
                String(item[this.selectedColumn]).toLowerCase().includes(query)
            );
        },
        filterData() {
            this.selectedRowIndex = -1;
            this.$emit('filtered', this.filteredData);
        },
        showAllData() {
            this.searchQuery = '';
            this.focused = true
            this.selectedColumn = 'all';
            this.filterData();
        },
        checkFocus() {
            setTimeout(() => {
                this.focused = false
            }, 150);
        },
        selectData(a) {
            console.log(a);
        },
        navigate(direction) {
            let selectedItem;
            var box = document.querySelector('.suggestions')
            var rows = document.querySelectorAll('table tbody tr')
            if (this.filteredData.length === 0) return;

            if (direction === 'down') {
                this.selectedRowIndex = (this.selectedRowIndex + 1) % this.filteredData.length;
                if (box.clientHeight < box.scrollHeight) {
                    rows.forEach(val => {
                        if (val.classList.contains('selected')) {
                            selectedItem = val;
                        }
                    });

                    box.scrollTop = selectedItem.offsetTop - box.offsetTop - 50


                }
            } else if (direction === 'up') {
                this.selectedRowIndex = (this.selectedRowIndex - 1 + this.filteredData.length) % this.filteredData.length;
                if (box.clientHeight < box.scrollHeight) {
                    rows.forEach(val => {
                        if (val.classList.contains('selected')) {
                            selectedItem = val;
                        }
                    });

                    box.scrollTop = selectedItem.offsetTop - box.offsetTop


                }
            }

        },
        selectRow() {
            this.$refs.inputbox.blur();
            this.focused = false;
            this.$emit('select', this.filteredData[this.selectedRowIndex]);
            this.$refs.inputbox.title = 'Last Searched for : ' + this.filteredData[this.selectedRowIndex][this.displayHeadings[0]];
            this.searchQuery = this.filteredData[this.selectedRowIndex][this.displayHeadings[0]]
        }
    },
};
</script>
  
<style scoped>
.selected {
    background-color: var(--theme-highlight);
    color: var(--theme-text);
    transform: scale(1.015);
}

.kino-search {
    min-width: 30%;
}

.kino-search input {
    border: 0;
    outline: 0;
    background-color: transparent;
    color: rgb(105, 105, 105);
    font-size: 0.9rem;
    padding: 0 0.3rem;
    border-radius: 0.25em;
    width: 100%;
    transition: all 700ms;
}

.kino-search input:focus {
    background-color: var(--theme-highlight);
}

.kino-search {

    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0.4em;
    border-radius: 0.25rem;
    border: 1px solid #EFF0FB;
    position: relative;
}

.kino-search:focus-within {
    border-color: var(--theme-text);
    border-bottom-color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.kino-search:focus-within .suggestions {

    border-color: var(--theme-text);
    border-top-color: #fff;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.kino-search:focus-within label{
    color: var(--theme-text);
}

.suggestions {
    position: absolute;
    top: 32px;
    left: 0;
    background-color: #fff;
    list-style: none;
    /* padding: 5px; */
    max-height: 50vh;
    overflow: auto;
    font-size: 0.9rem;
    z-index: 99;
    min-width: calc(100% + 2px);
    transform: translateX(-1px) translateY(-12px);
    margin-top: 5px;
    padding: 0 1rem 0.5rem 1rem;
    max-width: 90%;
    border: 1px solid #EFF0FB;
    /* box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2); */
    color: #696969;
    border-radius: 0.25em;
    transition: all 2s;
    /* display: none; */
}

.dropdown button {
    color: var(--theme-text);
}

.dropdown button,
.dropdown span {
    text-transform: capitalize;
    border: 0;
    outline: 0;
    background-color: transparent;
    font-size: 0.8em;
}

.dropdown-item {
    user-select: none;
    cursor: pointer;
}

.dropdown-item:hover {
    color: var(--theme-text);
}

label {
    position: absolute;
    top: -8px;
    left: 8px;
    font-size: 0.8em;
    padding: 0 3px;
    color: #a8a8a8;
    z-index: 1;
}

label::before {
    content: '';
    position: absolute;
    top: 7px;
    left: 0px;
    width: 100%;
    height: 1px;
    background-color: #fff;
    z-index: -1;
}

</style>