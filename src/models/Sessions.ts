


export interface Session {
    id: string;
    deviceId: string;
    startTime: Date;
    endTime?: Date;
    isActive: boolean;
}