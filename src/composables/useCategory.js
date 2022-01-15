import { computed, ref, reactive } from "vue";
import { useStore } from "vuex";
const useCategory = () => {
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

  const category = computed(() => store.getters["categories/category"]);

  const categories = computed(() => store.getters["categories/categories"]);

  // dispatch para ejecutar actions
  const createCategory = (category) =>
    store.dispatch("categories/addCategory", category);

  const getCategories = () => store.dispatch("categories/getCategories");

  const setMessage = () => {
    //mutations
    // store.commit("setMessage", text.value); //commit para ejecutar la mutacion
    //actions
    store.dispatch("categories/setMessageAct", text.value); //dispatch para ejecutar la accion del módulo categories
  };

  return {
    text,
    categoryForm,
    loading,
    category,
    categories,
    createCategory,
    getCategories,
    // message: computed(() => store.state.message), //computed para poder revisar si hay cambios internamente
    // Se utiliza el "categories/" para idenfiticar el módulo
    message: computed(() => store.getters["categories/message"]),
    messageReverse: computed(() => store.getters["categories/messageReverse"]),
    // error: computed(() => store.state.error),
    error: computed(() => store.getters["categories/error"]),
    setMessage,
  };
};

export default useCategory;
