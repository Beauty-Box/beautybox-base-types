import { Api } from '../api';

declare function useApi(): { provider: Api };

declare const request: {
    install(app: any, ...options: unknown[]): any;
}

export { useApi };

export default request;