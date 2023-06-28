<template>
  <div class="container">
    <h1>Dynamic Input</h1>
    <button class="add-row" v-on:click="addRow">Add Row</button>

    <div class="line" v-for="(row, index) in rows" :key="index">
      <input class="row-input" v-model="row.text" v-on:input="updateRow(index, $event)" ref="inputs">

      <div class="button-container">
        <button class="row-up" v-on:click="moveUp(index)">Move Up</button>
        <button class="row-down" v-on:click="moveDown(index)">Move Down</button>
        <button class="row-delete" v-on:click="deleteRow(index)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [],
    };
  },
  methods: {
    addRow() {
      this.rows.push({ text: "" });
      this.$nextTick(() => {
        const lastInput = this.$refs.inputs[this.rows.length - 1];
        if (lastInput) lastInput.focus();
      });
    },

    updateRow(i, event) {
      this.rows[i].text = event.target.value;
    },

    moveUp(i) {
      const current = this.rows[i];
      this.rows.splice(i, 1);
      this.rows.splice(i - 1, 0, current);
      this.$nextTick(() => {
        const input = this.$refs.inputs[i - 1] || this.$refs.inputs[0];
        if (input) input.focus();
      });
    },

    moveDown(i) {
      const current = this.rows[i];
      this.rows.splice(i, 1);
      this.rows.splice(i + 1, 0, current);
      this.$nextTick(() => {
        const input = this.$refs.inputs[i + 1];
        if (input) input.focus();
      });
    },

    deleteRow(i) {
      this.rows.splice(i, 1);
      if (this.rows.length > 0) {
        const focusIndex = Math.min(i, this.rows.length - 1);
        const input = this.$refs.inputs[focusIndex];
        input.focus();
      }
    },
  }
};
</script>

<style scoped>
html,
body {
  font-family: Arial, sans-serif;
  background-color: #444654;
  color: #fff;
}

.container {
  margin: 48px;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-right: 14px;
}

button {
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  background-color: #1D9BF0;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #2A82BA;
}

button:disabled {
  background-color: gray;
  cursor: initial
}

.line {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.button-container {
  display: flex;
  gap: 8px;
}

.add-row {
  margin-bottom: 24px;
}

.row-delete {
  background-color: #e21624;
}

.row-delete:hover {
  background-color: #aa1b24;
}
</style>