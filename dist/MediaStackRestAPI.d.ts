import { IRestAPI } from './types';
export default class MediaStackRestAPI implements IRestAPI {
    get<T>(endpoint: string): Promise<T>;
    post<T>(endpoint: string, data?: any): Promise<T>;
    delete<T>(endpoint: string): Promise<T>;
    put<T>(endpoint: string, data?: any): Promise<T>;
}
//# sourceMappingURL=MediaStackRestAPI.d.ts.map