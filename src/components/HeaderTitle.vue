<script>
import { FruitPineapple } from "mdue";
import { Corn } from "mdue";
export default {
  props: {
    title: String,
  },
  components: {
    FruitPineapple,
    Corn,
  },
};
</script>

<template>
  <div class="title-container">
    <Corn class="left-icon" />
    <h1 class="title">{{ title }}</h1>
    <FruitPineapple class="right-icon"/>
  </div>
</template>


<style scoped>
.title-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "left-icon title right-icon";
}

.left-icon {
  place-self: center;
  grid-area: left-icon;
  width: 5.2rem;
  height: 5.2rem;
  color: #fafafa;
}

.title {
  grid-area: title;
  place-self: center;
  color: #fafafa;
  font-size: 3.8rem;
  text-align: center;
}

.right-icon {
  place-self: center;
  width: 5.2rem;
  height: 5.2rem;
  color: #fafafa;
}
</style>