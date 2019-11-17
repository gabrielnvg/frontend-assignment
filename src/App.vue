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
  }
};
</script>
