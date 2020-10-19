<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>

 // import Menu from "./components/global/Menu";
import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 export default {
  name: 'App',
   components: {Footer, Header},
   // components: {Menu},
}
</script>

<style lang="scss">
  @import 'assets/scss/app.scss';
</style>