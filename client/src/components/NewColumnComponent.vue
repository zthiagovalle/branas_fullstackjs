<script setup lang="ts">
import { ref } from "vue";

defineProps(["board"]);
let columnName = ref("");
</script>

<template>
  <div class="column new-column">
    {{ columnName }}
    <input type="text" v-model="columnName" />
    <button v-on:click="board?.addColumn(columnName, true)">Add</button>
  </div>
</template>

<style scoped>
.new-column {
  background-color: #eee;
  border: 1px dashed #ccc;
  display: block;
}
</style>
