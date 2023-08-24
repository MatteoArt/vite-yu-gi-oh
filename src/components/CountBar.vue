<script>

export default {
    props: {
        numberOfCards: Number,
    }
}

</script>

<template>
    <div class="bar">Found {{ numberOfCards }} cards</div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins.scss" as *;

$space: 10px;
.bar {
    background-color: #212529;
    color: white;
    font-weight: bold;
    font-size: large;
    max-width: 1000px;
    margin: 0 (8px + $space);
    border-radius: 5px;
    padding: 25px 15px;
}
</style>