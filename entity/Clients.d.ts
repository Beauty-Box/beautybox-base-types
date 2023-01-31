import Person from "./Person";
import VisitStatus from './VisitStatus';
import SaleState from './SaleState';

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

export interface IClientVisit {
    visitID: number;
    status: VisitStatus;
    date: string;
    comment: string;
    isOnline: boolean;
    bids: Array<IClientBidVisit>;
}

export interface IClientVisitsResponse {
    count: number;
    visits: Array<IClientVisit>;
}

interface IClientVisits {
    past: IClientVisitsResponse;
    coming: IClientVisitsResponse;
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

interface IClientSale {
    id: number | null;
    number: number;
    state: SaleState;
    textState: string;
    createdAt: string;
    sumPrice: number;
}

interface IClientSales {
    count: number;
    sales: Array<IClientSale>;
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
    sales: IClientSales;
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
    getSales: () => Promise<void>;
    getAnalytics: () => Promise<void>;
    update: () => Promise<void>;
    create: () => Promise<void>;
    updateFields: (client: Partial<Client>) => Promise<void>;
}

export { Client, IClientProduct, IClientVisit, IClientBidVisit };

export default Client;