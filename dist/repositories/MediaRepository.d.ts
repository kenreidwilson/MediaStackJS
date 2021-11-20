import { MediaSearchQuery, MediaUpdateRequest, IRestAPI, SearchResponse, Media } from '../types';
import BaseRepository from './BaseRepository';
export default class MediaRepository extends BaseRepository<Media, MediaSearchQuery, MediaUpdateRequest> {
    baseURL: string;
    constructor(api: IRestAPI);
    add(media: Media): Promise<Media>;
    get(id: number): Promise<Media>;
    search(query: MediaSearchQuery): Promise<SearchResponse<Media>>;
    update(updateRequest: MediaUpdateRequest): Promise<Media>;
    delete(media: Media): Promise<void>;
}
//# sourceMappingURL=MediaRepository.d.ts.map