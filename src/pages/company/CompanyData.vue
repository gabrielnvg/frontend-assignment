<template lang="pug">
  .company-data
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    form(@submit="checkForm")
      InputField(
        :value="valCompanyName",
        id="companyName",
        label="Company Name",
        placeholder="Your Company Name",
        :hasError="hasErrorCompanyName",
        errorMessage="Company Name field must not be empty.",
        @blur="validateCompanyName"
      )
      InputField(
        :value="valCompanySpend",
        id="companySpend",
        label="Company Spend",
        placeholder="$150,000",
        :hasError="hasErrorCompanySpend",
        errorMessage="Company Spend field must be a positive number.",
        @blur="validateCompanySpend"
      )
      InputField(
        :value="valCompanySpendAbility",
        id="companySpendAbility",
        label="Company Spend Ability",
        placeholder="$150,000 - $330,000",
        :hasError="hasErrorCompanySpendAbility",
        errorMessage="Company Spend Ability must have two inputs, the first one is the Minimum spend and the second is Maximum spend.",
        @blur="validateCompanySpendAbility"
      )
      TextArea(
        :value="valNotes",
        id="notes",
        label="Notes",
        placeholder="Good Tech Company"
      )
      input(type="submit", style="display: none;")
</template>

<script>
import InputField from 'Components/common/InputField.vue';
import TextArea from 'Components/common/TextArea.vue';

export default {
  components: {
    InputField,
    TextArea
  },
  data: () => ({
    valCompanyName: '',
    valCompanySpend: '',
    valCompanySpendAbility: '',
    valNotes: '',
    hasErrorCompanyName: false,
    hasErrorCompanySpend: false,
    hasErrorCompanySpendAbility: false
  }),
  methods: {
    validateCompanyName(value) {
      this.valCompanyName = value;
      this.hasErrorCompanyName = !value;
    },
    validateCompanySpend(value) {
      this.valCompanySpend = value;
      // To-Do: Validate CompanySpend input.
      this.hasErrorCompanySpend = !value;
    },
    validateCompanySpendAbility(value) {
      this.valCompanySpendAbility = value;
      // To-Do: Validate CompanySpendAbility input.
      this.hasErrorCompanySpendAbility = !value;
    },
    checkForm(e) {
      this.validateCompanyName(this.valCompanyName);
      this.validateCompanySpend(this.valCompanySpend);
      this.validateCompanySpendAbility(this.valCompanySpendAbility);
      
      if (!this.hasErrorCompanyName && !this.hasErrorCompanySpend && !this.hasErrorCompanySpendAbility) {
        return true;
      }
      
      e.preventDefault();
    }
  }
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

    p {
      line-height: var(--line-height-md);
    }
  }
</style>
