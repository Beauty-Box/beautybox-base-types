import { IEmployeeBase } from '../types/employees';

interface IEmployeeResponse {
    count: number;
    employees: IEmployeeBase[];
}


declare class Employees {
    constructor();
    employees: () => Promise<IEmployeeResponse>;
}

export { Employees };