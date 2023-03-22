import { IReviewsStatistic } from '../reviews/IReview';

export interface IEmployeeCategory {
    text: string;
    value: number;
}

export interface IEmployeeBase {
    userID: number;
    name: string;
    avatar?: string;
}

export interface IEmployee extends IEmployeeBase {
    phoneActive: number;
    associatePhone: string;
    isOnline: boolean;
    payrollRuleID: number | '';
    position: number;
    positionName: string;
    inviteLink: string;
    role: number;
    roleName: string;
    linkOnline: string;
}

export interface IEmployeeListItem extends IEmployee {
    employeeCategories?: IEmployeeCategory[];
    reviews: IReviewsStatistic;
    lastSchedule: string | null;
}


export default IEmployeeBase;