<template lang="pug">
  #company
    h1 company
    .company-main-container
      router-view
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
  #company {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: $breakpoint-lg) {
      flex-direction: row;
      align-content: center;
      justify-content: space-between;
    }

    .company-main-container {
      max-width: 720px;
    }
  }
</style>
