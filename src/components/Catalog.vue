<template>
<div>
   <img class="card_img" :src=item.img alt="card_img"> </img>
    <h2>{{ item.name }} </h2>
    <span>{{ item.price }} </span>
    <h1 :class="[$style.catalog]">Catalog</h1>
  </div>
 </template>

<script>
import CatalogItem from './CatalogItem.vue'

  export default {
    name: 'Catalog',
    components: {
      CatalogItem
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
  .catalog {
    color: #F16D7F;
    display: flex;
    justify-content: space-around;
    max-width: 600px;
    margin: 0 auto;
    padding-left: 50px;
    padding-right: 50px;
    flex-wrap: wrap;
  }

   .card_img {
    color: #F16D7F;
   }
   </style>
