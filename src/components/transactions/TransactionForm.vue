<template>
  <h2 class="title">Agregar {{ isGasto ? "Gasto" : "Ingreso" }}</h2>
  <div class="block">
    <form v-on:submit.prevent="handleSubmit">
      <div class="field">
        <div class="control">
          <label class="label">Monto</label>
          <input
            type="number"
            class="input"
            placeholder="Monto"
            v-model="transactionForm.amount"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Categoría</label>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select v-model="transactionForm.category">
              <option value="">Seleccione una categoría</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.title }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Descripción</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Descriptión"
            v-model="transactionForm.description"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Fecha</label>
        <div class="control">
          <input
            class="input"
            type="date"
            placeholder="Fecha"
            v-model="transactionForm.date"
          />
        </div>
      </div>
      <input type="hidden" name="gasto" v-model="transactionForm.gasto" />
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Registrar</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancelar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const transactionForm = reactive({
      amount: null,
      description: "",
      date: Date.now(),
      gasto: route.query.isGasto ? true : false,
      category: "",
    });

    const categories = computed(() => store.getters["categories/categories"]);

    onMounted(() => {
      store.dispatch("categories/getCategories");
    });

    const createTransaction = () => {
      store.dispatch("transactions/createTransaction", transactionForm);
    };

    const handleSubmit = () => {
      createTransaction();
    };

    return {
      isGasto: route.query.isGasto ? true : false,
      transactionForm,
      categories,
      handleSubmit,
    };
  },
};
</script>