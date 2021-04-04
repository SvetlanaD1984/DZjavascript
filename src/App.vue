<template>
    <div id="app">
       <CatalogItem/>
       <Catalog/>
       <CartItem/>
       <Cart/>
       <Button/>
    </div>
</template>
  
  
 <script>

import CatalogItem from './components/CatalogItem.vue'
import Catalog from './components/Catalog.vue'
import CartItem from './components/CartItem.vue'
import Cart from './components/Cart.vue'
import Button from './components/Button.vue'

export default {
  name: 'app',
  components: {
    CatalogItem,
    Catalog,
    CartItem,
    Cart,
    Button
  }
  }

  </script>

  