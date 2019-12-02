// @flow

import fs from 'fs';
import readline from 'readline';

export function getFuelByMass(module: number): number {
  return Math.floor(module / 3) - 2;
}

const moduleReader = readline.createInterface({
  input: fs.createReadStream(`${__dirname}/1-data`),
});

let total = 0;
moduleReader.on('line', (module) => {
  total += getFuelByMass(parseInt(module, 10));
});

moduleReader.on('close', () => {
  // eslint-disable-next-line no-console
  console.log('total = ', total);

  return false;
});
