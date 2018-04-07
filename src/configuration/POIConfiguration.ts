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

    //
    // ─── BASIC CONFIG INFO ──────────────────────────────────────────────────────────
    //
    private _user: Option<string> = new Option<string>('user', '');
    private _group: Option<Array<string>> = new Option<Array<string>>('group', []);
    private _layers: Option<Array<string>> = new Option<Array<string>>('layers', []);

    //
    // ─── CONFIGURE KEYWORDS PARAMS ──────────────────────────────────────────────────
    //
    private _keywords: Option<string> = new Option<string>('keywords', '');
    private _method: Option<Method> = new Option<Method>('method', Method.FULL);
    private _type: Option<Type> = new Option<Type>('type', Type.FQ);
    // 作用域：'_ID', '_NAME','_ADDR','_NAMES','_FULLTEXT','某个字段'
    private _scope: Option<string> = new Option<string>('scope', '_FULLTEXT');
    // ────────────────────────────────────────────────────────────────────────────────

    //
    // ─── GROUP BY ───────────────────────────────────────────────────────────────────
    //
    private _groupBy: Option<string> = new Option<string>('groupBy', '');
    // ────────────────────────────────────────────────────────────────────────────────

    //
    // ─── SPATIAL FILTER ─────────────────────────────────────────────────────────────
    //
    private _bounds: Option<Bounds> = new Option<Bounds>('bounds', null);
    private _location: Option<Location> = new Option<Location>('location', null);
    private _polyline: Option<Polyline> = new Option<Polyline>('polyline', null);
    private _polygon: Option<Polygon> = new Option<Polygon>('polygon', null);
    private _buffer: Option<Buffer> = new Option<Buffer>('buffer', null);
    // ────────────────────────────────────────────────────────────────────────────────

    //
    // ─── CUSTOM FILTER ──────────────────────────────────────────────────────────────
    //
    private _filterCustom: Option<string> = new Option<string>('filterCustom', '');
    // ────────────────────────────────────────────────────────────────────────────────

    //
    // ─── SORT BY ────────────────────────────────────────────────────────────────────
    //
    // 排序规则 '_DIST', '_SCORE', '字段列表'。 多个字段排序用逗号分隔
    private _sortBy: Option<string> = new Option<string>('sortBy', '');
    // ────────────────────────────────────────────────────────────────────────────────

    //
    // ─── SPLIT PAGE CONFIG ──────────────────────────────────────────────────────────
    //
    private _pageIndex: Option<number> = new Option<number>('pageIndex', 0);
    private _pageSize: Option<number> = new Option<number>('pageSize', 20);
    private _limit: Option<number> = new Option<number>('limit', 512); // 最大4096， 小于512无效
    // ────────────────────────────────────────────────────────────────────────────────

    //
    // ─── JSONP PROTOCOL ─────────────────────────────────────────────────────────────
    //
    private _callback: Option<JSONP> = new Option<JSONP>('callback', null);
    // ────────────────────────────────────────────────────────────────────────────────
    
        
    constructor() {
        super();
        this._options = [this._user, this._group, this._layers, this._keywords, this._method, this._type, this._scope, this._groupBy, this._bounds, this._location, this._polyline, this._polygon, this._buffer, this._filterCustom, this._sortBy, this._pageIndex, this._pageSize, this._limit, this._callback];
    }

    //
    // ─── PROPERTY ACCESSOR ──────────────────────────────────────────────────────────
    //

    get user(): Option<string> {
        return this._user;
    }

    set user(val: Option<string>) {
        const key = this._user.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._user = val;
    }

    get group(): Option<Array<string>> {
        return this._group;
    }

    set group(val: Option<Array<string>>) {
        const key = this._group.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._group = val;
    }

    get layers(): Option<Array<string>> {
        return this._layers;
    }

    set layers(val: Option<Array<string>>) {
        const key = this._layers.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._layers = val;
    } 

    get keywords(): Option<string> {
        return this._keywords;
    }

    set keywords(val: Option<string>) {
        const key = this._keywords.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._keywords = val;
    }

    get method(): Option<Method> {
        return this._method;
    }

    set method(val: Option<Method>) {
        const key = this._method.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._method = val;
    }

    get type(): Option<Type> {
        return this._type;
    }

    set type(val: Option<Type>) {
        const key = this._type.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._type = val;
    }

    get scope(): Option<string> {
        return this._scope;
    }

    set scope(val: Option<string>) {
        const key = this._scope.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._scope = val;
    }

    get groupBy(): Option<string> {
        return this._groupBy;
    }

    set groupBy(val: Option<string>) {
        const key = this._groupBy.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._groupBy = val;
    }

    get bounds(): Option<Bounds> {
        return this._bounds;
    }

    set bounds(val: Option<Bounds>) {
        const key = this._bounds.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._bounds = val;
    }

    get location(): Option<Location> {
        return this._location;
    }

    set location(val: Option<Location>) {
        const key = this._location.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._location = val;
    }

    get polyline(): Option<Polyline> {
        return this._polyline;
    }

    set polyline(val: Option<Polyline>) {
        const key = this._polyline.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._polyline = val;
    }

    get polygon(): Option<Polygon> {
        return this._polygon;
    }

    set polygon(val: Option<Polygon>) {
        const key = this._polygon.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._polygon = val;
    }

    get buffer(): Option<Buffer> {
        return this._buffer;
    }

    set buffer(val: Option<Buffer>) {
        const key = this._buffer.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._buffer = val;
    }

    get filterCustom(): Option<string> {
        return this._filterCustom;
    }

    set filterCustom(val: Option<string>) {
        const key = this._filterCustom.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._filterCustom = val;
    }

    get sortBy(): Option<string> {
        return this._sortBy;
    }

    set sortBy(val: Option<string>) {
        const key = this._sortBy.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._sortBy = val;
    }

    get pageIndex(): Option<number> {
        return this._pageIndex;
    }

    set pageIndex(val: Option<number>) {
        const key = this._pageIndex.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._pageIndex = val;
    }

    get pageSize(): Option<number> {
        return this._pageSize;
    }

    set pageSize(val: Option<number>) {
        const key = this._pageSize.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._pageSize = val;
    }

    get limit(): Option<number> {
        return this._limit;
    }

    set limit(val: Option<number>){
        const key = this._limit.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._limit = val;
    }

    get callback(): Option<JSONP> {
        return this._callback;
    }

    set callback(val: Option<JSONP>) {
        const key = this._callback.key;
        if (val.key !== key) this._throwSetNameException(key);
        this._callback = val;
    }

    // ────────────────────────────────────────────────────────────────────────────────

    reset(): POIConfiguration {
        this._user = new Option<string>('user', '');
        this._group = new Option<Array<string>>('group', []);
        this._layers = new Option<Array<string>>('layers', []);
        this._keywords = new Option<string>('keywords', '');
        this._method = new Option<Method>('method', Method.FULL);
        this._scope = new Option<string>('scope', '_FULLTEXT');
        this._groupBy = new Option<string>('groupBy', '');
        this._bounds = new Option<Bounds>('bounds', null);
        this._location = new Option<Location>('location', null);
        this._polyline = new Option<Polyline>('polyline', null);
        this._polygon = new Option<Polygon>('polygon', null);
        this._buffer = new Option<Buffer>('buffer', null);
        this._filterCustom = new Option<string>('filterCustom', '');
        this._sortBy = new Option<string>('sortBy', '');
        this._pageIndex = new Option<number>('pageIndex', 0);
        this._pageSize = new Option<number>('pageSize', 20);
        this._limit = new Option<number>('limit', 512);
        this._callback = new Option<JSONP>('callback', null);
        return this;
    }

    //
    // ─── OVERRIDE FUNCTIONS ─────────────────────────────────────────────────────────
    //

    getParams(): string {
        let val: string[] = [];
        const ops = this._options;
        ops.map((op: any) => {

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

        });
        return val.join('&');
    }

    // ────────────────────────────────────────────────────────────────────────────────

    private _throwSetNameException(name: string) {
        throw new Error(`set的Option的key值必须是${name}`);
    }

}