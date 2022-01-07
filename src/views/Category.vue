<template>
  <h1>Categories</h1>
  <p v-show="error">{{ message }}</p>
  <p>{{ messageReverse }}</p>
  <CategoryForm
    :categoryForm="categoryForm"
    :handleSubmit="submit"
    :loading="loading"
  />
</template>

<script>
import { computed, ref, reactive, watch } from "vue";
import { useStore } from "vuex";
import CategoryForm from "../components/category/CategoryForm.vue";

export default {
  components: {
    CategoryForm,
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

    //computed properties
    const loading = computed(() => store.getters["category/loading"]);

    const category = computed(() => {
      return store.getters["categories/category"];
    });

    // dispatch para ejecutar actions
    const createCategory = (category) => {
      store.dispatch("categories/addCategory", category);
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
      loading,
      categoryForm,
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
