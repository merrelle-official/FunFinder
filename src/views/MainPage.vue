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
@import "../Structures.scss";

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: $mainTextColor;
    list-style: none;
    border: none;
    text-decoration: none;
}

.header{
    width: 100%;
    background-color: $mainColor;
    display: flex;
    justify-content: center;
}

.main__content{
  justify-content: center;
}

.main__slider{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.prev__card, .next__card{
    min-width: 70px;
    min-height: 70px;
    background-color: $secondColor;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.next__card>img{
    transform: rotate(180deg) translateX(-3px);
}

.prev__card>img{
    transform: translateX(-3px);
}

.current__card{
    margin: 0 1.5rem;
    background-image: url("../assets/Slider1.png");
    border-radius: 30px;
    min-height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 6rem;
    background-size: cover;
}

.card__title{
    
    font-size: 40px;
    font-weight: 400;
    span{
        font-weight: bold;
    }
}

.card__text{
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    flex: 1;
    h2{
        font-weight: 400;
        width: 65%;
        
    }
    button{
        align-self: flex-end;
        width: 16rem;
        height: 3.5rem;
        border-radius: 30px;
        background-color: $secondColor;
        font-size: 30px;
        text-align: center;
        a{
            color: $secondTextColor;
        }
    }
}
</style>
  