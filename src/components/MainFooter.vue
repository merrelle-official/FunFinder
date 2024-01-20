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
@import "../Structures.scss";
a{
    text-decoration: none;
}

.all__footer{
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: $footerFontWeight;
    font-weight: bold;
}

.footer__wrapper{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 1.8rem 0;
    align-items: center;
}

.footer__logo{
    display: flex;
    flex-direction: column;
    align-items: center;
}

li:not(:last-child){
    margin-bottom: 0.8rem;
}

.footer__mark{
    margin: 10px 0;
}
</style>