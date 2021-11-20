var FakeMediaFileLinkGenerator = /** @class */ (function () {
    function FakeMediaFileLinkGenerator() {
    }
    FakeMediaFileLinkGenerator.prototype.getFileLink = function (media) {
        return "images/" + media.hash + ".jpg";
    };
    FakeMediaFileLinkGenerator.prototype.getThumbnailLink = function (media) {
        return "images/" + media.hash + ".jpg";
    };
    return FakeMediaFileLinkGenerator;
}());
export default FakeMediaFileLinkGenerator;
//# sourceMappingURL=FakeMediaFileLinkGenerator.js.map