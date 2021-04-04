
<template>
   <div class="cart-list" id="cart">
   <Cart 
     v-for="id in getItemsInCart"
     :id="id"
     :key="id"
     @addToCart="addToCart"
     />
    </div>
 </template>
 
  <script>

import { mapGetters } from 'vuex'
import CartItem from './CartItem.vue'

export default {
  name: 'cart',
  components: {
    CartItem,
  },
   methods: {

    // ...mapMutations([
    //  'setData',
   // ])
   ...mapActions([
     'requestData',
     'add'
   ]),
   addToCart(data) {
     this.addToCart(data)
   }
  },

 computed: {
    ...mapGetters([
      'getItemsInCart'
       
    ]),
  },

  created () {
    this.requestData(1)
  }
}    
</script>

<style module> 
  .cart-list {
    display: flex;
    justify-content: space-around;
    max-width: 600px;
    margin: 0 auto;
    padding-left: 50px;
    padding-right: 50px;
    flex-wrap: wrap;
  }
   </style>
