var BaseFakeRepository = /** @class */ (function () {
    function BaseFakeRepository(api, entitiesKey, defaultEntities) {
        this.entitiesKey = entitiesKey;
        this.API = api;
        try {
            this.API.get(this.entitiesKey);
        }
        catch (_) {
            this.API.set(this.entitiesKey, defaultEntities);
        }
    }
    BaseFakeRepository.prototype.add = function (e) {
        var _this = this;
        return this.API.get(this.entitiesKey)
            .then(function (entities) {
            var potentialEntity = entities.find(function (et) { return et.id === e.id; });
            if (!potentialEntity) {
                entities.push(e);
                _this.API.set(_this.entitiesKey, entities).then(function (_) { return e; });
            }
            return e;
        });
    };
    BaseFakeRepository.prototype.get = function (id) {
        return this.API.get(this.entitiesKey)
            .then(function (entities) {
            var potentialEntity = entities.find(function (e) { return e.id === id; });
            if (!potentialEntity) {
                throw new Error("No Entity found with ID: " + id);
            }
            return potentialEntity;
        });
    };
    BaseFakeRepository.prototype.delete = function (e) {
        var _this = this;
        return this.API.get(this.entitiesKey)
            .then(function (entities) {
            return _this.API.set(_this.entitiesKey, entities.filter(function (et) { return et.id !== e.id; }));
        });
    };
    return BaseFakeRepository;
}());
export default BaseFakeRepository;
//# sourceMappingURL=BaseFakeRepository.js.map