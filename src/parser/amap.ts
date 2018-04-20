import Base from './base';

export interface AMapResponse {
    status: string;
    message: string;
    total: number;
    results: Array<any>;
    [index: number]: any;
}

export default class AMapParser extends Base { 

    private _results: any;

    constructor(res: object|string) { 
        super(res);
        const source = this._source as AMapResponse;
        this._results = source.results;
    }

    get results(): any {
        return this._results;
    }

    protected _parseSuccess(): boolean { 
        const source = this._source as AMapResponse;
        const success = source.status;
        if (success === '0') {
            return true;
        } else {
            return false;
        }
    }
    
    protected _parseMessage(): string { 
        const source = this._source as AMapResponse;
        return source.message;
    }

    protected _parseCount(): number{
        const source = this._source as AMapResponse;
        return source.total;
    }

}