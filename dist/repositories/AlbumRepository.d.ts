import BaseRepository from './BaseRepository';
import { Album, AlbumSearchQuery, AlbumUpdateRequest, IRestAPI, SearchResponse } from '../types';
export default class AlbumRepository extends BaseRepository<Album, AlbumSearchQuery, AlbumUpdateRequest> {
    baseURL: string;
    constructor(api: IRestAPI);
    add(album: Album): Promise<Album>;
    get(id: number): Promise<Album>;
    search(query: AlbumSearchQuery): Promise<SearchResponse<Album>>;
    update(updateRequest: AlbumUpdateRequest): Promise<Album>;
    delete(e: Album): Promise<void>;
}
//# sourceMappingURL=AlbumRepository.d.ts.map