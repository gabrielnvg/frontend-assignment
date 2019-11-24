<template lang="pug">
  label
    | {{ label }}
    input(type="text", :id="id", :name="id", :placeholder="`e.g. ${placeholder}`")
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
  label {
    margin-top: 30px;
    max-width: 335px;
    display: block;
    font-size: var(--font-sm);
    color: #B1B1B1;
    text-transform: uppercase;

    input {
      padding: 10px 15px;
      width: 100%;
      height: 40px;
      display: block;
      border: 1px solid var(--color-border);
      border-radius: 5px;
      font-size: var(--font-md);
      color: var(--color-text);

      &::placeholder {
        color: #CED2E0;
      }
    }
  }
</style>
