import { APINetworkError, APINotFoundError, APIBadRequestError, APIUnexpectedResponseError } from './APIErrors';
import axios from 'axios';
var MediaStackRestAPI = /** @class */ (function () {
    function MediaStackRestAPI() {
    }
    MediaStackRestAPI.prototype.get = function (endpoint) {
        return axios.get(endpoint)
            .then(function (response) {
            if (response.status === 200) {
                return response.data.data;
            }
            throw new APIUnexpectedResponseError("Invalid response status: " + response.status);
        }).catch(function (error) {
            if (error.response === undefined) {
                throw new APINetworkError("API sent no response.");
            }
            switch (error.response.status) {
                case (404):
                    throw new APINotFoundError(error.response.data.message);
                default:
                    throw new APIUnexpectedResponseError("Server responded unexpectedly.");
            }
        });
    };
    MediaStackRestAPI.prototype.post = function (endpoint, data) {
        return axios.post(endpoint, data)
            .then(function (response) {
            if (response.status === 201 || response.status === 200) {
                return response.data.data;
            }
            throw new APIUnexpectedResponseError("Invalid response status: " + response.status);
        })
            .catch(function (error) {
            if (error.response === undefined) {
                throw new APINetworkError("API sent no response.");
            }
            switch (error.response.status) {
                case (400):
                    throw new APIBadRequestError(error.response.data.message);
                default:
                    throw new APIUnexpectedResponseError("Server responded unexpectedly.");
            }
        });
    };
    MediaStackRestAPI.prototype.delete = function (endpoint) {
        return axios.delete(endpoint)
            .then(function (response) {
            if (response.status === 200) {
                return response.data.data;
            }
            throw new APIUnexpectedResponseError("Invalid response status: " + response.status);
        })
            .catch(function (error) {
            if (error.response === undefined) {
                throw new APINetworkError("API sent no response.");
            }
            switch (error.response.status) {
                case (404):
                    throw new APINotFoundError(error.response.data.message);
                default:
                    throw new APIUnexpectedResponseError("Server responded unexpectedly.");
            }
        });
    };
    MediaStackRestAPI.prototype.put = function (endpoint, data) {
        return axios.put(endpoint, data)
            .then(function (response) {
            if (response.status === 200) {
                return response.data.data;
            }
            throw new APIUnexpectedResponseError("Invalid response status: " + response.status);
        })
            .catch(function (error) {
            if (error.response === undefined) {
                throw new APINetworkError("API sent no response.");
            }
            switch (error.response.status) {
                case (400):
                    throw new APIBadRequestError("Bad Request");
                default:
                    throw new APIUnexpectedResponseError("Server responded unexpectedly.");
            }
        });
    };
    return MediaStackRestAPI;
}());
export default MediaStackRestAPI;
//# sourceMappingURL=MediaStackRestAPI.js.map