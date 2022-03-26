<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <BudgetView />
  <BudgetListView />
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #72a06a;
  font-weight: normal;
}
</style>
  