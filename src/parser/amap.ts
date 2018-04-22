import Base from './base';
import { QueryClass } from '../configuration/AMapConfiguration';


export type AMapResponse = AMapSearch | AMapBusLine;
export interface AMapSearch {
    status: string;
    message: string;
    total: number;
    results: Array<any>;
    [index: number]: any;
}
export interface AMapBusLine {
    status: string;
    message: string;
    results: BusLines;
    [index: number]: any;
}
interface BusLines {
    count: number;
    lines: Array<any>;
    [index: number]: any;
}

export default class AMapParser extends Base { 

    private _results: any;
    private _queryClass: QueryClass = QueryClass.SEARCH;

    constructor(res: object|string, type: QueryClass=QueryClass.SEARCH) { 
        super(res);
        const source = this._source as AMapResponse;
        this._results = source.results;
        this._queryClass = type;
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

    protected _parseCount(): number {
        let source;
        if (this._queryClass === QueryClass.SEARCH) {
            source = this._source as AMapSearch;
            return source.total;
        } else if (this._queryClass === QueryClass.BUSLINE) {
            source = this._source as AMapBusLine;
            return source.results.count;
        }
        return 0;
    }

}