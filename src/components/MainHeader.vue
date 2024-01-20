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
.header__wrapper{
    width: 65%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

a{
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
}

li{
    display: inline-block;
    &:not(:last-child){
        margin-right: 7rem;
    }
}
</style>