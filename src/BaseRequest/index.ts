import 'whatwg-fetch';
import Confirguration from '../Configuration/index';
import Configuration from '../Configuration/index';

export default class BaseRequest {

    private _configuration: Confirguration;
    private _url: string;

    constructor(url?:string) {
        this._configuration = new Confirguration();
        this._url = url || '';
    }

    get config():Confirguration {
        return this._configuration;
    }

    set config(config: Configuration) {
        this._configuration = config;
    }

    get url(): string {
        return this._url;
    }

    set url(path: string) {
        this._url = path;
    }

    checkConfig() {
        if (this._url === '') return false;
        // 检测配置信息
        return true;
    }

    async get() {
        if (!this.checkConfig()) {
            throw new Error('url为空或者配置信息有错误！');
        }
        const opts = { method: 'GET' };
        let response = null;

        try {
            response = await fetch(this._url, opts);
        } catch (e) {
            throw new Error(`GET请求抛出异常：${e}`);
        }

        return response.json();
    }

    async post() {
        if (!this.checkConfig()) {
            throw new Error('url为空或者配置信息有错误！');
        }
        const opts = { method: 'POST' };
        let response = null;

        try {
            response = await fetch(this._url, opts);
        } catch (e) {
            throw new Error(`POST请求抛出异常：${e}`);
        }

        return response;
    }
}