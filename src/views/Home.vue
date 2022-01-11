<template>
  <div class="home">
    <TransactionForm />
  </div>
</template>

<script>
// @ is an alias to /src

import TransactionForm from "../components/transactions/TransactionForm.vue";

export default {
  name: "Home",
  components: {
    TransactionForm,
  },
};
</script>
