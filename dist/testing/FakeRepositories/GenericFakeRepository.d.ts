import { GenericSearchQuery, IKeyBasedAPI, SearchResponse } from '../../types';
import BaseFakeRepository from './BaseFakeRepository';
export default class GenericFakeRepository<TEntity extends {
    id: number;
    name: string;
}> extends BaseFakeRepository<TEntity> {
    constructor(api: IKeyBasedAPI, entitiesKey: string, defaultEntities?: TEntity[]);
    search(query: GenericSearchQuery): Promise<SearchResponse<TEntity>>;
    update(e: TEntity): Promise<TEntity>;
}
//# sourceMappingURL=GenericFakeRepository.d.ts.map