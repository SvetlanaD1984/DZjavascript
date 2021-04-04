<template>
 <div class="cart_item">
 <img class="good_img" :src=getItemData.img alt="cart_img">
  <h2> {{ getItemData.name }}</h2>
  <span> {{ getItemData.price }}</span>
  <button @click="addToCart">Add to cart</button>
  </div>
 </template>

 <script>
 import { mapGetters } from 'vuex'

    export default {
        props: {
            id: Number,
        },
       computed: {
        ...mapGetters([
        'getData'
        ]),
        getItemData () {
            return this.getData[this.id]
        }
       },
       methods: {
            ...mapActions([
              'add'
          ])
       }
    }
</script>

<style module> 
  .cart_item {
    display: flex;
    justify-content: space-around;
    max-width: 600px;
    margin: 0 auto;
    padding-left: 50px;
    padding-right: 50px;
    flex-wrap: wrap;
  }
   </style>