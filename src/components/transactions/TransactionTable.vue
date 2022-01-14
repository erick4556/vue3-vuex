<template>
  <div class="table-container">
    <table class="table is-fullwidth is-striped is-hoverable">
      <thead>
        <th>Descripción</th>
        <th>Tipo</th>
        <th>Monto</th>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td>{{ transaction.description }}</td>
          <td>
            <span
              class="tag"
              :class="{
                'is-primary': !transaction.gasto,
                'is-info': transaction.gasto,
              }"
            >
              {{ transaction.gasto ? "Gasto" : "Ingreso" }}
            </span>
          </td>
          <td>${{ transaction.amount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template> 

<script>
export default {
  props: ["transactions"],
};
</script>