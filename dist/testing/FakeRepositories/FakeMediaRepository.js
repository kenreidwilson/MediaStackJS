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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import BaseFakeRepository from './BaseFakeRepository';
import { SeedMedia } from '../SeedData/SeedMedia';
import FakeTagRepository from './FakeTagRepository';
import FakeAlbumRepository from './FakeAlbumRepository';
var FakeMediaRepository = /** @class */ (function (_super) {
    __extends(FakeMediaRepository, _super);
    function FakeMediaRepository(api) {
        return _super.call(this, api, "media", SeedMedia) || this;
    }
    FakeMediaRepository.prototype.search = function (query) {
        return this.API.get(this.entitiesKey).then(function (entities) {
            if (!query.offset) {
                query.offset = 0;
            }
            if (!query.count) {
                query.count = 5;
            }
            var allEntities = __spreadArray([], entities, true);
            switch (query.mode) {
                case (2):
                    entities = entities.filter(function (m) { return !m.albumID || m.albumOrder === 0; });
                    break;
                case (3):
                    entities = entities.filter(function (m) { return !m.albumID; });
                    break;
                default:
                    break;
            }
            if (query.categoryID)
                entities = entities.filter(function (m) { return m.categoryID === query.categoryID; });
            if (query.artistID)
                entities = entities.filter(function (m) { return m.artistID === query.artistID; });
            if (query.albumID)
                entities = entities.filter(function (m) { return m.albumID === query.albumID; });
            query.blacklistCategoryIDs && query.blacklistCategoryIDs.forEach(function (catId) {
                entities = entities.filter(function (m) { return m.categoryID !== catId; });
            });
            query.blacklistArtistsIDs && query.blacklistArtistsIDs.forEach(function (artId) {
                entities = entities.filter(function (m) { return m.artistID !== artId; });
            });
            query.blacklistAlbumIDs && query.blacklistAlbumIDs.forEach(function (albId) {
                entities = entities.filter(function (m) { return m.albumID !== albId; });
            });
            if (query.score)
                entities = entities.filter(function (m) { return m.score === query.score; });
            if (query.lessThanScore)
                entities = entities.filter(function (m) { return m.score < query.lessThanScore; });
            if (query.greaterThanScore)
                entities = entities.filter(function (m) { return m.score > query.greaterThanScore; });
            if (query.mode === 2) {
                query.whitelistTagIDs && query.whitelistTagIDs.forEach(function (tagId) {
                    entities = entities.filter(function (m) {
                        return !m.albumID && m.tags.map(function (t) { return t.id; }).includes(tagId) ||
                            (m.albumID && m.albumOrder === 0 &&
                                allEntities.filter(function (me) { return me.albumID === m.albumID; }).forEach(function (am) { return am.tags.map(function (t) { return t.id; }).includes(tagId); }));
                    });
                });
                query.blacklistTagIDs && query.blacklistTagIDs.forEach(function (tagId) {
                    entities = entities.filter(function (m) {
                        return !m.albumID && !m.tags.map(function (t) { return t.id; }).includes(tagId) ||
                            (m.albumID && m.albumOrder === 0 &&
                                allEntities.filter(function (me) { return me.albumID === m.albumID; }).forEach(function (am) { return !am.tags.map(function (t) { return t.id; }).includes(tagId); }));
                    });
                });
            }
            else {
                query.whitelistTagIDs && query.whitelistTagIDs.forEach(function (tagId) {
                    entities = entities.filter(function (m) { return m.tags.map(function (t) { return t.id; }).includes(tagId); });
                });
                query.blacklistTagIDs && query.blacklistTagIDs.forEach(function (tagId) {
                    entities = entities.filter(function (m) { return !m.tags.map(function (t) { return t.id; }).includes(tagId); });
                });
            }
            //TODO: Implement SortBy.
            var responeData = entities.slice(query.offset).slice(0, query.count);
            return {
                data: responeData,
                total: entities.length,
                count: responeData.length,
                offset: query.offset
            };
        });
    };
    FakeMediaRepository.prototype.update = function (updateRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var ftr, newTags, media, afr, album, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        ftr = new FakeTagRepository(this.API);
                        if (updateRequest.tagIDs) {
                            newTags = Promise.all(updateRequest.tagIDs.map(function (tagid) { return ftr.get(tagid); }));
                        }
                        return [4 /*yield*/, this.get(updateRequest.ID)];
                    case 1:
                        media = _b.sent();
                        if (updateRequest.categoryID)
                            media.categoryID = updateRequest.categoryID;
                        if (updateRequest.artistID && media.categoryID) {
                            media.artistID = updateRequest.artistID;
                        }
                        else if (updateRequest.artistID) {
                            throw Error('Bad Request');
                        }
                        if (!(updateRequest.albumID && media.artistID)) return [3 /*break*/, 3];
                        afr = new FakeAlbumRepository(this.API);
                        return [4 /*yield*/, afr.get(updateRequest.albumID)];
                    case 2:
                        album = _b.sent();
                        if (album.artistID != media.artistID) {
                            throw new Error('Bad Request');
                        }
                        media.albumID = updateRequest.albumID;
                        return [3 /*break*/, 4];
                    case 3:
                        if (updateRequest.albumID) {
                            throw new Error('Bad Request');
                        }
                        _b.label = 4;
                    case 4:
                        if (updateRequest.albumOrder)
                            media.albumOrder = updateRequest.albumOrder;
                        if (updateRequest.score)
                            media.score = updateRequest.score;
                        if (updateRequest.source)
                            media.source = updateRequest.source;
                        if (!newTags) return [3 /*break*/, 6];
                        _a = media;
                        return [4 /*yield*/, newTags];
                    case 5:
                        _a.tags = _b.sent();
                        _b.label = 6;
                    case 6: return [2 /*return*/, this.API.get(this.entitiesKey)
                            .then(function (entities) {
                            entities = entities.filter(function (et) { return et.id !== updateRequest.ID; });
                            entities.push(media);
                            _this.API.set(_this.entitiesKey, entities).then(function (_) { return media; });
                            return media;
                        })];
                }
            });
        });
    };
    return FakeMediaRepository;
}(BaseFakeRepository));
export default FakeMediaRepository;
//# sourceMappingURL=FakeMediaRepository.js.map