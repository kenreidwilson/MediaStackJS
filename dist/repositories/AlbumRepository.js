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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { manageTags } from '../DomainHelpers';
import MediaRepository from './MediaRepository';
import BaseRepository from './BaseRepository';
var AlbumRepository = /** @class */ (function (_super) {
    __extends(AlbumRepository, _super);
    function AlbumRepository(api) {
        var _this = _super.call(this, api) || this;
        _this.baseURL = "" + process.env.REACT_APP_API;
        return _this;
    }
    AlbumRepository.prototype.add = function (album) {
        return this.API.post(this.baseURL + "/albums?name=" + album.name + "&artistId=" + album.artistID);
    };
    AlbumRepository.prototype.get = function (id) {
        return this.API.get(this.baseURL + "/albums?id=" + id);
    };
    AlbumRepository.prototype.search = function (query) {
        var endpoint = this.baseURL + "/albums/search?count=" + query.count;
        if (query.offset) {
            endpoint += "&offset=" + query.offset;
        }
        if (query.name) {
            endpoint += "&name=" + query.name;
        }
        if (query.artistId) {
            endpoint += "&artistid=" + query.artistId;
        }
        return this.API.get(endpoint);
    };
    AlbumRepository.prototype.update = function (updateRequest) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var mediaRepository, response, _i, _c, media, mediaUpdateRequest;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        mediaRepository = new MediaRepository(this.API);
                        return [4 /*yield*/, mediaRepository.search({ albumID: updateRequest.ID, mode: 1, count: 9999 })];
                    case 1:
                        response = _d.sent();
                        _i = 0, _c = response.data;
                        _d.label = 2;
                    case 2:
                        if (!(_i < _c.length)) return [3 /*break*/, 5];
                        media = _c[_i];
                        mediaUpdateRequest = { ID: media.id, score: updateRequest.score, source: updateRequest.source };
                        if (updateRequest.removeTagIDs !== undefined || updateRequest.addTagIDs !== undefined) {
                            mediaUpdateRequest.tagIDs = manageTags(media.tags, (_a = updateRequest.addTagIDs) === null || _a === void 0 ? void 0 : _a.map(function (tid) { return ({ name: '', id: tid }); }), (_b = updateRequest.removeTagIDs) === null || _b === void 0 ? void 0 : _b.map(function (tid) { return ({ name: '', id: tid }); })).map(function (t) { return t.id; });
                        }
                        return [4 /*yield*/, mediaRepository.update(mediaUpdateRequest)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [4 /*yield*/, this.get(updateRequest.ID)];
                    case 6: return [2 /*return*/, _d.sent()];
                }
            });
        });
    };
    AlbumRepository.prototype.delete = function (e) {
        throw new Error('Method not implemented.');
    };
    return AlbumRepository;
}(BaseRepository));
export default AlbumRepository;
//# sourceMappingURL=AlbumRepository.js.map