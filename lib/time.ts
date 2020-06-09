/**
 * MIT License
 * Copyright (c) 2020 Burhanuddin Ahmed
 */

import { Timezone } from "./timezone.ts";
import { TimeType } from "./type.ts";

const MINUTES_TO_MILISECOND = 60000;

class Time {
    public utc: string;
    public now: string;
    public _final: string;

    private _t: string | undefined;

    constructor ({ time }: TimeType) {
        this.utc = new Date().toString();
        this._t = time;
        this._final = '';
        this.now = this.getServerTime();
    }

    toString () {
        return this._final;
    }

    private getServerTime () {
        let getDifferenceToUtcInMilisec = new Date().getTimezoneOffset() * MINUTES_TO_MILISECOND;
        let getUTCMilisecond = new Date().getTime();
        if (this._t) {
            getUTCMilisecond = new Date(this._t).getTime();
        }
        return new Date(getUTCMilisecond - getDifferenceToUtcInMilisec).toISOString();
    }

    public tz (timezone: string = 'utc') {
        if (timezone == 'utc') {
            this._final = this.utc;
        } else {
            let t = new Timezone({
                timezone,
                time: this._t
            });
            this._final = t.exec().manipulated;
        }
        return this;
    }
    
}
/**
 * 
 * @param time 
 * time() without any parameter will return datetime now on UTC time
 */
export function times (time: string | undefined = undefined) {
    // if (undefined == times().now) {
    //     return { now: 'a' }
    // }
    let t = '';

    let tclass = new Time({ time });

    if (time) {
        t = `${tclass}`;
    } else {

    }

    return t
}