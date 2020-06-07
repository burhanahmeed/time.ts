/**
 * MIT License
 * Copyright (c) 2020 Burhanuddin Ahmed
 */

import { Timezone } from "./timezone.ts";
import { tzType } from "./type.ts";

class Time extends Timezone {
    constructor ({timezone, time}: tzType) {
        super({timezone, time});
    }

    public timenow(): string | Date {
       this.now(); 
       return this.manipulated;
    }


    
}

function time (time: string | undefined = undefined) {
    let t = new Time({ time: time });
    if (!time) {
        return t.timenow();
    }
    return 
}