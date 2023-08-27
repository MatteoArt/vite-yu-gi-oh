<script>

import Card from "./Card.vue";
import CountBar from "./CountBar.vue";
import { store, fetchCards } from "../store.js";

export default {
    components: {
        Card,
        CountBar,
    },
    data () {
        return {
            //dentro questa proprietà vado a salvare la risposta axios
            //del server
            store,
        }
    },
    methods: {
        fetchCards,
    },
    //appena viene caricato il componente eseguo la chiamata axios
    mounted() {
        fetchCards();
    }
}

</script>

<template>

    <CountBar v-if="store.showBar" :numberOfCards="store.cardList.length"
    :arc="store.cardList[0] ? store.cardList[0] : {}"></CountBar>
    <div class="card-list">
        <Card v-for="cardItem in store.cardList"
        :singleCard="cardItem" :key="cardItem.id"></Card>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;

.card-list {
    @include d-flex;
    flex-wrap: wrap;
    row-gap: 13px;
    max-width: 1000px;
    margin: auto;
}

</style>