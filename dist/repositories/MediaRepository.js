var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import BaseRepository from './BaseRepository';
var MediaRepository = /** @class */ (function (_super) {
    __extends(MediaRepository, _super);
    function MediaRepository(api) {
        var _this = _super.call(this, api) || this;
        _this.baseURL = "" + process.env.REACT_APP_API;
        return _this;
    }
    MediaRepository.prototype.add = function (media) {
        throw new Error('Method not implemented.');
    };
    MediaRepository.prototype.get = function (id) {
        return this.API.get(this.baseURL + "/media?id=" + id);
    };
    MediaRepository.prototype.search = function (query) {
        return this.API.post(this.baseURL + "/media/search", query);
    };
    MediaRepository.prototype.update = function (updateRequest) {
        return this.API.put(this.baseURL + "/media", updateRequest);
    };
    MediaRepository.prototype.delete = function (media) {
        throw new Error('Method not implemented.');
    };
    return MediaRepository;
}(BaseRepository));
export default MediaRepository;
//# sourceMappingURL=MediaRepository.js.map