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
import { manageTags } from '../../DomainHelpers';
import BaseFakeRepository from './BaseFakeRepository';
import { SeedAlbums } from '../SeedData/SeedAlbums';
import FakeMediaRepository from './FakeMediaRepository';
var FakeAlbumRepository = /** @class */ (function (_super) {
    __extends(FakeAlbumRepository, _super);
    function FakeAlbumRepository(api) {
        return _super.call(this, api, "albums", SeedAlbums) || this;
    }
    FakeAlbumRepository.prototype.search = function (query) {
        return this.API.get(this.entitiesKey)
            .then(function (entities) {
            if (!query.offset) {
                query.offset = 0;
            }
            if (!query.count) {
                query.count = 5;
            }
            if (query.name) {
                entities = entities.filter(function (e) { return e.name === query.name; });
            }
            if (query.artistId) {
                entities = entities.filter(function (e) { return e.artistID === query.artistId; });
            }
            var responeData = entities.slice(query.offset).slice(0, query.count);
            return {
                data: responeData,
                total: entities.length,
                count: responeData.length,
                offset: query.offset
            };
        });
    };
    FakeAlbumRepository.prototype.update = function (updateRequest) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var fmr, albumMedia, _i, albumMedia_1, media, mediaUpdateRequest;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        fmr = new FakeMediaRepository(this.API);
                        return [4 /*yield*/, fmr.search({ albumID: updateRequest.ID, mode: 1, count: 9999 })];
                    case 1:
                        albumMedia = (_c.sent()).data;
                        _i = 0, albumMedia_1 = albumMedia;
                        _c.label = 2;
                    case 2:
                        if (!(_i < albumMedia_1.length)) return [3 /*break*/, 5];
                        media = albumMedia_1[_i];
                        mediaUpdateRequest = { ID: media.id, score: updateRequest.score, source: updateRequest.source };
                        if (updateRequest.removeTagIDs !== undefined || updateRequest.addTagIDs !== undefined) {
                            mediaUpdateRequest.tagIDs = manageTags(media.tags, (_a = updateRequest.addTagIDs) === null || _a === void 0 ? void 0 : _a.map(function (tid) { return ({ name: '', id: tid }); }), (_b = updateRequest.removeTagIDs) === null || _b === void 0 ? void 0 : _b.map(function (tid) { return ({ name: '', id: tid }); })).map(function (t) { return t.id; });
                        }
                        return [4 /*yield*/, fmr.update(mediaUpdateRequest)];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, this.get(updateRequest.ID)];
                }
            });
        });
    };
    return FakeAlbumRepository;
}(BaseFakeRepository));
export default FakeAlbumRepository;
//# sourceMappingURL=FakeAlbumRepository.js.map