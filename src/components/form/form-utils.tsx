export const validateCapitalize = (name: string): string | boolean => {
  const trimmedName = name.trim();
  return (
    trimmedName.charAt(0) === trimmedName.charAt(0).toUpperCase() ||
    'Name must start with a capital letter'
  );
};

export const validateLang = (name: string): string | boolean => {
  const regex = /^[A-Z][a-z]{2,}$/;
  return regex.test(name) || 'Name must contain at least 3 characters and be on english';
};

export const validateNotFutureDate = (value: string): string | boolean => {
  const selectedDate = new Date(value);
  const currentDate = new Date();
  return (
    selectedDate <= currentDate ||
    `Date must not be greater than the current one (${currentDate.toLocaleDateString()})`
  );
};

export const validateNotEmpty = (value: string): string | boolean => {
  return value !== '' || 'Please select a valid date';
};

export const validateFileType = (file: FileList | null): boolean | string => {
  const selectedFile = file?.[0];
  return (
    ['image/png', 'image/jpeg', 'image/jpg'].includes(selectedFile?.type || '') ||
    'File should be png or jpeg'
  );
};
