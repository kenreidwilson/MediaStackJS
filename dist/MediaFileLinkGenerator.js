var MediaFileLinkGenerator = /** @class */ (function () {
    function MediaFileLinkGenerator(APIUrl) {
        this.APIUrl = APIUrl;
    }
    MediaFileLinkGenerator.prototype.getFileLink = function (media) {
        return this.APIUrl + "/media/file?id=" + media.id;
    };
    MediaFileLinkGenerator.prototype.getThumbnailLink = function (media) {
        return this.APIUrl + "/media/thumbnail?id=" + media.id;
    };
    return MediaFileLinkGenerator;
}());
export default MediaFileLinkGenerator;
//# sourceMappingURL=MediaFileLinkGenerator.js.map