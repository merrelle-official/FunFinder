<template>
    <div class="all__footer">
        <div class="footer__wrapper">
            <div class="footer__logo">
                <router-link to="/" class="footer__img">
                    <img src="../assets/Footer_logo.svg" alt="">
                </router-link>
                <p class="footer__slogan">Открывай места -<br> узнавай себя.</p>
            </div>
            <nav>
                <ul>
                    <li class="main__page__link"><router-link to="/">Главная</router-link></li>
                    <li class="routes__page__link"><router-link to="/routes">Маршруты</router-link></li>
                    <li class="personal_page_link"><router-link to="/account">Профиль</router-link></li>
                    <li class="privacy__policy"><a href="#">Политика конфидециальности</a></li>
                </ul>
            </nav>
        </div>
        <p class="footer__mark">Все права защищены</p>
    </div>
</template>

<script>
    export default{
        name: "MainFooter",

    }
</script>

<style lang="scss" scoped>
@import "./comp_styles/MainFooter.scss";
</style>