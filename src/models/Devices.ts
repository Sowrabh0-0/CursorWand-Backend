

export interface Device {
    id: string; 
    userId: string; 
    deviceName: string;
    deviceType: string;
    ipAddress: string;
    lastConnected: Date;
    status: string;
}
