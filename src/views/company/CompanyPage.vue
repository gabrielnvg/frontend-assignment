<template lang="pug">
  #company-page
    h2 Company Page
</template>

<script>
import { mapState, mapMutations } from 'vuex';

const elComputedStyle = getComputedStyle(document.documentElement);
let defaultMainContainerBackgroundColor = elComputedStyle.getPropertyValue('--color-page-bg');

export default {
  computed: {
    ...mapState([
      'mainContainerStyle'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_MAIN_CONTENT_STYLE'
    ]),
  },
  mounted() {
    this.SET_MAIN_CONTENT_STYLE('#E7E9F3');
  },
  destroyed() {
    this.SET_MAIN_CONTENT_STYLE(defaultMainContainerBackgroundColor);
  }
}
</script>
