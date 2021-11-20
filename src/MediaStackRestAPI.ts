import { IRestAPI, BaseResponse } from './types';
import { APINetworkError, APINotFoundError, APIBadRequestError, APIUnexpectedResponseError } from './APIErrors';
import axios from 'axios';

export default class MediaStackRestAPI implements IRestAPI {

    get<T>(endpoint: string): Promise<T> {
        return axios.get<BaseResponse<T>>(endpoint)
        .then(response => {
            if (response.status === 200) {
                return response.data.data;
            }
            throw new APIUnexpectedResponseError(`Invalid response status: ${response.status}`);
        }).catch(error => {
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
    }

    post<T>(endpoint: string, data?: any): Promise<T> {
        return axios.post<BaseResponse<T>>(endpoint, data)
        .then(response => {
            if (response.status === 201 || response.status === 200) {
                return response.data.data;
            }
            throw new APIUnexpectedResponseError(`Invalid response status: ${response.status}`);
        })
        .catch(error => {
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
    }

    delete<T>(endpoint: string): Promise<T> {
        return axios.delete<BaseResponse<T>>(endpoint)
        .then(response => {
            if (response.status === 200) {
                return response.data.data;
            }
            throw new APIUnexpectedResponseError(`Invalid response status: ${response.status}`);
        })
        .catch(error => {
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
    }

    put<T>(endpoint: string, data?: any): Promise<T> {
        return axios.put<BaseResponse<T>>(endpoint, data)
        .then(response => {
            if (response.status === 200) {
                return response.data.data;
            }
            throw new APIUnexpectedResponseError(`Invalid response status: ${response.status}`);
        })
        .catch(error => {
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
    }
}
