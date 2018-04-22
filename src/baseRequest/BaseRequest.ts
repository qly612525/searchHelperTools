import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios';

import Configuration from '../configuration/Configuration';

export default class BaseRequest {

    protected _configuration: Configuration;
    private _url: string;
    private _axios: AxiosInstance;

    constructor(url?:string, config?: AxiosRequestConfig) {
        this._configuration = new Configuration();
        this._url = url || '';
        this._axios = config ? axios.create(config) : axios;
    }

    get config():Configuration {
        return this._configuration;
    }

    get url(): string {
        return this._url;
    }

    set url(path: string) {
        this._url = path;
    }

    get axios(): AxiosInstance {
        return this._axios;
    }

    reset() {
        this._configuration.reset();
    }

    async get(type?: any) {

        let response: AxiosResponse<any>;

        try {
            const url = this._url;
            const paramstring = this._configuration.getParams(type);
            response = await this._axios.get(url + '?' + paramstring);
        } catch (e) {
            return e;
        }

        return response.data;
    }

    async post(data: object) {

        let response: AxiosResponse<any>;

        try {
            const url = this._url;
            const paramstring = this._configuration.getParams();
            response = await this._axios.post(url + '?' + paramstring, data);
        } catch (e) {
            return e;
        }

        return response.data;
    }
}