<script>

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
        }
    }
}

</script>

<template>

</template>

<style lang="scss" scoped>


</style>