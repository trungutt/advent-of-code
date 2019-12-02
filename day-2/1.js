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

    throw new Error(`Unknown code (${intCode[iter]}) at position: ${iter}`);
  }

  return intCode;
}

const content = fs.readFileSync(`${__dirname}/data`, 'utf8');
const intCode = content.split(',').map((c) => parseInt(c, 10));
intCode[1] = 12;
intCode[2] = 2;

const result = replaceAlgo(intCode).join();
console.log('result = ', JSON.stringify(result, null, 2));
