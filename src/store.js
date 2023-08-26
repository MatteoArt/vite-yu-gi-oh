import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    cardList: [],
    searchArch: "",
});

//funzione che prende in input il valore selezionato nella select di 
//ricerca e lo utilizza nell'url facendo una ricerca parametrizzata
export function filterByArchetype(searchTxt) {
    store.cardList = [];

    fetchCards(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${searchTxt}`);

};


//funzione che recupera la risposta di axios
export function fetchCards(path) {
    //se path ha un valore, allora uso quello, altrimenti uso il link (stringa) di default
    const url = path ? path : "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0";

    axios.get(url).then((response) => {
        let dateObj = response.data;
        let ris = dateObj.data; //data è la chiave che contiene l'array di oggetti in "data di axios"

        store.cardList = ris; //copio dentro cardlist il risultato
        console.log(store.cardList);
    })
};