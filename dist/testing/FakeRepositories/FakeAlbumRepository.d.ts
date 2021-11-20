import { Album, AlbumSearchQuery, AlbumUpdateRequest, IKeyBasedAPI, SearchResponse } from '../../types';
import BaseFakeRepository from './BaseFakeRepository';
export default class FakeAlbumRepository extends BaseFakeRepository<Album, AlbumSearchQuery, AlbumUpdateRequest> {
    constructor(api: IKeyBasedAPI);
    search(query: AlbumSearchQuery): Promise<SearchResponse<Album>>;
    update(updateRequest: AlbumUpdateRequest): Promise<Album>;
}
//# sourceMappingURL=FakeAlbumRepository.d.ts.map