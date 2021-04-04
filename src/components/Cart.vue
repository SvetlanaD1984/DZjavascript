
<template>
  <h1 :class="[$style.cart]">Cart</h1>
</template>

<script>

 import CartItem from './CartItem.vue'

  export default {
    name: 'Cart',
    components: {
      CartItem
      },

   data() {
    return {
       items: [
        { "name": "Shirt", "price": 150, "img": "/img/img1.png" },
        { "name": "Socks", "price": 250, "img": "/img/img2.png" },
        { "name": "Jacket", "price": 750, "img": "/img/img3.png" }
    ],
    }
  },
 }
</script>

  <style module> 
  .cart {
    color: #F16D7F;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    margin: 20px 10px;
  }
   </style>
