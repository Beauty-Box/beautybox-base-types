export interface IClientAvatarStatus {
    text: string;
    icon: string;
    fill: string;
}

export interface IClientReviews {
    total: number;
    average: number;
}

export interface IClient {
    clientID: number;
    name: string;
    birthday: string | null;
    phone: string | null;
    avatar: string | null;
    blockingOnline: 0 | 1;
    notificationsDisabled: boolean;
    mailingDisabled: boolean;
    lastVisit?: string | null;
    lastService?: string | null;
    reviews: IClientReviews;
}



export default IClient;