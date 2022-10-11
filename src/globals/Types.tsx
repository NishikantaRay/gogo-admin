

export type Segment = {
    name: string,
    size: number
}

export type PushNotification = {
    name?: string,
    title: string,
    subTitle?:string,
    content: string,
    sentDate?:Date
}