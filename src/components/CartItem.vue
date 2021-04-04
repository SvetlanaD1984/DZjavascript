  <template>
  <h1 :class="[$style.cart-item]">CartItem</h1>
 </template>

 <script>

  export default {
     props: [ 'item' ],
     type: Object,
            }
   
</script>

 <style module> 
  .cart-item {
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
