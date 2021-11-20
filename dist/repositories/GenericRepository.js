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
import { APIBadRequestError } from '../APIErrors';
var GenericRepository = /** @class */ (function (_super) {
    __extends(GenericRepository, _super);
    function GenericRepository(api, baseEndpoint) {
        var _this = _super.call(this, api) || this;
        _this.baseURL = "" + process.env.REACT_APP_API;
        _this.baseEndpoint = baseEndpoint;
        return _this;
    }
    GenericRepository.prototype.add = function (e) {
        if (e.name === undefined) {
            throw new APIBadRequestError("Bad Request: Invalid Name");
        }
        return this.API.post(this.baseURL + "/" + this.baseEndpoint + "?name=" + e.name);
    };
    GenericRepository.prototype.get = function (id) {
        return this.API.get(this.baseURL + "/" + this.baseEndpoint + "?id=" + id);
    };
    GenericRepository.prototype.search = function (query) {
        var endpoint = this.baseURL + "/" + this.baseEndpoint + "/search?count=" + query.count;
        if (query.offset) {
            endpoint += "&offset=" + query.offset;
        }
        if (query.fuzzyName) {
            endpoint += "&fuzzyname=" + query.fuzzyName;
        }
        return this.API.get(endpoint);
    };
    GenericRepository.prototype.update = function (e) {
        if (e.name === undefined) {
            throw new APIBadRequestError("Bad Request: Invalid Name");
        }
        return this.API.put(this.baseURL + "/" + this.baseEndpoint + "?id=" + e.id + "&name=" + e.name);
    };
    GenericRepository.prototype.delete = function (e) {
        return this.API.delete(this.baseURL + "/" + this.baseEndpoint + "?id=" + e.id);
    };
    return GenericRepository;
}(BaseRepository));
export default GenericRepository;
//# sourceMappingURL=GenericRepository.js.map