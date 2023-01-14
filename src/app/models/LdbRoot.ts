export interface ContainerFormList {
    statusCode: number;
    statusMessage: string;
    trackingInfoList: TrackingInfoList[];
    containerNumber: string;
    refFlag: string;
    lastSerialNo: number;
    cntrSize: string;
    transportMode: string;
    cycleName: string;
}

export interface Message {
    text: string;
}

export interface Object {
    containerFormList: ContainerFormList[];
    result: string;
}

export interface LdbRoot {
    message: Message;
    objectType: string;
    object: Object;
}

export interface TrackingInfoList {
    serialNo: number;
    eventName: string;
    timestampTimezone: string;
    timeZoneAbvr: string;
    containerNumber: string;
    cntrCycleId: number;
    expectedEvent: boolean;
    timeInMs: any;
    cntrTrxnId: number;
    datatyp: string;
    isEmpty: string;
    dpdFlag: string;
    currentLocation: string;
    orgId: number | null;
    latitude: number | null;
    longitude: number | null;
    eventId: number | null;
    transportmode: string;
    type: string;
    division: string;
    treatIcd: boolean | null;
    superorg: string;
}