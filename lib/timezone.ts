/**
 * MIT License
 * Copyright (c) 2020 Burhanuddin Ahmed
 */

import { timezone as List } from "./api.ts";
import { privateReturn, tzType } from "./type.ts";

const MINUTES_TO_MILISECOND = 60000;

export class Timezone {
    public manipulated: Date | string;
    private timezone: string | undefined;
    private userTime: string | undefined;
    constructor ({timezone, time}: tzType) {
        this.userTime = time;
        this.manipulated = '';
        this.timezone = timezone;
    }

    public now () {
        this.manipulated = new Date().toISOString();
        return this;
    }

    public systemNow () {
        let getDifferenceToUtcInMilisec = new Date().getTimezoneOffset() * MINUTES_TO_MILISECOND;
        let getUTCMilisecond = new Date().getTime();
        this.manipulated = new Date(getUTCMilisecond - getDifferenceToUtcInMilisec).toISOString();
        return this;
    }

    public exec (): this {
        let getUTCMilisecond = new Date().getTime();
        if (this.userTime) {
            getUTCMilisecond = new Date(this.userTime).getTime();
        }

        // if (!timezone) {
        //     // return current system datetime
        //     return new Date(getUTCMilisecond - getDifferenceToUtcInMilisec).toISOString();
        // }
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
        let splittedObject = obj.text.split(' ');
        let removeText = splittedObject[0]
                        .replace('(', '')
                        .replace(')', '')
                        .replace('GMT', '');
        let getTimezoneHours = removeText.split(':');
        let getMinutes = ((Number(getTimezoneHours[0]) * 60) + Number(getTimezoneHours[1])) * MINUTES_TO_MILISECOND;
        return {
            status: true,
            text: `${getMinutes}`
        }
    }
}