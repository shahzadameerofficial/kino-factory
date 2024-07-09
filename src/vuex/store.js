const apiLink = 'http://localhost:3000/'
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';



Vue.use(Vuex);

// Configurations for API endpoints
const apiEndpoints = {
    orchardlist: 'orchardsList',
    supplierList: 'supplierList',
    orchardcontracts: 'orchardcontracts',
    customers: 'customers',
    packings: 'packings',
    ports: 'ports',
    positions: 'positions',
    stores: 'stores',
    states: 'states',
    fuelingTypes: 'fuelingTypes',
    contractgroups: 'contractgroups',
    generalcontracts: 'generalcontracts',
    entrypass: 'entrypass',
    vendors: 'vendors',
    supervisor: 'supervisor',
    products: 'products',
    categories: 'categories',
    brands: 'brands',
    units: 'units',
    transporters: 'transporters',
    fuelinglogreport: 'fuelinglogreport',
    vendorstockinreport: 'vendorstockinreport',
    consolidatedvehiclefuelreport: 'consolidatedvehiclefuelreport',


    dailyproductionreports: 'dailyproductionreports',
    currentstockpositionreport: 'currentstockpositionreport',
    currentstockpositionreportdaywise: 'currentstockpositionreportdaywise',
    stockoutreport: 'stockoutreport',
    productions: 'productions',
    productionslist: 'productionslist',
    localloadings: 'localloadings',
    
    // Add more endpoints as needed
};

// axios.defaults.headers.common.Authorization = 'afdg03f03g9456j0ew30dl320qa023lhnd93y'

const store = new Vuex.Store({
    state: {
        dataBase: {},
        slicedData:{},
    },
    mutations: {

        SET_DATA(state, { key, data }) {
            Vue.set(state.dataBase, key, data);
        },
        
        
        SET_SLICE(state, { key, data }) {
            Vue.set(state.slicedData, key, data);
        },

        ADD_DATA(state, { key, newData }) {
            if (state.dataBase[key]) {
                state.dataBase[key].push(newData);
            }else{
                Vue.set(state.dataBase, key, [newData])
            }
        },
        UPDATE_DATA(state, { key, updatedData }) {
            const index = state.dataBase[key].findIndex(item => item.id === updatedData.id);
            if (index !== -1) {
                Vue.set(state.dataBase[key], index, updatedData);
            }
        },
        DELETE_DATA(state, { key, id }) {
            state.dataBase[key] = state.dataBase[key].filter(item => item.id !== id);
        },
    },
    actions: {
        fetchData({ commit, state }, key) {
            if (!state.dataBase[key]) {
                const url = apiLink + apiEndpoints[key];
                if (url) {
                    axios.get(url)
                        .then(response => {
                            commit('SET_DATA', { key, data: response.data });
                        })
                        .catch(error => {
                            console.error(`Error fetching ${key}:`, error);
                        });
                } else {
                    console.error(`API endpoint not found for ${key}`);
                }
            }
        },
        fetchSlice({ commit }, req) {
            let apiUrl = `${apiLink}${req.key}${req.params}`;
              axios.get(apiUrl).then(
                response=>{
                    commit('SET_SLICE', { key:req.key, data: response.data });
                }
              ).catch(
                err=>{
                    console.log(err);
                }
              );
          },
        
        async postData({ commit }, { key, newData }) {
            try {
                const url = apiLink + apiEndpoints[key];
                const response = await axios.post(url, newData);
                commit('ADD_DATA', { key, newData: response.data });
                return response;
            } catch (error) {
                console.error(`Error posting ${key}:`, error);
                throw error;
            }
        },
        async updateData({ commit }, request) {
            try {
                const url = apiLink + apiEndpoints[request.key] + `/${request.newData.id}`;
                const response = await axios.put(url, request.newData);
                commit('UPDATE_DATA', { key:request.key, updatedData: response.data });
                return response;
            } catch (error) {
                console.error(`Error updating ${request.key}:`, error);
                throw error;
            }
        },
        async deleteData({ commit }, { key, id }) {
            try {
                const url = apiLink + apiEndpoints[key] + `/${id}`;
                const response = await axios.delete(url);
                commit('DELETE_DATA', { key, id });
                return response;
            } catch (error) {
                console.error(`Error deleting ${key}:`, error);
                throw error;
            }
        },
    },
    getters: {
        getData: state => key => state.dataBase[key],
        getSlice: state => key => state.slicedData[key],
    },
});

export default store;