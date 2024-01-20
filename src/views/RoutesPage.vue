<template>
  <div class="main">
    <div class="header">
      <Header/>
    </div>
    <div class="main__content">
      
    </div>
  </div>
  <div class="footer">
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/MainHeader.vue';
import Footer from '../components/MainFooter.vue';
import Filter from '../components/FilterButton.vue';
  
  export default {
    name: 'RoutesPage',
    components: {
      Header,
      Footer,
      Filter,
    }
  }
</script>

<style lang="scss" scoped>
@import "../Structures.scss";

</style>