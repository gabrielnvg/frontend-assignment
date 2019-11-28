<template lang="pug">
  .text-area-field
    label(:for="id") {{ label }}
    textarea(
      :value="value",
      @input="$emit('input', $event.target.value)",
      :id="id",
      :name="id",
      :class="{ 'has-error': hasError }",
      :placeholder="`e.g. ${placeholder}`"
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
  .text-area-field {
    label {
      margin-top: 30px;
      margin-bottom: 5px;
      width: 100%;
      display: block;
      font-size: var(--font-sm);
      color: #B1B1B1;
      text-transform: uppercase;
    }

    textarea {
      padding: 10px 15px;
      width: 100%;
      height: 160px;
      display: block;
      border: 1px solid var(--color-border);
      border-radius: 5px;
      font-size: var(--font-md);
      color: var(--color-text);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
      resize: none;
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
