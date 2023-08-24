<script>

import TheHeader from "./components/TheHeader.vue";
import CardContainer from "./components/CardContainer.vue";

export default {
  components: {
    TheHeader,
    CardContainer,
  }
}

</script>

<template>
     <TheHeader></TheHeader>

     <main>
      <div class="wrapper">
        <CardContainer></CardContainer>
      </div>
     </main>
</template>

<style lang="scss">
@use "./styles/partials/variables.scss" as *;
@use "./styles/partials/mixins.scss" as *;

main {
  background-color: $color_primary;
  padding-top: 80px;
  padding-bottom: 60px;
}
.wrapper {
  max-width: 1100px;
  margin: auto;
  padding: 40px;
  background-color: white;
}

</style>