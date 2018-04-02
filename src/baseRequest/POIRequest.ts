import BaseRequest from './BaseRequest';
import POIConfiguration from '../configuration/POIConfiguration';
import axios, { AxiosResponse } from 'axios';

export default class POIRequest extends BaseRequest {

    constructor(url: string) {
        super(url);
        this._configuration = new POIConfiguration();
    }

    async get() {
        if (!this.checkConfig()) {
            throw new Error('url为空或者配置信息有错误！');
        }

        let response: AxiosResponse<any>;

        try {
            const url = this.url;
            const paramstring = this._configuration.getParams();
            response = await axios.get(url + '?' + paramstring);
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
            const url = this.url;
            const paramstring = this._configuration.getParams();
            response = await axios.post(url + '?' + paramstring, data);
        } catch (e) {
            throw new Error(`POST请求抛出异常：${e}`);
        }

        return response.data;
    }

}