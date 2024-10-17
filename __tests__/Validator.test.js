import Validator from '../src/index.js';

test('Cart', () => {
  const v = new Validator();
  const schema = v.string();
  expect(schema.isValid('')).toBe(true);
});
