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

    @media screen and (max-width: $breakpoint-lg) {
      align-content: center;
      justify-content: space-between;
    }

    .company-main-container {
      max-width: 720px;
    }
  }
</style>
