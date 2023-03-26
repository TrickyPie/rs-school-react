import FormResult from 'pages/page-form/form-type';
import {
  validateAll,
  validateName,
  validateDate,
  validateFile,
  validateNotEmpty,
  getInitial,
} from '../components/form/form-utils';

describe('Function validateAll', () => {
  it('returns correct result with valid inputs', () => {
    const result: FormResult = {
      fName: 'Anastasia',
      lName: 'Klimova',
      birthday: '1991-01-29',
      region: 'Europe',
      promo: 'yes',
      dream: 'To live in Portugal',
    };
    const file = new File([''], 'img.jpg', { type: 'image/jpeg' });
    const { validities, error } = validateAll(result, file);

    expect(validities.firstName).toBe(true);
    expect(validities.lastName).toBe(true);
    expect(validities.avatar).toBe(true);
    expect(validities.birthDate).toBe(true);
    expect(validities.avatar).toBe(true);
    expect(validities.select).toBe(true);
    expect(validities.checkbox).toBe(true);
    expect(validities.radio).toBe(true);
    expect(error).toBe(false);
  });

  it('returns correct result with invalid inputs', () => {
    const result: FormResult = {
      fName: 'a',
      lName: 'b',
      birthday: '2077-01-01',
      region: '',
      promo: '',
      dream: '',
    };
    const file = null;
    const { validities, error } = validateAll(result, file);

    expect(validities.firstName).toBe(false);
    expect(validities.lastName).toBe(false);
    expect(validities.avatar).toBe(false);
    expect(validities.birthDate).toBe(false);
    expect(validities.avatar).toBe(false);
    expect(validities.select).toBe(false);
    expect(validities.checkbox).toBe(false);
    expect(validities.radio).toBe(false);
    expect(error).toBe(true);
  });
});

describe('Function validateName', () => {
  it('returns true for valid name', () => {
    const name = 'Ivan';
    const result = validateName(name);
    expect(result).toBe(true);
  });

  it('returns false for name that starts with a lowercase letter', () => {
    const name = 'ivan';
    const result = validateName(name);
    expect(result).toBe(false);
  });

  it('returns false for empty name', () => {
    const name = '';
    const result = validateName(name);
    expect(result).toBe(false);
  });

  it('returns false for name shorter than 3 letters', () => {
    const name = 'Iv';
    const result = validateName(name);
    expect(result).toBe(false);
  });
});

describe('Function validateDate', () => {
  it('returns true for valid date', () => {
    const date = '1991-01-29';
    const result = validateDate(date);
    expect(result).toBe(true);
  });

  it('returns false for date from future', () => {
    const date = '2077-01-01';
    const result = validateDate(date);
    expect(result).toBe(false);
  });
});

describe('Function validateFile', () => {
  it('returns true for valid file', () => {
    const file = new File([''], 'it.jpg', { type: 'image/jpeg' });
    const result = validateFile(file);
    expect(result).toBe(true);
  });

  it('returns false for invalid types of file', () => {
    const file = new File([''], 'it.txt', { type: 'text/plain' });
    const result = validateFile(file);
    expect(result).toBe(false);
  });

  it('returns false for null file', () => {
    const file = null;
    const result = validateFile(file);
    expect(result).toBe(false);
  });
});

describe('Function validateNotEmpty', () => {
  it('returns true for not empty text', () => {
    const text = 'Some text';
    const result = validateNotEmpty(text);
    expect(result).toBe(true);
  });

  it('returns false for empty text', () => {
    const text = '';
    const result = validateNotEmpty(text);
    expect(result).toBe(false);
  });
});

describe('Function getInitial', () => {
  it('returns correct initial validities', () => {
    const result = getInitial();
    expect(result.firstName).toBe(true);
    expect(result.lastName).toBe(true);
    expect(result.avatar).toBe(true);
    expect(result.birthDate).toBe(true);
    expect(result.select).toBe(true);
    expect(result.checkbox).toBe(true);
    expect(result.radio).toBe(true);
  });
});
