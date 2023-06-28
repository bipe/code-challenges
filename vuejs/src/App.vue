<template>
  <div id="vue-app">
    
    <div class="header">
      <button v-for="chal in chals" :key="chal" v-on:click="selected = chal">{{ chal }}</button>
    </div>

    <div class="components">
      <UniqueItemList v-if="selected === 'Unique Item List'"></UniqueItemList>
      <BookSearch v-if="selected === 'Book Search'" :books='[
        {
          "author": "Chinua Achebe",
          "country": "Nigeria",
          "language": "English",
          "pages": 209,
          "title": "Things Fall Apart",
          "year": 1958
        },
        {
          "author": "Dante Alighieri",
          "country": "Italy",
          "language": "Italian",
          "pages": 928,
          "title": "The Divine Comedy",
          "year": 1315
        },
        {
          "author": "Virginia Woolf",
          "country": "United Kingdom",
          "language": "English",
          "pages": 216,
          "title": "Mrs Dalloway",
          "year": 1925
        },
        {
          "author": "Virginia Woolf",
          "country": "United Kingdom",
          "language": "English",
          "pages": 209,
          "title": "To the Lighthouse",
          "year": 1927
        }
      ]' />
      <DynamicInput v-if="selected === 'Dynamic Input Component'"></DynamicInput>
    </div>

  </div>
</template>
  
<script>
import BookSearch from '../BookSearch/BookSearch'
import DynamicInput from '../DynamicInput/DynamicInput';
import UniqueItemList from '../UniqueItemList/UniqueItemList'

export default {
  name: 'vue-app',
  components: {
    BookSearch,
    DynamicInput,
    UniqueItemList
  },
  data() {
    return {
      selected: "Unique Item List",
      chals: ['Unique Item List', 'Book Search', 'Dynamic Input Component']
    }
  }
}
</script>
  
<style>
#vue-app {
  font-family: arial;
}

.header button {
  margin: 12px;
}
</style>