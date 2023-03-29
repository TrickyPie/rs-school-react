const regionOptions = [
  { value: 'Asia' },
  { value: 'Africa' },
  { value: 'North America' },
  { value: 'South America' },
  { value: 'Antarctica' },
  { value: 'Europe' },
  { value: 'Australia' },
];

const selectData = {
  label: 'Choose your region:',
  name: 'region',
  options: regionOptions,
  classNameWrapper: 'form-region-wrapper',
  classNameLabel: 'form-region title',
  classNameSelect: 'form-region-select input',
  classNameOption: 'form-region-option text',
};

export default selectData;
