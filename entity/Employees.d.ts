import { IEmployeeListItem } from '../types/employees';
export * from '../types/employees';


interface IEmployeeResponse {
    count: number;
    employees: IEmployeeListItem[];
}

export interface IEmployeePayload {
    filters?: Record<string, any>;
    skip?: number;
}

declare class Employees {
    constructor();
    employees: (payload?: IEmployeePayload) => Promise<IEmployeeResponse>;
}

export { Employees };