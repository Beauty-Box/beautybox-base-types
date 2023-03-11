import { IServiceCatalog } from './IService';

export interface ICategoryBase {
    categoryID?: number;
    name: string;
    color: string;
}

export interface ICurrentCategory extends ICategoryBase {
    isHidden?: boolean;
    sort: number;
    index?: number;
}

export type IRecommendedCategory = ICategoryBase;

export type ICustomCategory = ICurrentCategory;

export interface ICategory extends ICurrentCategory {
    status: number;
    isEmpty: boolean;
    isOpen?: boolean;
    services?: IServiceCatalog[];
}

export interface ICategoryShort extends ICategoryBase {
    index: number;
    servicesCount: number;
    photo: string;

}

export default ICategory;
