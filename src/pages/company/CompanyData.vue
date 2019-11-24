<template lang="pug">
  .company-data
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    form
      InputField(
        id="companyName",
        label="Company Name",
        placeholder="Your Company Name"
      )
      InputField(
        id="companySpend",
        label="Company Spend",
        placeholder="$150,000"
      )
      InputField(
        id="companySpendAbility",
        label="Company Spend Ability",
        placeholder="$150,000 - $330,000"
      )
      TextArea(
        id="notes",
        label="Notes",
        placeholder="Good Tech Company"
      )
</template>

<script>
import InputField from 'Components/common/InputField.vue';
import TextArea from 'Components/common/TextArea.vue';

export default {
  components: {
    InputField,
    TextArea
  },
};
</script>

<style scoped lang="scss">
  .company-data {
    padding: 20px;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 5px;
    font-size: var(--font-md);
    color: var(--color-text);
    line-height: var(--line-height-md);

    form {
      
    }
  }
</style>
