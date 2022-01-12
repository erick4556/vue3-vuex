<template>
  <div class="home">
    <TransactionButtons />
    <div class="block is-flex is-justify-content-center">
      <h1 class="title is-1">
        Saldo: <span class="has-text-primary">{{ saldo }}</span>
      </h1>
    </div>
    <TransactionTable />
  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import TransactionTable from "../components/transactions/TransactionTable.vue";
import TransactionButtons from "../components/transactions/TransactionButtons.vue";

export default {
  name: "Home",
  components: {
    TransactionTable,
    TransactionButtons,
  },
  setup() {
    const store = useStore();

    // computed properties
    const saldo = computed(() => {
      return store.getters["transactions/saldo"];
    });

    onMounted(() => {
      getTransactions();
    });

    const getTransactions = () => {
      store.dispatch("transactions/getTransactions");
    };

    return {
      saldo,
    };
  },
};
</script>
