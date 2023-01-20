import Person from "./Person";

interface IClientBids {
    count: number;
    past: Array<object>;
    coming: Array<object>;
}

interface IClientProduct {
    id: number;
    saleID: number;
    name: string;
    price: number;
    quantity: number;
    createdAt: string;
}

interface IClientProducts {
    count: number;
    products: Array<IClientProduct>;
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
    products: IClientProducts;
    totalVisits: IClientTotalVisits;
    profit: number;
    reviews: IClientReviews;
    clientTypeID: number;
    blockingOnline: number;
    notificationsDisabled: number;
    show: () => Promise<void>;
    getBids: () => Promise<void>;
    getProducts: () => Promise<void>;
    getAnalytics: () => Promise<void>;
    update: () => Promise<void>;
    create: () => Promise<void>;
    updateFields: (client: Partial<Client>) => Promise<void>;
}

export { Client, IClientProduct };

export default Client;