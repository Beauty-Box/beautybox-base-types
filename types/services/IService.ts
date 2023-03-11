export interface IServiceBase {
    id?: number | null;
    serviceID?: number;
    title: string;
    price?: number;
    time?: number; // in minutes
}

export interface IService extends IServiceBase {
    customerTitle: string | null;
}

export interface IServiceInfo extends IService {
    isOnline: boolean;
    status: boolean;
    active?: boolean;
}

export interface IServiceListItem extends IService {
    category: {
        categoryID: number;
        name: string;
    };
}

export interface IServiceCatalog extends IService {
    description: string;
    sort: number;
    status: boolean;
    isOnline: boolean;
    active: boolean;
    photos: string[];
    photosCount: number;
}

export interface IServicesList {
    count: number;
    services: IServiceListItem[];
}

export interface IServiceToCreate extends IServiceBase {
    categoryID: number;
}

export default IService;
