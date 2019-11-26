<template lang="pug">
  .input-field
    label(:for="id") {{ label }}
    input(
      :value="value",
      @input="$emit('input', $event.target.value)",
      type="text",
      :id="id",
      :name="id",
      :class="{ 'has-error': hasError }",
      :placeholder="`e.g. ${placeholder}`",
      @blur="$emit('blur', $event.target.value)"
    )
    .input-error-message(v-if="hasError") {{ errorMessage }}
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    hasError: {
      type: Boolean
    },
    errorMessage: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
  .input-field {
    label {
      margin-top: 30px;
      margin-bottom: 5px;
      max-width: 335px;
      display: block;
      font-size: var(--font-sm);
      color: #B1B1B1;
      text-transform: uppercase;
    }

    input {
      padding: 10px 15px;
      width: 100%;
      height: 40px;
      display: block;
      border: 1px solid var(--color-border);
      border-radius: 5px;
      font-size: var(--font-md);
      color: var(--color-text);
      outline: none;

      &::placeholder {
        color: #CED2E0;
      }

      &.has-error {
        border-color: #D8000C;
      }
    }

    .input-error-message {
      margin-top: 5px;
      color: #D8000C;
    }
  }
</style>
