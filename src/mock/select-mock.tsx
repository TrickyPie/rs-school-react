const regionOptions = [{ value: 'Lisbon' }, { value: 'Porto' }, { value: 'Algarve' }];

const regionSelect = {
  label: 'Choose your region:',
  name: 'region',
  options: regionOptions,
  classNameWrapper: 'form-region-wrapper',
  classNameLabel: 'form-region title',
  classNameSelect: 'form-region-select input',
  classNameOption: 'form-region-option text',
};

export default regionSelect;
