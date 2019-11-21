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
    margin-top: 20px;
    display: flex;
    align-content: center;
    flex-direction: column;

    @media screen and (min-width: $breakpoint-lg) {
      flex-direction: row;
    }

    & > * {
      flex: 1;
    }

    &__container {
      max-width: 720px;
    }
  }
</style>
