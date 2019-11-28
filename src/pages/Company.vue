<template lang="pug">
  .company
    TheCompanyNavbar
    .company__container
      transition(name="fade")
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
    flex-direction: column;

    @media screen and (min-width: $breakpoint-lg) {
      flex-direction: row;
    }

    & > * {
      flex: 1;
    }

    &__container {
      max-width: 720px;

      @media screen and (max-width: ($breakpoint-lg - 1px)) {
        margin-top: 20px;
      }

      .fade-enter,
      .fade-leave-to {
        opacity: 0;
      }

      .fade-enter-active {
        transition: opacity var(--fade-duration);
      }
    }
  }
</style>
