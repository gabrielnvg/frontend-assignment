<template lang="pug">
  .company
    TheCompanyNavbar
    .company__container
      router-view
</template>

<script>
import TheCompanyNavbar from 'Components/company/TheCompanyNavbar.vue';

export default {
  components: {
    TheCompanyNavbar
  }
};
</script>

<style scoped lang="scss">
  .company {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: $breakpoint-lg) {
      flex-direction: row;
      align-content: center;
      justify-content: space-between;
    }

    &__container {
      max-width: 720px;
    }
  }
</style>
