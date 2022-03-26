<script lang="ts">
import { type } from "os";
import HeaderTitle from "../components/HeaderTitle.vue";
import Quotation from "../dto/quotation.dto";
import Supplier from "../dto/supplier.dto";
export default {
  components: {
    HeaderTitle,
  },
  props: {
    quotations: String,
  },
};
</script>

<template>
  <div class="budget-list-view-container">
    <HeaderTitle title="Presupuestos encontrados" />
    <b-card>
      <h1>
        {{ quotations }}
      </h1>
    </b-card>
  </div>
</template>

<style scoped>
.budget-list-view-container {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}
</style>