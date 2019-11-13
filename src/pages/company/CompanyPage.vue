<template lang="pug">
  #company-page
    h2 Company Page
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
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
}
</script>
