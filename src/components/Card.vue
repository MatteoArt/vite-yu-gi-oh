<script>

export default {
    props: {
        //passo al componente l'intero oggetto
        singleCard: {
            type: Object,
            required: true
        }
    },
}

</script>

<template>

    <div class="card">
        <div class="img-container">
            <img :src="singleCard.card_images[0].image_url"
            :alt="singleCard.type" :title="singleCard.name">
        </div>
        <div class="content">
            <span> {{ singleCard.name }} </span>
            <span> {{ singleCard.archetype }} </span>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins.scss" as *;

$a: 100%;
$b: 16px;
.card {
    flex-basis: calc((#{$a} / 5) - #{$b});
    margin: 0 8px;
    background-color: $color_primary;
    padding: 5px;
    border-radius: 5px;
    font-weight: 600;
}
.img-container {

    img {
        width: 100%;
    }
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 110px;

    span {
        display: inline-block;

        &:first-child {
            @include text-white;
            text-align: center;
            margin-top: 25px;
            font-size: 15px;
        }

        &:last-child {
            font-size: 15px;
            margin-top: auto;
        }
    }
}
</style>