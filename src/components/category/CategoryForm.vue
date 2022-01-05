<template>
  <form v-on:submit="submit">
    <div class="field">
      <label class="label">Título</label>
      <input
        type="text"
        class="input"
        placeholder="Título"
        v-model="categoryForm.title"
      />
    </div>
    <div class="field">
      <label class="label">Descripción</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Agregar tu descripción"
          v-model="categoryForm.description"
        />
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="radio">
          <input
            type="radio"
            name="gasto"
            value="true"
            v-model="categoryForm.gasto"
          />
          Gasto
        </label>
        <label class="radio">
          <input
            type="radio"
            name="gasto"
            value="false"
            v-model="categoryForm.gasto"
          />
          Ingreso
        </label>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Guardar</button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancelar</button>
      </div>
    </div>
  </form>
  <p v-show="loading">Cargando...</p>
</template>

<script>
import { reactive, watch, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    //reactive para manejar objetos
    const categoryForm = reactive({
      title: "",
      description: "",
      gasto: false,
    });

    const loading = computed(() => store.getters["category/loading"]);

    const category = computed(() => {
      return store.getters["categories/category"];
    });

    const createCategory = (category) => {
      store.dispatch("categories/addCategory", category);
    };

    const submit = (event) => {
      event.preventDefault(); //Evita que se recargue la página al hacer submit
      if (categoryForm.title !== "" && categoryForm.description !== "") {
        createCategory(categoryForm);
      } else {
        alert("Todos los campos son obligatorios");
      }
    };

    //Para escuchar algun cambio
    watch(category, (newValue, oldValue) => {
      if (oldValue && oldValue !== newValue) {
        console.log("Old created:", oldValue);
        console.log("Created:", newValue);
      }
    });

    return {
      categoryForm,
      loading,
      submit,
    };
  },
};
</script>