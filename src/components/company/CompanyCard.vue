<template lang="pug">
  .company-card
    .company-card__title
      | {{ title }}
    .company-card__body
      slot
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  .company-card {
    max-width: 350px;
    min-height: 190px;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 5px;

    &__title {
      padding: 15px 15px 20px;
      font-size: var(--text-sm);
      text-transform: uppercase;

      &:not(:last-of-type) {
        border-bottom: 1px solid var(--color-border);
      }
    }

    &__body {
      padding: 20px 15px 15px;
      font-size: var(--text-md);
      color: var(--color-text);
    }
  }
</style>
