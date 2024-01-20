<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router';

export default {
  name: 'App',
  router,
};
</script>

<style lang="scss">
@import "./Structures.scss";

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: $mainTextColor;
    font-family: $mainFontFamily;
    list-style: none;
    border: none;
}

h1{
  font-size: $h1FontSize;
}

h2{
  font-size: $h2FontSize;
}

p{
  font-size: $pFontSize;
}

.main{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}


.header{
    width: 100%;
    margin: 0 auto;
    background-color: $mainColor;
    display: flex;
    justify-content: center;
}

.main__content{
    margin: 0 auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 70%;
    // justify-content: center;
    align-items: center;
}

.footer{
    width: 100%;
    background-color: $mainColor;
    display: flex;
    justify-content: center;
}
</style>
