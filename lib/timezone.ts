/**
 * MIT License
 * Copyright (c) 2020 Burhanuddin Ahmed
 * Update 14 June 2020 - add daylight saving time
 */

import { timezone as List } from "./new-api.ts";
import { privateReturn, TimezoneType, IDSTCheck } from "./type.ts";

const MINUTES_TO_MILISECOND = 60000;

export class Timezone {
    public manipulated: string;
    public userTime: string | undefined;
    private timezone: string | undefined;
    
    constructor ({timezone, time}: TimezoneType) {
        this.userTime = time;
        this.manipulated = '';
        this.timezone = timezone;
    }

    public exec () {
        let getUTCMilisecond = new Date().getTime();
        if (this.userTime) {
            getUTCMilisecond = new Date(this.userTime).getTime();
        }

        if (this.timezone) {
            let addedtime = this.parseText(this.timezone);
            if (!addedtime.status) {
                throw addedtime.text;
            }
            // return manipulated timezone based on calculation additional / differentiation time
            this.manipulated =  new Date(getUTCMilisecond + Number(addedtime.text)).toISOString();   
        }
        return this;
    }

    private parseText (textTimezone: string): privateReturn {
        let obj = List.find(el => el.id.toLowerCase() == textTimezone.toLocaleLowerCase());
        if (!obj) {
            return {
                status: false,
                text: 'timezone you entered is not compatible'
            };
        }
        let offsetNumber = this.dstChecker({ ...obj });
        let getTimezoneHours = offsetNumber.split(':');
        let firstNum = Number(getTimezoneHours[0]);
        let secondNum = Number(getTimezoneHours[0]) >= 0 ? 
                        Number(getTimezoneHours[1]) : 
                        (Number(getTimezoneHours[1]) * -1);
        let getMinutes = ((firstNum * 60) + secondNum) * MINUTES_TO_MILISECOND;
        return {
            status: true,
            text: `${getMinutes}`
        }
    }

    private dstChecker ({
        id,
        country_code,
        offset,
        dst,
        text
    }: IDSTCheck) {
        let us = {
            start: '2020-03-08 02:00',
            end: '2020-11-01 02:00'
        };
        let eu = {
            start: '2020-03-29 01:00',
            end: '2020-10-25 01:00'
        };
        let dateNow = new Date().getTime();
        if (dst === offset) {
            return offset;
        }
        let start, end;
        if (id.split('/')[0] == 'Europe') {
            start = eu.start;
            end = eu.end;
        } else {
            start = us.start;
            end = us.end;
        }
        if (
            dateNow > new Date(start).getTime() &&
            dateNow < new Date(end).getTime()
        ) {
            return dst;
        }
        return offset;
    }
}