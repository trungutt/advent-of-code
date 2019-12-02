// @flow

import { getFuelByMass } from './1';

test('sayHello', () => {
  expect(getFuelByMass(12)).toBe(2);
  expect(getFuelByMass(14)).toBe(2);
});
