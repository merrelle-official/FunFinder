<template>
    <div class="main">
      <div class="header">
      <Header></Header>
      </div>
      <div class="main__content">

        <div class="main__slider">
          <button class="prev__card"><img src="../assets/arrow.svg" alt="<"></button>
          <div class="current__card">
            <h1 class="card__title"><span>FunFinder</span> поможет найти новые интересные места, основываясь на ваших интересах</h1>
            <div class="card__text">
              <h2>Наш сервис для построения собственных маршрутов предоставляет уникальную возможность создавать персонализированные маршруты для прогулок в любом городе</h2>
              <button class="toroutes"><router-link to="/routes">К маршрутам</router-link></button>
            </div>
          </div>
          <button class="next__card"><img src="../assets/arrow.svg" alt="<"></button>
        </div>

      </div>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
    
  
  </template>
  
  <script>
  import Header from '../components/MainHeader.vue';
  import Footer from '../components/MainFooter.vue';
  
  export default {
    name: 'MainPage',
    components: {
      Header,
      Footer,
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import "./views_styles/MainPage.scss";
  </style>
  