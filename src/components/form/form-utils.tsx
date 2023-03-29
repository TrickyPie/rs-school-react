import inputsData from '../../mock/inputs-mock';
import FormResult from '../../pages/page-form/form-type';

export type error = {
  id: string;
  error: string;
  validate: boolean;
};

export function validateAll(result: FormResult, file: File | null) {
  const validities = {
    firstName: validateName(result.fName),
    lastName: validateName(result.lName),
    avatar: validateFile(file || null),
    birthDate: validateDate(result.birthday),
    select: validateNotEmpty(result.region),
    checkbox: validateNotEmpty(result.promo || ''),
    radio: validateNotEmpty(result.dream || ''),
  };
  const error = !Object.values(validities).every((value: boolean): boolean => value);
  return { validities, error };
}

export function validateName(name: string): boolean {
  if (name === '' || name.length < 3 || name.charAt(0) !== name.charAt(0).toUpperCase()) {
    return false;
  }
  return true;
}

export function validateDate(date: string): boolean {
  const inputDate = new Date(date);
  const currentDate = new Date();
  return inputDate <= currentDate;
}

export function validateFile(file: File | null): boolean {
  const allowedTypes = ['image/jpeg', 'image/png'];
  if (!file || !allowedTypes.includes(file.type)) {
    return false;
  }
  return true;
}

export function validateNotEmpty(name: string): boolean {
  if (name === '') {
    return false;
  }
  return true;
}

export const getInitial = (): Record<string, boolean> => {
  const initialValidities: Record<string, boolean> = {};
  inputsData.forEach((input) => (initialValidities[input.name] = true));
  initialValidities.select = true;
  initialValidities.checkbox = true;
  initialValidities.radio = true;
  return initialValidities;
};
