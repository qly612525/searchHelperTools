import axios, { AxiosResponse } from 'axios';

import Configuration from '../configuration/Configuration';

export default class BaseRequest {

    protected _configuration: Configuration;
    private _url: string;

    constructor(url?:string) {
        this._configuration = new Configuration();
        this._url = url || '';
    }

    get config():Configuration {
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

        let response: AxiosResponse<any>;

        try {
            response = await axios.get(this._url);
        } catch (e) {
            throw new Error(`GET请求抛出异常：${e}`);
        }
        
        return response.data;
    }

    async post(data: object) {

        if (!this.checkConfig()) {
            throw new Error('url为空或者配置信息有错误！');
        }

        let response: AxiosResponse<any>;

        try {
            response = await axios.post(this._url, data);
        } catch (e) {
            throw new Error(`POST请求抛出异常：${e}`);
        }
    
        return response.data;
    }
}