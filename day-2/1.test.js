// @flow

import { replaceAlgo } from './1';

test('replaceAlgo', () => {
  expect(replaceAlgo([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99]);
  expect(replaceAlgo([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99]);
  expect(replaceAlgo([2, 4, 4, 5, 99, 0])).toEqual([2, 4, 4, 5, 99, 9801]);
  expect(replaceAlgo([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([
    30,
    1,
    1,
    4,
    2,
    5,
    6,
    0,
    99,
  ]);
});
