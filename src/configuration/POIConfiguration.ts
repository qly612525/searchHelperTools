import Option from '../option/Option';
import Configuration from './Configuration';

// 全文方法
export enum Method { ACC = 'ACC', FULL = 'FULL', LIKE = 'LIKE' };
// 空间类型
type Bounds = [number, number, number, number] | undefined;
type Location = [number, number] | undefined;
type Point = [number, number];
type Polyline = Array<Point> | undefined;
type Polygon = Array<Point> | undefined; // 起点与终点重复，形成闭环
type Buffer = number | undefined;
// JSONP 协议参数类型
type JSONP = ((data: any) => void) | undefined;

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
    private _bounds: Option<Bounds> = new Option<Bounds>('bounds', undefined);
    private _location: Option<Location> = new Option<Location>('location', undefined);
    private _polyline: Option<Polyline> = new Option<Polyline>('polyline', undefined);
    private _polygon: Option<Polygon> = new Option<Polygon>('polygon', undefined);
    private _buffer: Option<Buffer> = new Option<Buffer>('buffer', undefined);
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
    private _callback: Option<JSONP> = new Option<JSONP>('callback', undefined);
    // ────────────────────────────────────────────────────────────────────────────────
    
        
    constructor() {
        super();
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

    reset() {
        this._user = new Option<string>('user', '');
        this._group = new Option<Array<string>>('group', []);
        this._layers = new Option<Array<string>>('layers', []);
        this._keywords = new Option<string>('keywords', '');
        this._method = new Option<Method>('method', Method.FULL);
        this._scope = new Option<string>('scope', '_FULLTEXT');
        this._groupBy = new Option<string>('groupBy', '');
        this._bounds = new Option<Bounds>('bounds', undefined);
        this._location = new Option<Location>('location', undefined);
        this._polyline = new Option<Polyline>('polyline', undefined);
        this._polygon = new Option<Polygon>('polygon', undefined);
        this._buffer = new Option<Buffer>('buffer', undefined);
        this._filterCustom = new Option<string>('filterCustom', '');
        this._sortBy = new Option<string>('sortBy', '');
        this._pageIndex = new Option<number>('pageIndex', 0);
        this._pageSize = new Option<number>('pageSize', 20);
        this._limit = new Option<number>('limit', 512);
        this._callback = new Option<JSONP>('callback', undefined);
    }

    private _throwSetNameException(name: string) {
        throw new Error(`set的Option的key值必须是${name}`);
    }

}