var BrowserStorageAPI = /** @class */ (function () {
    function BrowserStorageAPI(storage) {
        this.Storage = storage;
    }
    BrowserStorageAPI.prototype.get = function (key) {
        var storage = this.Storage.getItem(key);
        if (storage === null) {
            throw Error("No Data.");
        }
        return Promise.resolve(JSON.parse(storage));
    };
    BrowserStorageAPI.prototype.set = function (key, data) {
        this.Storage.setItem(key, JSON.stringify(data));
        return Promise.resolve(data);
    };
    return BrowserStorageAPI;
}());
export default BrowserStorageAPI;
//# sourceMappingURL=BrowserStorageAPI.js.map