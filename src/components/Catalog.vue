<template>
   <div class="catalog_list" id="catalog">
   <CatalogItem 
     v-for="id in getItemsOnPage"
     :id="id"
     :key="id"
    
     />
      <Button> Загрузить еще </Button> 
    </div>
 </template>
 
  <script>

import { mapMutations, mapGetters, mapActions } from 'vuex'
import CatalogItem from './CatalogItem.vue'

export default {
  name: 'catalog',
  components: {
    CatalogItem,
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
      'getItemsOnPage',
       'getFullPrice'
    ]),
  },

  created () {
    this.requestData(1)
  }
}    
</script>

<style module> 
  .catalog_list {
    display: flex;
    justify-content: space-around;
    max-width: 600px;
    margin: 0 auto;
    padding-left: 50px;
    padding-right: 50px;
    flex-wrap: wrap;
  }
   </style>
