import { mount } from '@vue/test-utils';
import CompanyData from './CompanyData.vue';

describe('CompanyData.vue inputs validations', () => {
  const wrapper = mount(CompanyData);

  const inputBlurValidation = (inputId, inputValue, isErrorExpected) => {
    wrapper.find(inputId).setValue(inputValue);
    wrapper.find(inputId).trigger('blur');
    expect(wrapper.find(`${inputId} + .input-error-message`).exists()).toBe(isErrorExpected);
  };

  test('CompanyName is being validated after a correct input', () => {
    inputBlurValidation('#companyName', 'Lorem Ipsum', false);
  });
  test('CompanyName error message is showing after a wrong input', () => {
    inputBlurValidation('#companyName', '', true);
  });

  test('CompanySpend is being validated after a correct input', () => {
    inputBlurValidation('#companySpend', '150000', false);
  });
  test('CompanySpend error message is showing after a wrong input', () => {
    inputBlurValidation('#companySpend', '', true);
  });

  test('CompanySpendAbility is being validated after a correct input', () => {
    inputBlurValidation('#companySpendAbility', '150000 - 330000', false);
  });
  test('CompanySpendAbility error message is showing after a wrong input', () => {
    inputBlurValidation('#companySpendAbility', '', true);
  });
});
