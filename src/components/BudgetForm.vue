<script lang="ts" setup>
import { reactive, ref } from "vue";
import axios from "axios";
import router from "../router/index";

async function onSubmit() {
  console.log(form);
  const res = await axios.post(
    process.env.CREATE_QUOTATION_API,
    form
  );
  router.push({
    name: "list",
    params: { quotations: JSON.stringify(res.data) },
  });
}

const availableCommodities = [
  {
    id: "corn",
    label: "Maíz",
  },
  {
    id: "coffee",
    label: "Café",
  },
  {
    id: "potato",
    label: "Papa",
  },
  {
    id: "carrot",
    label: "Zanahoria",
  },
];

function containsCommoditie(commoditie: string) {
  return selectedCommodities.value.toString().includes(commoditie);
}

function formContainsData() {
  return (
    selectedCommodities.value !== undefined &&
    selectedCommodities.value.length !== 0
  );
}

const selectedCommodities = ref([]);

const form = reactive({
  coffee: 0,
  corn: 0,
  potato: 0,
  carrot: 0,
});
</script>

<Supense>
<template>
  <b-card>
    <b-card border-variant="light">
      <b-form @submit="onSubmit">
        <div>
          <h2>¿Qué planea cosechar?</h2>
        </div>
        <b-form-checkbox
          v-for="commoditie in availableCommodities"
          :key="commoditie.id"
          inline
          size="lg"
          v-model="selectedCommodities"
          :value="commoditie.id"
        >
          {{ commoditie.label }}
        </b-form-checkbox>
        <b-form-group
          id="input-group-corn"
          label="Ingresa cuantas libras de mazorca quieres plantar:"
          v-if="containsCommoditie('corn') === true"
        >
          <b-form-input id="input-corn" v-model="form.mazorca" type="number" />
        </b-form-group>
        <b-form-group
          id="input-group-coffee"
          label="Ingresa cuantas libras de café quieres plantar:"
          v-if="containsCommoditie('coffee') === true"
        >
          <b-form-input id="input-corn" v-model="form.coffee" type="number" />
        </b-form-group>
        <b-form-group
          id="input-group-potato"
          label="Ingresa cuantas libras papa quieres plantar:"
          v-if="containsCommoditie('potato') === true"
        >
          <b-form-input id="input-potato" v-model="form.potato" type="number" />
        </b-form-group>
        <b-form-group
          id="input-group-potato"
          label="Ingresa cuantas libras de zanahoria quieres plantar:"
          v-if="containsCommoditie('carrot') === true"
        >
          <b-form-input id="input-carrot" v-model="form.carrot" type="number" />
        </b-form-group>
        <b-button type="submit" variant="primary" v-if="formContainsData()"
          >Cotizar
        </b-button>
      </b-form>
    </b-card>
  </b-card>
</template>

</Supense>

<style scoped>
button {
  font-weight: bold;
}
.main {
  display: flex;
  direction: column;
}
.row {
}
</style>