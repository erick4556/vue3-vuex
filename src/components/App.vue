<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "../shared/components/layout/Header.vue";
import Footer from "../shared/components/layout/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
