<template>
    <form class="searchbox" @submit.prevent="">
        <i class="fa-solid fa-magnifying-glass" title="Search" @click="$refs.search.focus()"></i>
        <!-- Input Box -->
        <input type="search" v-model="filterCode" @input="filteredParties()" ref="search" :placeholder="placeholder"
            @keydown.down.prevent="navigateOptions($event)" @keydown.up.prevent="navigateOptions($event)"
            @keydown.enter="selectPartyy" @keydown.esc="terminateResults()">

        <!-- Search Type -->

        <div class="dropdown">
            <button class="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                {{ searchType }}
            </button>
            <div class="dropdown-menu">
                <span class="dropdown-item" v-if="displayedKeys.length > 1" @click="searchType = 'all'">All</span>
                <span class="dropdown-item" v-for="heading in displayedKeys" :key="heading" @click="searchType = heading">{{
                    heading }}</span>
            </div>
        </div>
        <select name="" id="" v-model="searchType" class="d-none">
            <option value="all" v-if="displayedKeys.length > 1" selected>All</option>
            <option :value="heading" v-for="heading in displayedKeys" :key="heading">{{ heading }}</option>
        </select>

        <!-- Search Results -->
        <div class="suggestions filter-table kino-scroll">
            <div class="summary">
                Showing {{ filtered?.length }} out of {{ list.length }} Records.
            </div>
            <table>
                <thead>
                    <tr>
                        <th v-for="heading in displayedKeys" :key="heading">{{ heading }}</th>
                    </tr>
                </thead>

                <tbody v-if="parties && !filtered">
                    <tr v-for="(party, index) in tableData" :key="party.code" @click="selectParty(party)"
                        @mouseenter="setSelectedIndex(index)">
                        <td v-for="(key, colIndex) in displayedKeys" :key="colIndex">{{ party[key] }}</td>
                    </tr>
                </tbody>
                <tbody v-else-if="filtered && parties">
                    <tr v-for="(party, index) in filtered" :key="party.code" @click="selectParty(party)"
                        @mouseenter="setSelectedIndex(index)">
                        <td v-for="(key, colIndex) in displayedKeys" :key="colIndex">{{ party[key] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </form>
</template>

<script>
export default {
    name: 'SearchBox',
    data() {
        return {
            selectedParty: null,
            parties: this.list,
            filtered: null,
            filterCode: '',
            selectedIndex: -1,
            forumFocused: false,
            searchType: 'all',
            tableData: []
        }
    },
    created() {
        this.tableData = this.list;
        this.filtered = this.list;
    },
    computed: {
        displayedKeys() {
            if (this.customHeadings && this.customHeadings.length > 0) {
                return this.customHeadings;
            } else {
                const allKeys = this.list.reduce((keys, item) => {
                    return keys.concat(Object.keys(item));
                }, []);
                return Array.from(new Set(allKeys));
            }
        }
    },
    methods: {
        filteredParties() {
            let query = this.filterCode.toString().toLowerCase();
            if (this.searchType != 'all') {
                this.searchType.toLowerCase();
                this.filtered = this.parties.filter(party => party[this.searchType].toString().toLowerCase().includes(query));
            } else {
                this.filtered = this.parties.filter(item =>
                    Object.values(item).some(value =>
                        String(value).toLowerCase().includes(query)
                    )
                );
            }

            // Highlighting Filtered Text
            const suggestions = document.querySelectorAll('.suggestions tbody tr td');
            suggestions.forEach(row => {
                const rowText = row.textContent.toLowerCase();
                if (rowText.includes(this.filterCode.toLowerCase())) {
                    const highlightedText = rowText.replace(
                        new RegExp(this.filterCode, 'gi'),
                        match => `<span style="background-color:#ddd;color:#000;">${match}</span>`
                    );
                    row.innerHTML = highlightedText;
                }
            });
        },
        selectParty(party) {

            if (this.selectedIndex !== null && this.selectedIndex < this.filteredParties.length) {
                this.filterCode = this.filtered[this.selectedIndex].code.toString();
            }
            this.selectedParty = party;
            this.getData(party);
            console.log('selected with mouse')
            this.filterCode = '';
        },
        navigateOptions(e) {

            if (this.filtered.length === 0) return;
            let selectedItem;
            var suggestions = document.querySelectorAll('.suggestions tbody tr');
            var box = document.querySelector('.suggestions')
            if (e.keyCode === 40) {     // Down Key Function

                suggestions.forEach(val => { val.classList.remove('selected') });

                if (this.selectedIndex < this.filtered.length - 1) { this.selectedIndex++; }
                else { this.selectedIndex = 0 }

                suggestions[this.selectedIndex].classList.add('selected');

                if (box.clientHeight < box.scrollHeight) {
                    suggestions.forEach(val => {
                        if (val.classList.contains('selected')) {
                            selectedItem = val;
                        }
                    });

                    box.scrollTop = selectedItem.offsetTop - box.offsetTop - 50


                }
            } else if (e.keyCode === 38) {      // Up Key Function

                if (this.selectedIndex == -1) {
                    this.selectedIndex = this.filtered.length - 1;
                    suggestions[this.selectedIndex].classList.add('selected');
                } else {
                    console.log('else part')
                    suggestions[this.selectedIndex].classList.remove('selected');
                    this.selectedIndex--;
                    suggestions[this.selectedIndex].classList.add('selected');
                }

                if (box.clientHeight < box.scrollHeight) {
                    suggestions.forEach(val => {
                        if (val.classList.contains('selected')) {
                            selectedItem = val;
                        }
                    });

                    box.scrollTop = selectedItem.offsetTop - box.offsetTop


                }
            }
        },
        setSelectedIndex(index) {
            this.selectedIndex = index;
        },
        selectPartyy() {
            this.$refs.search.placeholder = 'Search something...'
            var suggestions = document.querySelectorAll('.suggestions tbody tr');
            if (suggestions[this.selectedIndex].classList.contains('selected')) {
                this.selectedParty = this.filtered[this.selectedIndex];
                this.filterCode = '';
                this.selectedIndex = -1;
            }
        },
        terminateResults() {
            this.$refs.search.blur();
            this.$refs.search.placeholder = this.filterCode
        }
    },
    props: {
        list: Array,
        placeholder: String,
        getData: Function,
        customHeadings: Array
    }
}
</script>

<style scoped>
.selected {
    background: #ddd !important;
    /* Highlight selected option */
}

.selected td {
    color: var(--theme-text);
    /* color: #fff; */
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

.current {
    position: absolute;
    right: -300px;
}


.suggestions li>span {
    background-color: #ffff0081 !important;
    /* Adjust the highlight style as needed */
}

.suggestions {
    position: absolute;
    top: 32px;
    left: 0;
    background-color: #fff;
    list-style: none;
    /* padding: 5px; */
    max-height: 200px;
    overflow: auto;
    font-size: 0.9rem;
    z-index: 99;
    min-width: 100%;
    max-width: 90%;
    border: 1px solid #EFF0FB;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    color: #696969;
    display: none;
}

form.searchbox:focus-within .suggestions {
    display: block;
}

form.searchbox {
    width: 500px;
}

.suggestions li {
    border-bottom: 1px solid #EFF0FB;
    cursor: pointer;
}

.suggestions li:last-child {
    border-bottom: 0;
}

.suggestions li:hover {
    color: var(--theme-text);
}

.searchbox {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
    border: 1px solid #EFF0FB;
    position: relative;
}

.searchbox input {
    border: 0;
    outline: 0;
    background-color: transparent;
    color: rgb(105, 105, 105);
    font-size: 0.9rem;
    width: 100%;
    transition: all 700ms;
}

.searchbox input::-webkit-search-cancel-button {
    opacity: 0;
}

.searchbox:focus-within {
    border-color: var(--theme-text-fade);
}

.searchbox:focus-within i {
    color: var(--theme-text-fade);
}


.searchbox i {
    color: rgb(105, 105, 105);
    cursor: pointer;
    padding-right: 0.2em;
    padding-top: 0.1em;
    transition: all 200ms;
}

.searchbox i:hover {
    color: var(--theme-text-fade);
}</style>