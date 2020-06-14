import { time } from "../mod.ts";

console.log('Time now UTC: ',time().t)
//Time now UTC:  2020-06-14T06:19:37.483Z

console.log('Time now Singapore: ',time().tz('asia/singapore').t)
//Time now Singapore:  2020-06-14T14:19:37.483Z

console.log('Time now New York: ',time().tz('America/New_york').t)
//Time now New York:  2020-06-14T01:19:37.484Z

console.log('Time now Jakarta: ',time().tz('asia/Jakarta').t)
//Time now Jakarta:  2020-06-14T13:19:37.484Z

console.log('Time now UTC string: ',time().toString())
//Time now UTC string:  Sun, 14 Jun 2020 06:21:21 GMT

console.log('Time now UTC: ',time('2020-06-09 09:19').t)
//Time now UTC:  2020-06-09T02:19:00.000Z

console.log('Time now Singapore: ',time('2020-06-09 09:19').tz('asia/singapore').t)
//Time now Singapore:  2020-06-09T10:19:00.000Z

console.log('Time now UTC another way: ',time().tz('utc').t)
//Time now UTC another way:  2020-06-14T06:34:19.344Z

console.log('Time now of your server timezone: ',time().now())
//Time now of your server timezone:  2020-06-14T13:35:17.927Z