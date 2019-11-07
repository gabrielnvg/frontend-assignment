<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
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
