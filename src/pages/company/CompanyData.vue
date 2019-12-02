<template lang="pug">
  .company-data
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    form(@submit="checkForm")
      InputField(
        v-model="valCompanyName",
        id="companyName",
        label="Company Name",
        placeholder="Your Company Name",
        :hasError="hasErrorCompanyName",
        errorMessage="Company Name field must not be empty.",
        @blur="validateCompanyName"
      )
      InputField(
        v-model="valCompanySpend",
        id="companySpend",
        label="Company Spend",
        placeholder="$150,000",
        :hasError="hasErrorCompanySpend",
        errorMessage="Company Spend field must contain only positive numbers.",
        @blur="validateCompanySpend"
      )
      InputField(
        v-model="valCompanySpendAbility",
        id="companySpendAbility",
        label="Company Spend Ability",
        placeholder="$150,000 - $330,000",
        :hasError="hasErrorCompanySpendAbility",
        errorMessage="Company Spend Ability must have two inputs and the first one (minimum spend) can’t be larger than the second one (maximum spend).",
        @blur="validateCompanySpendAbility"
      )
      TextArea(
        v-model="valNotes",
        id="notes",
        label="Notes",
        placeholder="Good Tech Company",
        @focus="showModal"
      )
      input(type="submit", style="display: none;")

    ModalBox(
      :show="showModalAdditionalNotes",
      id="modalAdditionalNotes",
      title="Additional notes",
      @click="hideModal"
    )
      TextArea(
        v-model="valNotes",
        id="additionalNotes",
        placeholder="Good Tech Company"
      )
</template>

<script>
import InputField from 'Components/common/InputField.vue';
import TextArea from 'Components/common/TextArea.vue';
import ModalBox from 'Components/common/ModalBox.vue';

const REGEX_ONLY_NUMBERS = /^\d+$/;
const REGEX_CURRENCY = /^\$\d+(,\d{3})*(\.\d*)?$/;
const REGEX_HIFEN_SPLITTER = /\s*-\s*/;

const elBody = document.querySelector('body');

const numberToCurrency = n => Number(n).toLocaleString(
  'en-US',
  {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }
);

export default {
  components: {
    InputField,
    TextArea,
    ModalBox
  },
  data() {
    return {
      valCompanyName: '',
      valCompanySpend: '',
      valCompanySpendAbility: '',
      valNotes: '',
      hasErrorCompanyName: false,
      hasErrorCompanySpend: false,
      hasErrorCompanySpendAbility: false,
      showModalAdditionalNotes: false
    };
  },
  methods: {
    validateCompanyName() {
      this.hasErrorCompanyName = !this.valCompanyName;
    },
    validateCompanySpend() {
      if (REGEX_ONLY_NUMBERS.test(this.valCompanySpend)) {
        this.valCompanySpend = numberToCurrency(this.valCompanySpend);
      }

      if (REGEX_CURRENCY.test(this.valCompanySpend)) {
        this.hasErrorCompanySpend = false;
      } else {
        this.hasErrorCompanySpend = true;
      }
    },
    validateCompanySpendAbility() {
      if (REGEX_HIFEN_SPLITTER.test(this.valCompanySpendAbility)) {
        const splittedValue = this.valCompanySpendAbility.split(REGEX_HIFEN_SPLITTER);
        let minimumSpend = splittedValue[0] || 0;
        let maximumSpend = splittedValue[1] || 0;

        if (REGEX_ONLY_NUMBERS.test(minimumSpend) && REGEX_ONLY_NUMBERS.test(maximumSpend)) {
          minimumSpend = numberToCurrency(minimumSpend);
          maximumSpend = numberToCurrency(maximumSpend);
          this.valCompanySpendAbility = `${minimumSpend} - ${maximumSpend}`;
        }

        if (REGEX_CURRENCY.test(minimumSpend) && REGEX_CURRENCY.test(maximumSpend) && minimumSpend <= maximumSpend) {
          this.hasErrorCompanySpendAbility = false;
        } else {
          this.hasErrorCompanySpendAbility = true;
        }
      } else {
        this.hasErrorCompanySpendAbility = true;
      }
    },
    checkForm(e) {
      this.validateCompanyName(this.valCompanyName);
      this.validateCompanySpend(this.valCompanySpend);
      this.validateCompanySpendAbility(this.valCompanySpendAbility);

      if (!this.hasErrorCompanyName && !this.hasErrorCompanySpend && !this.hasErrorCompanySpendAbility) {
        return true;
      }

      e.preventDefault();
    },
    showModal() {
      this.showModalAdditionalNotes = true;
      elBody.style.overflow = 'hidden';
    },
    hideModal() {
      this.showModalAdditionalNotes = false;
      elBody.style.overflow = 'auto';
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
