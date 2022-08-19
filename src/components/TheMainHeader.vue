<template>
  <header>
    <div class="container">
        <router-link to="/" class="logo"><img src="@/assets/img/Logo.svg" alt="Logo"></router-link>
        <div class="left__header">
            <div class="tg">
                <a class="tg__img"><img src="@/assets/img/icons/telegram.svg" alt="telegram"></a>
                <div class="tg__title">Telegram</div>
            </div>
            <a class="googlePlay"><img src="@/assets/img/googleplay.svg" alt="googleplay"></a>
        </div>
    </div>
  </header>
</template>

<script>
export default {
    name: "MainHeader"
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/vars.sass'
header
    padding-top: 63px
    .container
        +flexa 
        justify-content: space-between
.left__header
    +flexa
.logo
    width: 158px
.tg
    +flexa 
    margin-right: 50px
    &__img
        background: $orange
        border-radius: 10px
        width: 55px
        height: 55px
        margin-right: 15px
        +flexa 
        justify-content: center
        img
            width: 24px
    &__title
        font-weight: 400
        font-size: 17px
.googlePlay
    width: 191px
@media screen and (max-width: 650px)
    .tg
        margin-right: 0px
    .googlePlay, .tg__title
        display: none
    
</style>