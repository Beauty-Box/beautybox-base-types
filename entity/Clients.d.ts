import Person from "./Person";
import VisitStatus from './VisitStatus';

export const enum ClientVisitsType {
    COMING = 'coming',
    PAST = 'past',
}

interface IClientBids {
    count: number;
    past: Array<object>;
    coming: Array<object>;
}

interface IClientBidVisit {
    bidID: number;
    masterID: number;
    serviceID: number;
    timeFrom: string;
    timeTo: string;
    timeDuration: number; // in minutes
    price: number;
    masterName: string;
    serviceName: string;
}

interface IClientVisit {
    visitID: number;
    status: VisitStatus;
    date: string;
    comment: string;
    isOnline: boolean;
    bids: Array<IClientBidVisit>;
}

interface IClientVisits {
    past: {
        count: number;
        visits: Array<IClientVisit>;
    };
    coming: {
        count: number;
        visits: Array<IClientVisit>;
    };
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
    visits: IClientVisits;
    products: IClientProducts;
    totalVisits: IClientTotalVisits;
    profit: number;
    reviews: IClientReviews;
    clientTypeID: number;
    blockingOnline: number;
    notificationsDisabled: number;
    show: () => Promise<void>;
    getBids: () => Promise<void>;
    getVisitsV2: (type: ClientVisitsType) => Promise<void>;
    getProducts: () => Promise<void>;
    getAnalytics: () => Promise<void>;
    update: () => Promise<void>;
    create: () => Promise<void>;
    updateFields: (client: Partial<Client>) => Promise<void>;
}

export { Client, IClientProduct, IClientVisit, IClientBidVisit };

export default Client;