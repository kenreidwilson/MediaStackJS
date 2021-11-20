import BaseFakeRepository from './BaseFakeRepository';
import { IKeyBasedAPI, Media, MediaSearchQuery, MediaUpdateRequest, SearchResponse } from '../../types';
export default class FakeMediaRepository extends BaseFakeRepository<Media, MediaSearchQuery, MediaUpdateRequest> {
    constructor(api: IKeyBasedAPI);
    search(query: MediaSearchQuery): Promise<SearchResponse<Media>>;
    update(updateRequest: MediaUpdateRequest): Promise<Media>;
}
//# sourceMappingURL=FakeMediaRepository.d.ts.map