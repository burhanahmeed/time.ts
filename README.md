<!-- markdownlint-disable MD033 MD036 MD041 -->

<div align='center'>

![time.ts](https://raw.githubusercontent.com/burhanahmeed/time.ts/master/header.jpg)

![release](https://badgen.net/github/release/burhanahmeed/time.ts)
![tags](https://badgen.net/github/tags/burhanahmeed/time.ts)
![stars](https://badgen.net/github/stars/burhanahmeed/time.ts)
![license](https://badgen.net/github/license/burhanahmeed/time.ts)

</div>


## Time.ts version: v1.0.0
**Important Note**: there will be a major update on v2.0.0

## Deno
- [Deno.land third party module](https://deno.land/x/time.ts)

## Imports

**Version v1.0.0**

```typescript
import { Time, timezone } from "https://denopkg.com/burhanahmeed/time.ts@v1.0.0/mod.ts";
```
or
```typescript
import { Time, timezone } from "https://deno.land/x/time.ts@v1.0.0/mod.ts";
```
or
```typescript
import { Time, timezone } from "https://denoland.id/x/time.ts@v1.0.0/mod.ts";
```

## API

Soon

## Example
Here is a basic example to get started with Time.ts

Check this out on [Example directory](https://github.com/burhanahmeed/time.ts/tree/master/example).
```typescript
import { Time } from "https://denopkg.com/burhanahmeed/time.ts@v1.0.0/mod.ts";

console.log('Jakarta Timezone: ', new Time().timezone('Asia/Jakarta'))
//Jakarta Timezone:  2020-06-06T20:21:14.765Z

console.log('Singapore Timezone: ', new Time().timezone('Asia/Singapore'))
//Singapore Timezone:  2020-06-06T21:21:14.766Z

console.log('Jakarta Timezone: ', new Time('2020-06-06 14:33:12').timezone('Asia/Jakarta'))
//Jakarta Timezone:  2020-06-06T14:33:12.000Z

console.log('Singapore Timezone: ', new Time('2020-06-06 14:33:12').timezone('Asia/Singapore'))
//Singapore Timezone:  2020-06-06T15:33:12.000Z

console.log('UTC timezone: ', new Time().utc)
//UTC timezone:  2020-06-06T13:21:14.766Z

console.log('Now timezone: ', new Time().now)
//Now timezone:  2020-06-06T20:21:14.766Z

```
If you want to get the list of available timezone you can do like this.
```typescript
import { timezone } from "https://denopkg.com/burhanahmeed/time.ts@v1.0.0/mod.ts";

console.log(timezone)
/**
 * List of timezone (it is not ordered by alphabet)
[
  { text: "(GMT+00:00) Bissau", id: "Africa/Bissau" },
  { text: "(GMT+02:00) Athens", id: "Europe/Athens" },
  { text: "(GMT+05:00) Dushanbe", id: "Asia/Dushanbe" },
  { text: "(GMT+00:00) Faeroe", id: "Atlantic/Faroe" },
  { text: "(GMT+02:00) Helsinki", id: "Europe/Helsinki" },
  { text: "(GMT-04:30) Caracas", id: "America/Caracas" },
  { text: "(GMT-04:00) Manaus", id: "America/Manaus" },
  { text: "(GMT+00:00) Accra", id: "Africa/Accra" },
...
]
*/


```

## Contribution

If you feel you can help us to improve this project, do not hesitate to submit your pull request or just simply submit an issue.

## License

MIT License Copyright (c) 2020 Burhanuddin Ahmed
