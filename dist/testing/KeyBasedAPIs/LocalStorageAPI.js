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
import BrowserStorageAPI from './BrowserStorageAPI';
var LocalStorageAPI = /** @class */ (function (_super) {
    __extends(LocalStorageAPI, _super);
    function LocalStorageAPI() {
        return _super.call(this, localStorage) || this;
    }
    return LocalStorageAPI;
}(BrowserStorageAPI));
export default LocalStorageAPI;
//# sourceMappingURL=LocalStorageAPI.js.map