<template>
  <form action="">
    <div class="field">
      <label class="label">Título</label>
      <input type="text" class="input" placeholder="Título" />
    </div>
    <div class="field">
      <label class="label">Descripción</label>
      <div class="control">
        <textarea class="textarea" placeholder="Agregar tu descripción" />
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="radio">
          <input type="radio" name="gasto" value="true" />
          Gasto
        </label>
        <label class="radio">
          <input type="radio" name="gasto" value="false" />
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
</template>

<script>
// import { ref } from "vue";
export default {
  setup() {},
};
</script>