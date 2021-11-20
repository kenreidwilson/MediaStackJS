import { IMediaFileLinkGenerator, Media } from "./types";
export default class MediaFileLinkGenerator implements IMediaFileLinkGenerator {
    APIUrl: string;
    constructor(APIUrl: string);
    getFileLink(media: Media): string;
    getThumbnailLink(media: Media): string;
}
//# sourceMappingURL=MediaFileLinkGenerator.d.ts.map