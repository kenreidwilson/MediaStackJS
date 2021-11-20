import { Artist, Category, GenericSearchQuery, IRestAPI, SearchResponse, Tag } from '../types';
import BaseRepository from './BaseRepository';
export default abstract class GenericRepository<TEntity extends Tag | Category | Artist> extends BaseRepository<TEntity> {
    baseEndpoint: string;
    baseURL: string;
    constructor(api: IRestAPI, baseEndpoint: string);
    add(e: TEntity): Promise<TEntity>;
    get(id: number): Promise<TEntity>;
    search(query: GenericSearchQuery): Promise<SearchResponse<TEntity>>;
    update(e: TEntity): Promise<TEntity>;
    delete(e: TEntity): Promise<void>;
}
//# sourceMappingURL=GenericRepository.d.ts.map