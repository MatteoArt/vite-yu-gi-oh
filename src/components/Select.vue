<script>

import axios from "axios";
import { store, filterByArchetype } from "../store.js";

export default {
    data() {
        return {
            store,
            archetypeList: [],
        }
    },
    methods: {
        fetchArchetypes() {
            const url = "https://db.ygoprodeck.com/api/v7/archetypes.php";

            axios.get(url).then((response) => {
                this.archetypeList = response.data;
                //ora la proprietà archetypeList contiene tutti i dati sugli
                //archetipi come array
            })
        },
        filterByArchetype,
    },
    mounted() {
        this.fetchArchetypes();
    }
}

</script>

<template>
    <div class="option-wrapper">
        <input list="archetypes" name="arch" id="arch"
        placeholder="Filter by archetype" v-model="store.searchArch">
        <datalist id="archetypes">
            <option v-for="archetype in archetypeList"
            :value="archetype.archetype_name"></option>
        </datalist>
        <span class="btn" @click="filterByArchetype(store.searchArch)">Filter</span>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;

.option-wrapper {
    margin-bottom: 30px;
    margin-left: 160px;
    @include d-flex;
    gap: 8px;

    input#arch {
        padding: 6px;
        border-radius: 5px;
        border: 1px solid gray;
        cursor: pointer;
    }

    .btn {
        display: block;
        padding: 5px 8px;
        background-color: white;
        font-size: small;
        color: rgb(10, 156, 10);
        @include d-flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 1px solid rgb(10, 156, 10);
        cursor: pointer;


        &:hover {
            border-color: white;
            background-color: rgb(10, 156, 10);
            color: white;
        }
    }
}
</style>