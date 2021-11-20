/** Domain Types */
export declare type Album = {
    id: number;
    artistID: number;
    name: string;
};
export declare type Artist = {
    id: number;
    name: string;
};
export declare type Category = {
    id: number;
    name: string;
};
export declare type Media = {
    id: number;
    categoryID?: number;
    artistID?: number;
    albumID?: number;
    tags: Tag[];
    hash: string;
    type: 1 | 2 | 3;
    created: string;
    albumOrder: number;
    score: number;
    source: string;
};
export declare type Tag = {
    id: number;
    name: string;
};
/** API Types */
export declare type BaseResponse<T> = {
    data: T;
    message: string;
};
export declare type SearchQuery = {
    count?: number;
    offset?: number;
};
export declare type SearchResponse<T> = {
    data: T[];
    count: number;
    total: number;
    offset: number;
};
export declare type GenericSearchQuery = SearchQuery & {
    fuzzyName?: string;
};
export declare type AlbumSearchQuery = SearchQuery & {
    name?: string;
    artistId?: number;
};
export declare type AlbumSortRequest = {
    albumID: number;
    property: 'path' | 'score';
};
export declare type AlbumUpdateRequest = {
    ID: number;
    addTagIDs?: number[];
    removeTagIDs?: number[];
    source?: string;
    score?: number;
    categoryID?: number;
    artistID?: number;
};
export declare type MediaSearchQuery = SearchQuery & {
    categoryID?: number;
    blacklistCategoryIDs?: number[];
    artistID?: number;
    blacklistArtistsIDs?: number[];
    albumID?: number;
    blacklistAlbumIDs?: number[];
    whitelistTagIDs?: number[];
    blacklistTagIDs?: number[];
    score?: number;
    lessThanScore?: number;
    greaterThanScore?: number;
    sortBy?: string;
    type?: number;
    mode?: 1 | 2 | 3;
};
export declare type MediaUpdateRequest = {
    ID: number;
    categoryID?: number;
    artistID?: number;
    albumID?: number;
    tagIDs?: number[];
    score?: number;
    source?: string;
    albumOrder?: number;
};
/** Interfaces */
export interface IRestAPI {
    get<T = void>(endpoint: string): Promise<T>;
    post<T = void>(endpoint: string, data?: any): Promise<T>;
    delete<T = void>(endpoint: string): Promise<T>;
    put<T = void>(endpoint: string, data?: any): Promise<T>;
}
export interface IRepository<TEntity, TSearchQuery extends SearchQuery = SearchQuery, TUpdateData = TEntity> {
    add(e: TEntity): Promise<TEntity>;
    get(id: number): Promise<TEntity>;
    search(query: TSearchQuery): Promise<SearchResponse<TEntity>>;
    update(e: TUpdateData): Promise<TEntity>;
    delete(e: TEntity): Promise<void>;
}
export interface IKeyBasedAPI {
    get<T = void>(key: string): Promise<T>;
    set(key: string, data: any): Promise<void>;
}
export interface IMediaFileLinkGenerator {
    getFileLink(media: Media): string;
    getThumbnailLink(media: Media): string;
}
//# sourceMappingURL=types.d.ts.map