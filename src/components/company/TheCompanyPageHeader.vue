<template lang="pug">
  .company-page-header
    header
      .company-page-header__image
        img(:src="require(`../../images/companies/${image}`)", alt="Company logo")
      div
        .company-page-header__name
          | {{ name }}
        .company-page-header__location
          img(src="../../images/location.png", alt="Location pin icon")
          | {{ location }}
    .company-page-header__description
      span(v-html="`${description}&nbsp;`")
      a(v-if="viewMore", :href="viewMore", target="_blank") View more...
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    viewMore: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
  .company-page-header {
    margin-bottom: 25px;

    header {
      margin-bottom: 25px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    &__image {
      margin-right: 15px;
      width: 65px;
      height: 65px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-background);
      border-radius: 5px;
      box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);

      img {
        width: 32px;
        height: 32px;
      }
    }

    &__name {
      margin-bottom: 10px;
      font-size: var(--font-lg);
    }

    &__location {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: var(--font-sm);
      color: #666666;

      img {
        margin-right: 10px;
      }
    }

    &__description {
      font-size: var(--font-md);
      color: var(--color-text);
      line-height: 25px;

      a {
        color: var(--color-text-highlight);
      }
    }
  }
</style>
