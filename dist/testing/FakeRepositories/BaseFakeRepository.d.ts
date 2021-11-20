import { IKeyBasedAPI, IRepository, SearchQuery, SearchResponse } from "../../types";
export default abstract class BaseFakeRepository<TEntity extends {
    id: number;
}, TSearchQuery = SearchQuery, TUpdateRequest = TEntity> implements IRepository<TEntity, TSearchQuery, TUpdateRequest> {
    API: IKeyBasedAPI;
    entitiesKey: string;
    constructor(api: IKeyBasedAPI, entitiesKey: string, defaultEntities?: TEntity[]);
    add(e: TEntity): Promise<TEntity>;
    get(id: number): Promise<TEntity>;
    abstract search(query: TSearchQuery): Promise<SearchResponse<TEntity>>;
    abstract update(e: TUpdateRequest): Promise<TEntity>;
    delete(e: TEntity): Promise<void>;
}
//# sourceMappingURL=BaseFakeRepository.d.ts.map