import {
  validateCapitalize,
  validateFileType,
  validateLang,
  validateNotEmpty,
  validateNotFutureDate,
} from '../components/form/form-utils';

describe('validateCapitalize', () => {
  it('should return true for capitalized name', () => {
    const name = 'John';
    const result = validateCapitalize(name);
    expect(result).toBe(true);
  });

  it('should return error message for non-capitalized name', () => {
    const name = 'jane';
    const result = validateCapitalize(name);
    expect(result).toBe('Name must start with a capital letter');
  });
});

describe('validateLang', () => {
  it('should return true for valid English name', () => {
    const name = 'John';
    const result = validateLang(name);
    expect(result).toBe(true);
  });

  it('should return error message for non-English name', () => {
    const name = 'Jóhannes';
    const result = validateLang(name);
    expect(result).toBe('Name must contain at least 3 characters and be on english');
  });
});

describe('validateNotFutureDate', () => {
  it('should return true for past date', () => {
    const value = '2021-03-01';
    const result = validateNotFutureDate(value);
    expect(result).toBe(true);
  });

  it('should return error message for future date', () => {
    const value = '2025-04-01';
    const result = validateNotFutureDate(value);
    expect(result).toBe(
      `Date must not be greater than the current one (${new Date().toLocaleDateString()})`
    );
  });
});

describe('validateNotEmpty', () => {
  it('should return true for non-empty value', () => {
    const value = '2021-03-01';
    const result = validateNotEmpty(value);
    expect(result).toBe(true);
  });

  it('should return error message for empty value', () => {
    const value = '';
    const result = validateNotEmpty(value);
    expect(result).toBe('Please select a valid date');
  });
});

describe('validateFileType', () => {
  it('should return false if file list is null', () => {
    const fileList = null;
    const result = validateFileType(fileList);
    expect(result).toBe('File should be png or jpeg');
  });
});
