import { Api } from '../api';

declare function useApi(): { provider: Api };

declare const request: {
    install(app: any, ...options: unknown[]): any;
}

declare const requestV3: {
    install(app: any, ...options: unknown[]): any;
}

export { useApi, requestV3 };
export default request;