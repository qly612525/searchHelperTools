import Base from '../parser/base';

interface POISingle {
    sn: number;
    score: number;
    layer: string;
    id: string;
    name: string;
    address: string;
    x: string;
    y: string;
    shape: string;
    custom: object;
}

interface GroupResponse {
    groupName: string;
    groupScore: number;
    totalHits: number;
    itemCount: number;
    pois: Array<POISingle>;
    [index: number]: POISingle;
}

export interface POIResponse {
    success: string | boolean;
    message: string;
    totalHits: number;
    groups: Array<GroupResponse>;
    [index: number]: GroupResponse;
}

export default class POIParser extends Base {

    private _groupCount: number;
    private _groups: Array<GroupResponse>;

    constructor(res: object|string) { 
        super(res);
        const source = this._source as POIResponse;
        this._groups = source.groups;
        this._groupCount = source.groups.length;
    }

    get groups(): Array<GroupResponse> {
        return this._groups;
    }

    getOnePOI(): Array<POISingle> {
        if (this._groupCount > 0) {
            return [this.groups[0].pois[0]];
        }
        return [];
    }

    getScoreGrateThanOne(): Array<POISingle> {
        if (this._groupCount > 0) {
            const pois: POISingle[] = this.groups[0].pois;
            const filters = pois.filter((poi: POISingle) => {
                return poi.score >= 1
            });
            return filters;
        }
        return [];
    }

    protected _parseSuccess() {
        const source = this._source as POIResponse;
        const success = source.success;
        if (typeof success === 'string' && success === 'true') {
            return true;
        } else if (success) {
            return true;
        } else {
            return false;
        }
    }
    
    protected _parseMessage() {
        const source = this._source as POIResponse;
        const message = source.message;
        return message;
    }

    protected _parseCount() {
        const source = this._source as POIResponse;
        const count = source.totalHits;
        return count;
    }
}