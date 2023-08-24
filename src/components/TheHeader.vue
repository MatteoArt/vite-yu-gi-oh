<script>

export default {
    data () {
        return {
            titleObj: {
                img: "yugioh.png",
                title: "Yu-Gi-Oh Api"
            }
        }
    },
    methods: {
        getImg(nomeImg) {
            return new URL(`../assets/${nomeImg}`, import.meta.url).href;
        }
    }
}

</script>

<template>
    <header>
        <div class="logo-img">
            <img :src="getImg(titleObj.img)" alt="logo">
        </div>
        <h1> {{ titleObj.title }} </h1>
    </header>
</template>

<style lang="scss" scoped>

header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    padding: 10px 15px;

    h1 {
        font-size: 38px;
    }

    .logo-img {
        width: 90px;

        img {
            width: 100%;
        }
    }
}
</style>