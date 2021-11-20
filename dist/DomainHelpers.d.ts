import { Media, Tag } from "./types";
declare const getAverageScore: (mediaList: Media[]) => number;
declare const manageTags: (tags: Tag[], addTags?: Tag[] | undefined, removeTags?: Tag[] | undefined) => Tag[];
declare const getCommonSource: (mediaList: Media[]) => string | null;
export { getAverageScore, manageTags, getCommonSource };
//# sourceMappingURL=DomainHelpers.d.ts.map