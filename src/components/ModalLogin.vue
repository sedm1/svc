<template>
    <transition name="Modal">
        <div class="modalBg" v-show="ModalActive" @click="TogleModalWindow">
            <div class="ModalWindow"  @click.stop="">
                <button class="closeModal" @click="TogleModalWindow"><img src="@/assets/img/icons/Close.svg" alt="Close"></button>
                <h1 class="modal__title">Welcome<span>!</span></h1>
                <div class="modal__input-item">
                    <div class="modal__input-title">Email Address</div>
                    <input type="text" placeholder="Enter your email address" class="modal__input-input">
                </div>
                <div class="modal__input-item">
                    <div class="modal__input-title">Password</div>
                    <input type="password" placeholder="Enter your password" class="modal__input-input">
                </div>
                <button class="modal__button" id="LoginButton">Log in</button>
                <button class="modal__button" id="SignUpButton">Sign up</button>
            </div>
            
        </div>
    </transition>
    
</template>

<script>
export default {
    name: "ModalLogin",
    data: function(){
        return {
            ModalActive: false
        }
    },
    methods: {
        TogleModalWindow(){
            this.ModalActive = !this.ModalActive
        }
    }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/modals.sass"
</style>