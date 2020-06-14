export interface privateReturn {
    status: boolean,
    text: string
}

// export interface TimeType {
//     time?: string
// }

export interface TimezoneType {
    time?: string,
    timezone?: string
}

export interface IDSTCheck {
    id: string,
    country_code: string,
    offset: string,
    dst: string,
    text: string
}

// export interface TimeObject {
//     toString: Function,
//     current: string,
//     tz: Function
// }