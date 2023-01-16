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

declare class Client {
    bids: IClientBids;
    totalVisits: IClientTotalVisits;
    profit: number;
    show: () => Promise<void>;
    getBids: () => Promise<void>;
    getAnalytics: () => Promise<void>;
}

export { Client };

export default Client;