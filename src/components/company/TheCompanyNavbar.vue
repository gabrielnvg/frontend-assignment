<template lang="pug">
  .company-navbar
    ol
      router-link(tag="li", :to="'/company/data'") Company Data
      router-link(tag="li", :to="'/company/table'") Company Table
      router-link(tag="li", :to="'/company/page'") Company Page
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
  .company-navbar {
    width: 225px;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 5px;
    font-size: var(--text-sm);
    font-weight: bold;
    text-transform: uppercase;
    color: var(--color-text-highlight);

     ol {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        padding: 25px 20px;
        cursor: pointer;

        &:not(:last-of-type) {
          border-bottom: 1px solid var(--color-border);
        }
        
        &:hover {
          color: #7585C4;
        }

        &.router-link-active {
          box-shadow: inset 3px 0px 0px 0px #344279;
        }
      }
    }
  }
</style>
