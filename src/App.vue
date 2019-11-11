<template lang="pug">
  #app
    TheHeader
    .main-container
      TheBreadcrumb
      router-view
    TheFooter
</template>

<script>
import TheHeader from 'Components/common/TheHeader.vue'
import TheBreadcrumb from 'Components/common/TheBreadcrumb.vue'
import TheFooter from 'Components/common/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheBreadcrumb,
    TheFooter,
  }
}
</script>
