<script>

import axios from "axios";

export default {
    data () {
        return {
            //dentro questa proprietà vado a salvare la risposta axios
            //del server
            cardListObj: [],
        }
    },
    methods: {
        //funzione che recupera la risposta di axios
        fetchCards() {
            const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

            axios.get(url).then((response) => {
                let dateObj = response.data;
                let ris = dateObj.data; //data è la chiave che contiene l'array di oggetti in "data di axios"
                console.log(ris);
            })
        }
    }
}

</script>

<template>

    <div class="card-list">
        {{ fetchCards() }}
    </div>

</template>

<style lang="scss" scoped>


</style>