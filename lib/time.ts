/**
 * MIT License
 * Copyright (c) 2020 Burhanuddin Ahmed
 */

import { Timezone } from "./timezone.ts";

const MINUTES_TO_MILISECOND = 60000;

class Time {
    private _t: string | undefined;
    public t: Date;

    constructor (time: number | string | undefined = undefined) {
        this.t = new Date();
        this._t = convertToString(time);
        this.parse(time);
    }

    toString () {
        return this.t.toUTCString();
    }

    private parse (time: number | string | undefined) {
        if (time == undefined) {
            this.t = parseDate()
        } else {
            this.t = parseDate(time)
        }
    }

    public now () {
        this.t = parseDateNow();
        return this.t;
    }

    public tz (timezone: string = 'utc') {
        const { _t } = this;
        if (timezone == 'utc') {
            this.t = parseDate(_t);
        } else {
            let t = new Timezone({
                timezone,
                time: _t
            });
            this.t = new Date(t.exec().manipulated);
        }
        return this;
    }
    
}

function convertToString (time: any) {
    if (typeof time == 'undefined') return undefined;
    if (typeof time == 'string') return time;
    return new Date(time).toISOString();
}
function parseDate (cfg: string | number | Date | undefined = undefined) {
    if (cfg == undefined) return new Date(); //returns time now in UTC
    if (cfg == null) return new Date(NaN); //invalid time
    return new Date(cfg); //returns inputted time in UTC
}
function parseDateNow () {
    let getDifferenceToUtcInMilisec = new Date().getTimezoneOffset() * MINUTES_TO_MILISECOND;
    let getUTCMilisecond = new Date().getTime();

    return new Date(getUTCMilisecond - getDifferenceToUtcInMilisec); //returns date based on server time
}
/**
 * 
 * @param time 
 * time() without any parameter will return datetime now on UTC time
 */
function times (time: string | undefined = undefined) {
    return new Time(time);
}

type AnyFunction = (...args: any) => any;

const wrap = <Func extends AnyFunction>(
  fn: Func,
): ((...args: Parameters<Func>) => ReturnType<Func>) => {
  const wrappedFn = (...args: Parameters<Func>): ReturnType<Func> => {
      // your code here
      return fn(...Array.from(args)).toString();
  };
  return wrappedFn;
};

times.prototype = wrap<typeof times>(times);

export { times };