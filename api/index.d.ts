type IErrors = Record<string, Record<string, Array<object>>>;

interface IErrorResponse {
    errors?: IErrors;
}

declare class Api {
    constructor(baseUrl: string, module: string, token: string, secure?: boolean);
    get<Response>(
        url: string,
        data?: FormData | object | Array<any>,
        module?: string
    ): Promise<Response & IErrorResponse>;
    post<Response>(
        url: string,
        data?: FormData | object | Array<any>,
        module?: string
    ): Promise<Response & IErrorResponse>;
    put<Response>(
        url: string,
        data?: FormData | object | Array<any>,
        module?: string
    ): Promise<Response & IErrorResponse>;
    patch<Response>(
        url: string,
        data?: FormData | object | Array<any>,
        module?: string
    ): Promise<Response & IErrorResponse>;
    delete<Response>(
        url: string,
        data?: FormData | object | Array<any>,
        module?: string
    ): Promise<Response & IErrorResponse>;
}

export { Api, IErrorResponse, IErrors };
