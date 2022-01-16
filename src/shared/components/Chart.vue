<template>
  <div :id="idChart"></div>
</template>

<script>
import { onMounted, onUpdated, toRefs } from "vue";
import c3 from "c3";

export default {
  props: ["id", "data"],
  setup(props) {
    const { id, data } = toRefs(props);

    onMounted(() => {
      generateChart();
    });

    //Se ejecuta para cuando algunas de sus propiedades se actualiza
    onUpdated(() => {
      generateChart();
    });

    // Lógica para renderizar el gráfico
    const generateChart = () => {
      c3.generate({
        bindto: `#${id.value}`,
        data: data.value,
      });
    };

    return {
      idChart: id,
    };
  },
};
</script>
