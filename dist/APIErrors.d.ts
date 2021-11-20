declare class APINetworkError extends Error {
    constructor(message: string);
}
declare class APINotFoundError extends Error {
    constructor(message: string);
}
declare class APIBadRequestError extends Error {
    constructor(message: string);
}
declare class APIUnexpectedResponseError extends Error {
    constructor(message: string);
}
export { APINetworkError, APINotFoundError, APIBadRequestError, APIUnexpectedResponseError };
//# sourceMappingURL=APIErrors.d.ts.map