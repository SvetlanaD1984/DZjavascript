<template>
  <h1 :class="[$style.cart-list]">CatalogItem</h1>
 </template>
 
<script>

  export default {
     props: [ 'item' ],
       type: Object,
            }
   

</script>

 <style module> 
  .cart-list {
    box-sizing: border-box;
    color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    margin: 20px 10px;
    }
   </style>
