<template>
  <h1 class="title">Categories</h1>
  <p v-show="error">{{ message }}</p>
  <div class="block is-flex is-justify-content-start">
    <button class="button is-primary" @click="toggleCreateSection">
      Crear Nuevo
    </button>
  </div>
  <div class="box" v-show="isCreateActive">
    <h2 class="subtitle is-4">Crear nueva categoría</h2>
    <CategoryForm
      :categoryForm="categoryForm"
      :handleSubmit="submit"
      :loading="loading"
    />
  </div>
  <div class="block">
    <h2 class="subtitle is-4">Lista de Categorías</h2>
    <CategoryList :categoryList="categories" />
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import CategoryForm from "./CategoryForm.vue";
import CategoryList from "./CategoryList.vue";
import useCategory from "../../composables/useCategory";
export default {
  components: {
    CategoryForm,
    CategoryList,
  },
  setup() {
    const {
      text,
      categoryForm,
      loading,
      category,
      categories,
      createCategory,
      getCategories,
      message,
      messageReverse,
      error,
      setMessage,
    } = useCategory();
    const isCreateActive = ref(false);

    //Métodos del ciclo de vida de un componente
    onMounted(() => {
      getCategories();
    });

    // métodos del componente
    const submit = (event) => {
      event.preventDefault(); //Evita que se recargue la página al hacer submit
      if (categoryForm.title !== "" && categoryForm.description !== "") {
        createCategory(categoryForm);
      } else {
        alert("Todos los campos son obligatorios");
      }
    };

    const toggleCreateSection = () => {
      isCreateActive.value = !isCreateActive.value;
    };

    //watch para escuchar algun cambio en valores específicos
    watch(category, (newValue, oldValue) => {
      if (oldValue && oldValue !== newValue) {
        console.log("Old created:", oldValue);
        console.log("Created:", newValue);
        toggleCreateSection();
      }
    });

    return {
      submit,
      toggleCreateSection,
      loading,
      categoryForm,
      categories,
      isCreateActive,
      text,
      message,
      messageReverse,
      error,
      setMessage,
    };
  },
};
</script>
