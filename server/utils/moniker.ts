import fs from 'fs';
import { resolveShard } from './resolveShard';

let adjectives = fs
  .readFileSync(process.cwd() + '/words/adjectives.txt')
  .toString()
  .split('\n');
const nouns = fs
  .readFileSync(process.cwd() + '/words/nouns.txt')
  .toString()
  .split('\n');
const verbs = fs
  .readFileSync(process.cwd() + '/words/verbs.txt')
  .toString()
  .split('\n');
const randomElement = (array: string[]) =>
  array[Math.floor(Math.random() * array.length)];

// export function makeRoomName(shard: number | undefined) {
//   let filteredAdjectives = adjectives;
//   if (shard) {
//     // Filter the adjective list by shard
//     filteredAdjectives = adjectives.filter(
//       (adj) => resolveShard(adj) === Number(shard),
//     );
//   }
//   const adjective = randomElement(filteredAdjectives);
//   const noun = randomElement(nouns);
//   const verb = randomElement(verbs);
//   return `${adjective}-${noun}-${verb}`;
// }

export function makeRoomName(shard: number | undefined) {
  let number = Math.floor(100000 + Math.random() * 900000);
  if (shard) {
    number = Math.floor(100000 + Number(shard) * 100000);
  }
  return `${number}`;
}

export function makeUserName() {
  return `${capFirst(randomElement(nouns))} ${capFirst(
    randomElement(adjectives),
  )}`;
}

function capFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
