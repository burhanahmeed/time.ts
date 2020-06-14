<!-- markdownlint-disable MD033 MD036 MD041 -->

<div align='center'>

![time.ts](https://raw.githubusercontent.com/burhanahmeed/time.ts/master/header.png)

![release](https://badgen.net/github/release/burhanahmeed/time.ts)
![tags](https://badgen.net/github/tags/burhanahmeed/time.ts)
![stars](https://badgen.net/github/stars/burhanahmeed/time.ts)
![license](https://badgen.net/github/license/burhanahmeed/time.ts)

</div>



#### Version: Time.ts v2.0.1
Please refers to [Time.ts v1.0.0](https://github.com/burhanahmeed/time.ts/tree/v1.0.0) if still using the old version.

**changelogs:**
- Add daylight saving time

## Deno
- [Deno.land third party module](https://deno.land/x/time.ts)


**From master branch**
```typescript
import { Time, timezone } from "https://deno.land/x/time.ts/mod.ts";
```

**More safe import**
```typescript
import { Time, timezone } from "https://denopkg.com/burhanahmeed/time.ts@v2.0.1/mod.ts";
```
or
```typescript
import { Time, timezone } from "https://deno.land/x/time.ts@v2.0.1/mod.ts";
```
or
```typescript
import { Time, timezone } from "https://denoland.id/x/time.ts@v2.0.1/mod.ts";
```

## API

Soon

## Example
Here is a basic example to get started with Time.ts

Check this out on [Example directory](https://github.com/burhanahmeed/time.ts/tree/master/example).
```typescript
import { Time } from "https://denopkg.com/burhanahmeed/time.ts@v2.0.1/mod.ts";

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

```
If you want to get the list of available timezone you can do like this.
```typescript
import { timezone } from "https://denopkg.com/burhanahmeed/time.ts@v2.0.1/mod.ts";

console.log(timezone)
/**
 * List of timezones
[
  {
    id: "Africa/Abidjan",
    country_code: "CI",
    offset: "+00:00",
    dst: "+00:00",
    text: "(GMT +00:00) Abidjan"
  },
  {
    id: "Africa/Accra",
    country_code: "GH",
    offset: "+00:00",
    dst: "+00:00",
    text: "(GMT +00:00) Accra"
  },
  {
    id: "Africa/Nairobi",
    country_code: "ET",
    offset: "+03:00",
    dst: "+03:00",
    text: "(GMT +03:00) Nairobi"
  },
  ....More
]
*/


```

## Contribution

If you feel you can help us to improve this project, do not hesitate to submit your pull request or just simply submit an issue.

## License

MIT License Copyright (c) 2020 Burhanuddin Ahmed
