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

declare class Client {
    constructor(id: number | null);

    bids: IClientBids;
    totalVisits: IClientTotalVisits;
    profit: number;
    reviews: IClientReviews;
    show: () => Promise<void>;
    getBids: () => Promise<void>;
    getAnalytics: () => Promise<void>;
}

export { Client };

export default Client;