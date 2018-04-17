import Option from '../option/Option';
import Configuration from './Configuration';

// 全文方法
export enum Method { ACC = 'ACC', FULL = 'FULL', LIKE = 'LIKE' };
export enum Type { PY = 'PY', GQ = 'GQ', FQ = 'FQ' };
// 空间类型
type Bounds = [number, number, number, number] | null;
type Location = [number, number] | null;
type Point = [number, number];
type Polyline = Array<Point> | null;
type Polygon = Array<Point> | null; // 起点与终点重复，形成闭环
type Buffer = number | null;
// JSONP 协议参数类型
type JSONP = ((data: any) => void) | null;

export default class POIConfiguration extends Configuration {
        
    constructor() {

        super();
        //
        // ─── BASIC CONFIG INFO ──────────────────────────────────────────────────────────
        //
        this._options.set('user', new Option<string>('user', ''));
        this._options.set('group', new Option<Array<string>>('group', []));
        this._options.set('layers', new Option<Array<string>>('layers', []));
        // ─────────────────────────────────────────────────────────────────

        //
        // ─── CONFIGURE KEYWORDS PARAMS ──────────────────────────────────────────────────
        //
        this._options.set('keywords', new Option<string>('keywords', ''));
        this._options.set('method', new Option<Method>('method', Method.FULL));
        this._options.set('type', new Option<Type>('type', Type.FQ));
        // 作用域：'_ID', '_NAME','_ADDR','_NAMES','_FULLTEXT','某个字段'
        this._options.set('scope', new Option<string>('scope', '_FULLTEXT'));
        // ────────────────────────────────────────────────────────────────────────────────

        //
        // ─── GROUP BY ───────────────────────────────────────────────────────────────────
        //
        this._options.set('groupBy', new Option<string>('groupBy', ''));
        // ────────────────────────────────────────────────────────────────────────────────

        //
        // ─── SPATIAL FILTER ─────────────────────────────────────────────────────────────
        //
        this._options.set('bounds', new Option<Bounds>('bounds', null));
        this._options.set('location', new Option<Location>('location', null));
        this._options.set('polyline', new Option<Polyline>('polyline', null));
        this._options.set('polygon', new Option<Polygon>('polygon', null));
        this._options.set('buffer', new Option<Buffer>('buffer', null));
        // ────────────────────────────────────────────────────────────────────────────────

        //
        // ─── CUSTOM FILTER ──────────────────────────────────────────────────────────────
        //
        this._options.set('filterCustom', new Option<string>('filterCustom', ''));
        // ────────────────────────────────────────────────────────────────────────────────

        //
        // ─── SORT BY ────────────────────────────────────────────────────────────────────
        //
        // 排序规则 '_DIST', '_SCORE', '字段列表'。 多个字段排序用逗号分隔
        this._options.set('sortBy', new Option<string>('sortBy', ''));
        // ────────────────────────────────────────────────────────────────────────────────

        //
        // ─── SPLIT PAGE CONFIG ──────────────────────────────────────────────────────────
        // 
        this._options.set('pageIndex', new Option<number>('pageIndex', 0));
        this._options.set('pageSize', new Option<number>('pageSize', 20));
        this._options.set('limit', new Option<number>('limit', 512)); // 最大4096， 小于512无效
        // ────────────────────────────────────────────────────────────────────────────────

        //
        // ─── JSONP PROTOCOL ─────────────────────────────────────────────────────────────
        //
        this._options.set('callback', new Option<JSONP>('callback', null));
        // ────────────────────────────────────────────────────────────────────────────────          
    }

    //
    // ─── PROPERTY ACCESSOR ──────────────────────────────────────────────────────────
    //

    get user(): Option<string> | undefined {
        return this._options.get('user');
    }

    get group(): Option<Array<string>> | undefined {
        return this._options.get('group');
    }

    get layers(): Option<Array<string>> | undefined {
        return this._options.get('layers');
    }

    get keywords(): Option<string> | undefined {
        return this._options.get('keywords');
    }

    get method(): Option<Method> | undefined {
        return this._options.get('method');
    }

    get type(): Option<Type> | undefined {
        return this._options.get('type');
    }

    get scope(): Option<string> | undefined {
        return this._options.get('scope');
    }

    get groupBy(): Option<string> | undefined {
        return this._options.get('groupBy');
    }

    get bounds(): Option<Bounds> | undefined {
        return this._options.get('bounds');
    }

    get location(): Option<Location> | undefined {
        return this._options.get('location');
    }

    get polyline(): Option<Polyline> | undefined {
        return this._options.get('polyline');
    }

    get polygon(): Option<Polygon> | undefined {
        return this._options.get('polygon');
    }

    get buffer(): Option<Buffer> | undefined {
        return this._options.get('buffer');
    }

    get filterCustom(): Option<string> | undefined {
        return this._options.get('filterCustom');
    }

    get sortBy(): Option<string> | undefined {
        return this._options.get('sortBy');
    }

    get pageIndex(): Option<number> | undefined {
        return this._options.get('pageIndex');
    }

    get pageSize(): Option<number> | undefined {
        return this._options.get('pageSize');
    }

    get limit(): Option<number> | undefined {
        return this._options.get('limit');
    }

    get callback(): Option<JSONP> | undefined {
        return this._options.get('callback');
    }

    // ────────────────────────────────────────────────────────────────────────────────

    //
    // ─── OVERRIDE FUNCTIONS ─────────────────────────────────────────────────────────
    //

    reset(): POIConfiguration {
        (this.user as Option<string>).value = '';
        (this.group as Option<Array<string>>).value = [];
        (this.layers as Option<Array<string>>).value = [];
        (this.keywords as Option<string>).value = '';
        (this.method as Option<Method>).value = Method.FULL;
        (this.scope as Option<string>).value = '_FULLTEXT';
        (this.groupBy as Option<string>).value = '';
        (this.bounds as Option<Bounds>).value = null;
        (this.location as Option<Location>).value = null;
        (this.polyline as Option<Polyline>).value = null;
        (this.polygon as Option<Polygon>).value = null;
        (this.buffer as Option<Buffer>).value = null;
        (this.filterCustom as Option<string>).value = '';
        (this.sortBy as Option<string>).value = '';
        (this.pageIndex as Option<number>).value = 0;
        (this.pageSize as Option<number>).value = 20;
        (this.limit as Option<number>).value = 512;
        (this.callback as Option<JSONP>).value = null;
        return this;
    }

    getParams(): string {
        let val: string[] = [];
        const ops = this._options;
        for (const [k, op] of ops) {
            let isJoin = true;
            if (op.value === null) {
                isJoin = false;
            } else if (op.value === '') {
                isJoin = false;
            } else if (((op.value) as Array<string>).length === 0) {
                isJoin = false;
            }

            if (isJoin) {
                val.push(op.key + '=' + op.value);
            }
        }
        return val.join('&');
    }

    // ────────────────────────────────────────────────────────────────────────────────

    private _throwSetNameException(name: string) {
        throw new Error(`set的Option的key值必须是${name}`);
    }

}