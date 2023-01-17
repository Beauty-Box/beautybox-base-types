import Person from "./Person";

interface IClientBids {
    count: number;
    past: Array<object>;
    coming: Array<object>;
}

interface IClientTotalVisits {
    all: number;
    new: number;
    done: number;
    canceled: number;
}

interface IClientReviews {
    average: number;
    total: number;
}

declare class Client extends Person {
    constructor(id: number | null);
    clientID?: number;
    bids: IClientBids;
    totalVisits: IClientTotalVisits;
    profit: number;
    reviews: IClientReviews;
    clientTypeID: number;
    blockingOnline: number;
    notificationsDisabled: number;
    show: () => Promise<void>;
    getBids: () => Promise<void>;
    getAnalytics: () => Promise<void>;
    update: () => Promise<void>;
    create: () => Promise<void>;
    updateFields: (client: Partial<Client>) => Promise<void>;
}

export { Client };

export default Client;