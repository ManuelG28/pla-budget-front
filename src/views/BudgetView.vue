<script>
import BudgetForm from "@/components/BudgetForm.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
export default {
  components: {
    BudgetForm,
    HeaderTitle,
  },
};
</script>

<template>
  <div class="budget-view-container">
    <HeaderTitle title="Cotiza el proyecto" />
    <BudgetForm />
  </div>
</template>

<style scoped>
.budget-view-container{
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
}
</style>