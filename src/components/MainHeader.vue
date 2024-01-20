<template>
<div class="header__wrapper">
    <router-link to="/" class="footer__logo">
        <img src="../assets/Header_logo.svg" alt="">
    </router-link>
    <nav>
        <ul>
            <li class="main__page__link"><router-link to="/">Главная</router-link></li>
            <li class="routes__page__link"><router-link to="/routes">Маршруты</router-link></li>
            <li class="personal_page_link"><router-link to="/account">Профиль</router-link></li>
        </ul>
    </nav>
</div>
</template>

<script>
    export default{
        name: 'MainHeader',

    }
</script>

<style lang="scss" scoped>
@import "./comp_styles/MainHeader.scss";
</style>