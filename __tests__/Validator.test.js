import Validator from '../src/index.js';

test('Validator', () => {
  const v = new Validator();
  const schema = v.string();

  expect(schema.isValid('')).toBe(true);
  expect(schema.isValid(null)).toBe(true);
  expect(schema.isValid(undefined)).toBe(true);

  schema.required();

  expect(schema.isValid('what does the fox say')).toBe(true);
  expect(schema.isValid('hexlet')).toBe(true);
  expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid('')).toBe(false);
  expect(schema.contains('what').isValid('what does the fox say')).toBe(true);
  expect(schema.contains('whatthe').isValid('what does the fox say')).toBe(false);
  expect(schema.isValid('what does the fox say')).toBe(false);
});

test('Validator', () => {
  const v = new Validator();
  const schema = v.string();

  schema.required();

  expect(schema.minLength(10).minLength(4).isValid('Hexlet')).toBe(true);
});
