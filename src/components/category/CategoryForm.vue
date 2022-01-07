<template>
  <form v-on:submit="submit">
    <div class="field">
      <label class="label">Título</label>
      <input
        type="text"
        class="input"
        placeholder="Título"
        v-model="category.title"
      />
    </div>
    <div class="field">
      <label class="label">Descripción</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Agregar tu descripción"
          v-model="category.description"
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
            v-model="category.gasto"
          />
          Gasto
        </label>
        <label class="radio">
          <input
            type="radio"
            name="gasto"
            value="false"
            v-model="category.gasto"
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
  <p v-show="isLoading">Cargando...</p>
</template>

<script>
import { toRefs } from "vue";
export default {
  props: {
    //Props con validaciones
    categoryForm: {
      title: String,
      description: String,
      gasto: Boolean,
    },
    handleSubmit: Function,
    loading: Boolean,
  },
  setup(props) {
    const { categoryForm, handleSubmit, loading } = toRefs(props); //toRefs permite convertir propiedades a valores reactivos

    return {
      category: categoryForm,
      isLoading: loading,
      submit: handleSubmit,
    };
  },
};
</script>
