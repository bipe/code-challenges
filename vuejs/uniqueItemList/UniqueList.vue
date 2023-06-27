<template>
  <div class="list-challenge">
    <h1>Unique List Challenge</h1>
    <input data-testid="item-input" v-model="input" v-on:keydown.enter="addItem" />
    <div class="buttons-container">
      <button data-testid="add-button" v-on:click="addItem">Add Item</button>
      <button data-testid="remove-button" v-on:click="removeItem">Remove Item</button>
      <button data-testid="clear-button" v-on:click="clearItems">Clear Items</button>
    </div>
    <ul data-testid="items">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      input: ""
    }
  },
  
  methods: {
    addItem() {
      const trimmed = this.trimStr(this.input);
     
      if (trimmed !== "" && !this.items.includes(trimmed)) {
        this.items.push(trimmed);
        this.input = ""
      }
    },
    
    removeItem() {
      const trimmed = this.trimStr(this.input);
      
      const index = this.items.indexOf(trimmed);
      
      if (index !== -1) {
        this.items.splice(index, 1);
        this.input = "";
      }
    },
    
    clearItems() {
      if (this.items.length > 0) {
        this.items = [];
        this.input = "";
      }
    },
    
    trimStr(str) {
      return str.trim();
    }
  }
}
</script>

<style>
  .list-challenge {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 72px;
  }

  .list-challenge input {
    width: 80%;
    max-width: 550px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 12px;
  }

  .buttons-container {
    display: flex;
    gap: 10px;
  }

  .buttons-container button {
    padding: 8px 12px;
    border-radius: 4px;
    border: none;
    background-color: #1D9BF0;
    color: #fff;
    cursor: pointer;
  }

  .buttons-container button:hover {
    background-color: #2A82BA;
  }

  .list-challenge ul {
    margin-top: 32px;
    padding: 0;
  }

  .list-challenge ul li {
    margin-bottom: 5px;
  }
</style>