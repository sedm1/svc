<template>
    <div class="page">
        <ModalLogin ref="ModalLogin"></ModalLogin>
        <ModalRegistration ref="ModalRegistration"></ModalRegistration>
        <div class="bg">
            <TheMainHeader></TheMainHeader>
            <main>
                <section class="main__info">
                    <div class="container">
                    <h1 class="main__title">A <span> new generation</span> cryptocurrency density screener</h1>
                    <p class="main__descript">Get a competitive advantage in trading. Increase the mathematical expectation of your trade.</p>
                </div>
                </section>
                <section class="adv">
                    <div class="container">
                        <VAdvantagesItem
                        v-for="advItem in ADVANTAGES"
                        :key="advItem.id"
                        :advItem="advItem"
                        ></VAdvantagesItem>
                    </div>
                </section>
                <section class="buttons">
                    <div class="container">
                        <button class="buttons__item" id="Started" @click="$refs.ModalRegistration.TogleModalWindow()">Get Started</button>
                        <button class="buttons__item" id="LogIn" @click="$refs.ModalLogin.TogleModalWindow()">Log in</button>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TheMainHeader from '@/components/TheMainHeader.vue';
import VAdvantagesItem from '@/components/v-advantages-item.vue';
import ModalLogin from '../components/ModalLogin.vue';
import ModalRegistration from '@/components/ModalRegistration.vue';
export default {
    name: "HomePage",
    components: { TheMainHeader, VAdvantagesItem, ModalLogin, ModalRegistration },
    data: function(){
        return{
            
        }
    },
    methods:{
        ...mapActions([
            "GET_ADVANTAGES_FROM_DB"
        ])
        
    },
    computed: {
        ...mapGetters([
            "ADVANTAGES"
        ])
    },
    mounted(){
        this.GET_ADVANTAGES_FROM_DB()
        const pw = window.matchMedia('(display-mode: standalone)').matches
        if (pw){
            alert("ДА")
        } else {
            alert("Нет")
        }
        
    }
}
</script>

<style lang="sass">
@import "@/assets/sass/vars.sass"
.page
    +bg 
    backdrop-filter: blur(10px)
    background-image: url("@/assets/img/MainBg.jpg")
    width: 100%
    min-height: 100vh
    position: relative
.bg
    width: 100%
    min-height: 100vh
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))
    padding-bottom: 30px
main
    margin-top: 120px
.main__title
    text-align: center
    margin-bottom: 20px
    span
        color: $orange
.main__descript
    text-align: center
    margin: 0 auto
    max-width: 536px
    font-size: 20px
    font-weight: 400
.adv
    margin-top: 55px
    .container
        +flexa 
        justify-content: space-between
.buttons
    margin-top: 75px
    .container
        +flexa 
        justify-content: center
    &__item
        padding: 15px 100px
        color: $white
        font-size: 17px
        font-weight: 600
        border-radius: 10px
#Started
    background: $orange
    margin-right: 40px
#LogIn
    background: transparent
    border: 2px solid $white
@media screen and (max-width: 650px)
    main
        margin-top: 80px
    .main__descript
        font-size: 3vw
    .adv
        .container
            flex-wrap: wrap
            justify-content: space-evenly
    .buttons 
        margin-top: 50px
        .container
            flex-wrap: wrap
        &__item
            padding: 15px 0px
            width: 100%
    #Started
        margin-right: 0px
        margin-bottom: 20px
</style>
