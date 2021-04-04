import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
 
export default new Vuex.Store({
    state: {
        data: {},
        itemsOnPage: [],
        ItemsInCart: []

    },
    mutations: {
      setData (state, payload) {
        state.data = payload.newData;
        state.itemsOnPage = Object.keys(payload.newData);
      },
      setCart: (state, product) => {
        //state.cart = payload.newData;
        state.itemsInCart.push(...Object.keys(product.newData));
      },
    },
    getters: {
      getData: (state) => state.data,
      getItemsOnPage: (state) => state.itemsOnPage,
      getFullPrice: (state) => {
        const keys = state.itemsOnPage;
        return keys.reduce((res, cur) => res + state.data[cur].price, 0);
      },
      getItemsInCart(state) {
        return state.ItemsInCart;
        },
  },
  actions: {
    requestData ({ commit, state }, page) {
        fetch(`/database/items${page}.json`)
          .then(res => {
            return res.json();
          })
          .then(res => {
            commit('setData', { newData: res });
          });
      },
      requestCart ({ commit }, product) {
        fetch('/cartlist', {
          method: 'POST',
          body: JSON.stringify(product),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(res => {
          return res.json();
        })
        .then(res => {
          commit('setCart', { newData: res });
        });
        },

addItem ({}, data) {
  fetch('/itemslist', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(res => {
    return res.json();
  })
  .then(res => {
   console.log(res)
});
},

addInCart ({}, data) {
  fetch('/cartlist', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    }
  })
 

  .then(res => {
    return res.json();
  })
  .then(res => {
   console.log(res)
});
},
  }
})