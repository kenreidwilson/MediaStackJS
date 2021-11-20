import { IMediaFileLinkGenerator, Media } from "../../types";
export default class FakeMediaFileLinkGenerator implements IMediaFileLinkGenerator {
    getFileLink(media: Media): string;
    getThumbnailLink(media: Media): string;
}
//# sourceMappingURL=FakeMediaFileLinkGenerator.d.ts.map