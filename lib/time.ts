/**
 * MIT License
 * Copyright (c) 2020 Burhanuddin Ahmed
 */

import { Timezone } from "./timezone.ts";

const MINUTES_TO_MILISECOND = 60000;

class Time {
    private _t: string | undefined;
    public $d: Date;

    constructor (time: number | string | undefined = undefined) {
        this.$d = new Date();
        this._t = convertToString(time);
        this.parse(time);
    }

    toString () {
        return this.$d.toUTCString();
    }

    private parse (time: number | string | undefined) {
        if (time == undefined) {
            this.$d = parseDate()
        } else {
            this.$d = parseDate(time)
        }
    }

    public now () {
        this.$d = parseDateNow();
        return this;
    }

    public tz (timezone: string = 'utc') {
        const { _t } = this;
        if (timezone == 'utc') {
            this.$d = parseDate();
        } else {
            let t = new Timezone({
                timezone,
                time: _t
            });
            this.$d = new Date(t.exec().manipulated);
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

times.prototype = `${new Time()}`

export {
    times
};