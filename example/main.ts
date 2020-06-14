import { time } from "../mod.ts";

console.log(time())

console.log(`${time().tz('asia/singapore')}`)

console.log(new Date())