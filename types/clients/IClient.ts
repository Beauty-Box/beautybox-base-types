export interface IClientAvatarStatus {
    text: string;
    icon: string;
    fill: string;
}

export interface IClient {
    clientID: number;
    name: string;
    birthday: string | null;
    phone: string;
    avatar: string | null;
    blockingOnline: 0 | 1;
    notificationsDisabled: boolean;
    mailingDisabled: boolean;
}



export default IClient;