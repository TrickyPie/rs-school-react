import { FieldErrors } from 'react-hook-form';

type FormResult = {
  fName: string;
  lName: string;
  birthday: string;
  avatar?: string;
  region: string;
  promo?: string;
  dream?: string;
};

export default FormResult;
