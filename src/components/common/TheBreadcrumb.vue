<template lang="pug">
  ul.breadcrumbs
    li(v-for="(breadcrumb, i) of breadcrumbs", :key="`breadcrumb-${i}`")
      router-link(:to="breadcrumb.href")
        | {{ breadcrumb.text }}
</template>

<script>
export default {
  data: () => ({
    breadcrumbs: []
  }),
  methods: {
    setBreadcrumbs() {
      this.breadcrumbs = this.$route.meta.breadcrumbs;
    }
  },
  watch: {
    $route() {
      this.setBreadcrumbs();
    }
  },
  beforeMount() {
    this.setBreadcrumbs();
  }
};
</script>

<style scoped lang="scss">
  .breadcrumbs {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: inline;
      color: #979193;

      &:not(:last-child) {
        &:after {
          content: '\00a0\00a0\00a0\00a0/\00a0\00a0\00a0\00a0';
        }

        a:hover {
          color: #b5afb1;
        }
      }

      &:last-child {
        a {
          cursor: initial;
        }
      }
      
      a {
        color: inherit;
        text-transform: uppercase;
        text-decoration: none;
      }
    }
  }
</style>
