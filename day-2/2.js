// @flow

import fs from 'fs';

export function replaceAlgo(intCode: number[]): number[] {
  let iter = 0;
  while (iter < intCode.length) {
    if (intCode[iter] === 1) {
      // eslint-disable-next-line no-param-reassign
      intCode[intCode[iter + 3]] =
        intCode[intCode[iter + 1]] + intCode[intCode[iter + 2]];
      iter += 4;
      // eslint-disable-next-line no-continue
      continue;
    }

    if (intCode[iter] === 2) {
      // eslint-disable-next-line no-param-reassign
      intCode[intCode[iter + 3]] =
        intCode[intCode[iter + 1]] * intCode[intCode[iter + 2]];
      iter += 4;
      // eslint-disable-next-line no-continue
      continue;
    }

    if (intCode[iter] === 99) break;

    iter += 4;
    // throw new Error(`Unknown code (${intCode[iter]}) at position: ${iter}`);
  }

  return intCode;
}

/* eslint-disable */
function findNounAndVerb(intCode: number[]) {
  let cloned, noun, verb;
  for (noun = 0; noun < 100; noun++) {
    for (verb = 0; verb < 100; verb++) {
      cloned = [...intCode];
      cloned[1] = noun;
      cloned[2] = verb;

      const result = replaceAlgo(cloned);
      if (result[0] === 19690720) {
        return 100 * noun + verb;
      }
    }
  }
  /* eslint-enable */

  return 'Not found';
}

const content = fs.readFileSync(`${__dirname}/data`, 'utf8');
const intCode = content.split(',').map((c) => parseInt(c, 10));
const result = findNounAndVerb(intCode);
console.log('result = ', result);
