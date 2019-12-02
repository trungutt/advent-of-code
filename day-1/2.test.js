// @flow

import { getFuelByMass } from './2';

test('sayHello', () => {
  expect(getFuelByMass(14)).toBe(2);
  expect(getFuelByMass(1969)).toBe(966);
  expect(getFuelByMass(100756)).toBe(50346);
});
