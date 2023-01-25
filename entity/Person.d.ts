import ApiConfig from "../api/ApiConfig";

export interface IBirthday {
    day: string;
    month: string;
    year: string;
} 

declare class Person {
    constructor(config: ApiConfig);
    name?: string;
    avatar?: string | null;
    phone?: string;
    email?: string;
    gender?: number;
    comment?: string;
    birthday?: IBirthday;
    createdAt?: string;
    readonly convertBirthday: string;
}

export { Person };

export default Person;