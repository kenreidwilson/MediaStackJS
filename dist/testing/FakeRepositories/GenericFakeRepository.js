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
import BaseFakeRepository from './BaseFakeRepository';
var GenericFakeRepository = /** @class */ (function (_super) {
    __extends(GenericFakeRepository, _super);
    function GenericFakeRepository(api, entitiesKey, defaultEntities) {
        return _super.call(this, api, entitiesKey, defaultEntities) || this;
    }
    GenericFakeRepository.prototype.search = function (query) {
        return this.API.get(this.entitiesKey)
            .then(function (entities) {
            if (!query.offset) {
                query.offset = 0;
            }
            if (!query.count) {
                query.count = 5;
            }
            if (query.fuzzyName) {
                entities = entities.filter(function (e) { return !query.fuzzyName || e.name.indexOf(query.fuzzyName) !== -1; });
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
    GenericFakeRepository.prototype.update = function (e) {
        var _this = this;
        return this.API.get(this.entitiesKey)
            .then(function (entities) {
            entities = entities.filter(function (et) { return et.id !== e.id; });
            entities.push(e);
            _this.API.set(_this.entitiesKey, entities).then(function (_) { return e; });
            return e;
        });
    };
    return GenericFakeRepository;
}(BaseFakeRepository));
export default GenericFakeRepository;
//# sourceMappingURL=GenericFakeRepository.js.map