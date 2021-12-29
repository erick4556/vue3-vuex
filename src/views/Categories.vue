<template>
  <h1>Categories</h1>
  <input type="text" v-model="text" />
  <button @click="setMessage">Change</button>
  <p v-show="error">{{ message }}</p>
  <p>{{ messageReverse }}</p>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const text = ref("");
    const store = useStore();
    console.log(store);

    const setMessage = () => {
      //mutations
      // store.commit("setMessage", text.value); //commit para ejecutar la mutacion
      //actions
      store.dispatch("categories/setMessageAct", text.value); //dispatch para ejecutar la accion del módulo categories
    };

    return {
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