const inputsData = [
  {
    id: 'firstName',
    label: 'First name',
    type: 'text',
    name: 'fName',
    required: true,
    refName: 'firstName',
    error: 'First name must contain at least 3 characters and start with a capital letter',
  },
  {
    id: 'lastName',
    label: 'Last name',
    type: 'text',
    name: 'lName',
    required: true,
    refName: 'lastName',
    error: 'Last name must contain at least 3 characters and start with a capital letter',
  },
];

export default inputsData;
