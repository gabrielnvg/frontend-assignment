<template lang="pug">
  #app
    TheHeader
    main(v-bind:style="mainContainerStyle")
      .main-container
        TheBreadcrumb
        router-view
    TheFooter
</template>

<script>
import { mapState } from 'vuex';
import TheHeader from 'Components/common/TheHeader.vue';
import TheBreadcrumb from 'Components/common/TheBreadcrumb.vue';
import TheFooter from 'Components/common/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheBreadcrumb,
    TheFooter,
  },
  computed: {
    ...mapState([
      'mainContainerStyle'
    ])
  },
  mounted() {
    const headerHeight = document.querySelector('.the-header').offsetHeight;
    const footerHeight = document.querySelector('.the-footer').offsetHeight;
    const elMain = document.querySelector('main');

    elMain.style.minHeight = `calc(100vh - (${headerHeight} + ${footerHeight}))`;
  }
};
</script>
