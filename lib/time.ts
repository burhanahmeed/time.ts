/**
 * MIT License
 * Copyright (c) 2020 Burhanuddin Ahmed
 */


import { timezone as List } from "./api.ts";
import { privateReturn } from "./type.ts";

const MINUTES_TO_MILISECOND = 60000;

export class Time {
    public now: string;
    public utc:string;
    private time:string | undefined;

    constructor (time?: string) {
        this.time = time;
        this.now = this.timezone();
        this.utc = new Date().toISOString();
    }

    public timezone (timezone:string | null = null): string {
        let getDifferenceToUtcInMilisec = new Date().getTimezoneOffset() * MINUTES_TO_MILISECOND;
        let getUTCMilisecond = new Date().getTime();
        if (this.time) {
            getUTCMilisecond = new Date(this.time).getTime();
        }

        if (!timezone) {
            // return current system datetime
            return new Date(getUTCMilisecond - getDifferenceToUtcInMilisec).toISOString();
        }

        if (timezone == 'UTC') {
            return this.utc;
        }

        let addedtime = this.parseText(timezone);
        if (!addedtime.status) {
            throw addedtime.text;
        }
        
        // return manipulated timezone based on calculation additional / differentiation time
        return new Date(getUTCMilisecond + Number(addedtime.text)).toISOString();
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