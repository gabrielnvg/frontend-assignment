<template lang="pug">
  .company-page
    TheCompanyPageHeader(
      image="squares.png",
      name="Microsoft",
      location="Redmond, WA USA",
      description="At Microsoft, our mission is to empower every person and every organization on the planet to achieve more.<br>Our mission is grounded in both the world in which we live and the future we strive to create.",
      view-more="#/company/page"
    )
    .company-page__cards-container
      CompanyCard(title="Card title 1") Card content 1
      CompanyCard(title="Card title 2") Card content 2
      CompanyCard(title="Card title 3") Card content 3
      CompanyCard(title="Card title 4") Card content 4
      CompanyCard(title="Card title 5") Card content 5
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import TheCompanyPageHeader from 'Components/company/TheCompanyPageHeader.vue';
import CompanyCard from 'Components/company/CompanyCard.vue';

export default {
  components: {
    TheCompanyPageHeader,
    CompanyCard
  },
  computed: {
    ...mapState([
      'mainContainerStyle'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_MAIN_CONTAINER_STYLE',
      'RESET_MAIN_CONTAINER_STYLE'
    ]),
  },
  mounted() {
    this.SET_MAIN_CONTAINER_STYLE('#E7E9F3');
  },
  destroyed() {
    this.RESET_MAIN_CONTAINER_STYLE();
  }
};
</script>

<style scoped lang="scss">
  .company-page {
    &__cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      grid-gap: 15px;
    }
  }
</style>
