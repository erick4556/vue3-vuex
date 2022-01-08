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
import { computed, ref, reactive, watch, onMounted } from "vue";
import { useStore } from "vuex";
import CategoryForm from "../components/category/CategoryForm.vue";
import CategoryList from "../components/category/CategoryList.vue";

export default {
  components: {
    CategoryForm,
    CategoryList,
  },
  setup() {
    const text = ref("");
    const store = useStore();

    //reactive para manejar objetos
    const categoryForm = reactive({
      title: "",
      description: "",
      gasto: false,
    });

    const isCreateActive = ref(false);

    //Métodos del ciclo de vida de un componente
    onMounted(() => {
      getCategories();
    });

    //computed properties
    const loading = computed(() => store.getters["category/loading"]);

    const category = computed(() => {
      return store.getters["categories/category"];
    });

    const categories = computed(() => {
      return store.getters["categories/categories"];
    });

    // dispatch para ejecutar actions
    const createCategory = (category) => {
      store.dispatch("categories/addCategory", category);
    };

    const getCategories = () => {
      store.dispatch("categories/getCategories");
    };

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
      }
    });

    const setMessage = () => {
      //mutations
      // store.commit("setMessage", text.value); //commit para ejecutar la mutacion
      //actions
      store.dispatch("categories/setMessageAct", text.value); //dispatch para ejecutar la accion del módulo categories
    };

    return {
      submit,
      toggleCreateSection,
      loading,
      categoryForm,
      categories,
      isCreateActive,
      text,
      // message: computed(() => store.state.message), //computed para poder revisar si hay cambios internamente
      // Se utiliza el "categories/" para idenfiticar el módulo
      message: computed(() => store.getters["categories/message"]),
      messageReverse: computed(
        () => store.getters["categories/messageReverse"]
      ),
      // error: computed(() => store.state.error),
      error: computed(() => store.getters["categories/error"]),
      setMessage,
    };
  },
};
</script>
