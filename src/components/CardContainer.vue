<script>

import axios from "axios";
import Card from "./Card.vue";
import CountBar from "./CountBar.vue";

export default {
    components: {
        Card,
        CountBar,
    },
    data () {
        return {
            //dentro questa proprietà vado a salvare la risposta axios
            //del server
            cardList: [],
        }
    },
    methods: {
        //funzione che recupera la risposta di axios
        fetchCards() {
            const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0";

            axios.get(url).then((response) => {
                let dateObj = response.data;
                let ris = dateObj.data; //data è la chiave che contiene l'array di oggetti in "data di axios"

                this.cardList = ris; //copio dentro cardlist il risultato
                console.log(this.cardList);
            })
        }
    },
    //appena si carica il componente (e quindi anche la pagina) eseguo la chiamata axios
    mounted() {
        this.fetchCards();
    }
}

</script>

<template>

    <CountBar :numberOfCards="cardList.length"></CountBar>
    <div class="card-list">
        <Card v-for="cardItem in cardList"
        :singleCard="cardItem"></Card>
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