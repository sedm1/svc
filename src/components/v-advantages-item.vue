<template>
  <div class="adv__item">
    <div class="adv__item-img">{{advItem.icon}}</div>
    <h3 class="adv__item-title">{{advItem.title}}</h3>
  </div>
</template>

<script>
export default {
    name: "VAdvantagesItem",
    props: {
        advItem: {
            type: Object,
            default() {
                return { }
            }
        }
    }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
.adv__item
    +flexa 
    flex-direction: column
    &-img
        width: 52px
        margin-bottom: 7px
    &-title
        max-width: 200px
        text-align: center
        font-size: 17px
        font-weight: 400
@media screen and (max-width: 650px)
    .adv__item
        width: 33.333%
        margin-bottom: 30px
@media screen and (max-width: 450px)
    .adv__item
        width: 47%
        &-title
            font-size: 14px
</style>