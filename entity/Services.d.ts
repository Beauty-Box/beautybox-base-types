export * from '../types/services';

import { ICategory, ICategoryShort, IRecommendedCategory, ICategoryBase, IServiceToCreate, IServiceCatalog, IServicesList, IServiceInfo } from '../types/services';
import { IErrors } from '../api';


declare class Categories {
    constructor();
    getCategories: ({}: { query?: Record<string, any> }) => Promise<ICategory[] | IErrors>;
    getCategoriesShort: () => Promise<ICategoryShort[]>;
    getRecommendedCategories: () => Promise<IRecommendedCategory[]>;
    saveCategories: (data: ICategoryBase[]) => Promise<ICategory[]>;
    getCategoryInfo: (categoryID: number) => Promise<ICategory>;
    updateCategory: (categoryID: number, data: ICategoryBase) => Promise<string | void>;
    deleteCategory: (categoryID: number) => Promise<void>;
    saveNewCustomCategory: (data: ICategoryBase[]) => Promise<ICategory[]>;
}

declare class Services {
    constructor();
    getServices: (categoryID: number) => Promise<IServiceCatalog[]>;
    getServicesList: ({}: { skip?: number; filters?: Record<string, any> }) => Promise<IServicesList>;
    saveServices: (data: IServiceToCreate[]) => Promise<void>;
}

declare class Service {
    constructor(id?: number);
    info: IServiceInfo;
    getInfo: () => Promise<IServiceInfo>;
    edit: () => Promise<void>;
    update: (serviceID: number, data: Record<string, any>) => Promise<void>;
    delete: (serviceID: number) => Promise<void>;
}

export { Categories, Services, Service };