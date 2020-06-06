import { Time, timezone } from "https://denopkg.com/burhanahmeed/time.ts/mod.ts";

console.log('Jakarta Timezone: ', new Time().timezone('Asia/Jakarta'))
console.log('Singapore Timezone: ', new Time().timezone('Asia/Singapore'))

console.log('Jakarta Timezone: ', new Time('2020-06-06 14:33:12').timezone('Asia/Jakarta'))
console.log('Singapore Timezone: ', new Time('2020-06-06 14:33:12').timezone('Asia/Singapore'))

console.log('UTC timezone: ', new Time().utc)
console.log('Now timezone: ', new Time().now)

console.log(timezone)