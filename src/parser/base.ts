export default class Parser {

    protected _source: object;
    private _success: boolean;
    private _message: string;
    private _totalCount: number;

    constructor(res: object | string) {
        let obj: object;
        if (typeof res === 'string') {
            obj = JSON.parse(res);
        } else {
            obj = res;
        }
        this._source = obj;
        this._success = this._parseSuccess();
        this._message = this._parseMessage();
        this._totalCount = this._parseCount();
    }

    protected _parseSuccess(): boolean { 
        return true;
    }
    
    protected _parseMessage(): string { 
        return 'OK';
    }

    protected _parseCount(): number{
        return 0;
    }

    get isSuccess():boolean {
        return this._success;
    }

    get message(): string {
        return this._message;
    }

    get totalCount(): number {
        return this._totalCount;
    }
    
}