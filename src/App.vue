<template>
    <div id="app">
       
    <CatalogItem />
    <Catalog />
    <CartItem />
    <Cart />

    </div>
</template>
  
  
 <script>
import CatalogItem from './components/CatalogItem.vue'
import Catalog from './components/Catalog.vue'
import CartItem from './components/CartItem.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'app',
  components: {
    CatalogItem,
    Catalog,
    Cart,
    CartItem
  }
  }

  </script>