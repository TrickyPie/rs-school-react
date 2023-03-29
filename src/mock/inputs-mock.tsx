const inputsData = [
  {
    id: 'firstName',
    label: 'First name',
    type: 'text',
    name: 'firstName',
    error: 'First name must contain at least 3 characters and start with a capital letter',
  },
  {
    id: 'lastName',
    label: 'Last name',
    type: 'text',
    name: 'lastName',
    error: 'Last name must contain at least 3 characters and start with a capital letter',
  },
  {
    id: 'avatar',
    label: 'Add avatar',
    type: 'file',
    name: 'avatar',
    error: 'Avatar is required and has type jpeg or png',
  },
  {
    id: 'birthDate',
    label: 'Birth date',
    type: 'date',
    name: 'birthDate',
    error: `Birthday is required and date mustn't be greater than the current one`,
  },
];

export default inputsData;
