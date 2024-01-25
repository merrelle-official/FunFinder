<template>
  <div class="main">
    <div class="header">
      <Header/>
    </div>
    <div class="main__content">
      <div class="filter__slider">
        <SliderFunc>
          <Filter v-for="item in filterArray" :key="item.id" :buttonText="item.text"></Filter>
          <!-- <Filter buttonText="Кинотеатры"></Filter>
          <Filter buttonText="Кинотеатры"></Filter>
          <Filter buttonText="Кинотеатры"></Filter>
          <Filter buttonText="Кинотеатры"></Filter>
          <Filter buttonText="Кинотеатры"></Filter>
          <Filter buttonText="Кинотеатры"></Filter>
          <Filter buttonText="Кинотеатры"></Filter>
          <Filter buttonText="Кино ещё чтовыфв "></Filter> -->

        </SliderFunc>
      </div>
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
import SliderFunc from '../components/SliderFunc.vue';
  
  export default {
    name: 'RoutesPage',
    components: {
      Header,
      Footer,
      Filter,
      SliderFunc,
    },
    data() {
      return {
        filterArray: [
          {id: 1, text: "Кинотеатры"},
          {id: 2, text: "Кафе"},
          {id: 2, text: "Фотографии"},
          {id: 2, text: "Фотографии"},
          {id: 2, text: "Фотографии"},
          {id: 2, text: "Фотографии"},
          {id: 2, text: "Фотографии"},
      ]
      };
    },
  }
</script>

<style lang="scss" scoped>
@import "../Structures.scss";

.filter__slider{
  width: 100%;
  margin: 5rem 0;
}

</style>