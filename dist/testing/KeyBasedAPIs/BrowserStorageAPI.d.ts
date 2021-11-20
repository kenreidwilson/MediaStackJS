import { IKeyBasedAPI } from "../../types";
export default abstract class BrowserStorageAPI implements IKeyBasedAPI {
    Storage: Storage;
    constructor(storage: Storage);
    get<T>(key: string): Promise<T>;
    set(key: string, data: any): Promise<void>;
}
//# sourceMappingURL=BrowserStorageAPI.d.ts.map