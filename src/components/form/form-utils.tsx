import FormResult from 'pages/page-form/form-type';

export type error = {
  id: string;
  error: string;
  validate: boolean;
};

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
