<template lang="pug">
  #app
    TheHeader
    .main-container
      router-view
    TheFooter
</template>

<script>
import TheHeader from 'Components/common/TheHeader.vue'
import TheFooter from 'Components/common/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>
