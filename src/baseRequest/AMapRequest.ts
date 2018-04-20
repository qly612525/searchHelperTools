import Option from '../option/Option';
import BaseRequest from './BaseRequest';
import AMapConfiguration from '../configuration/AMapConfiguration';
import AMapParser from '../parser/amap';
import { AxiosRequestConfig } from 'axios';

interface IConfig {
    [key:string]: string | number;
}

export default class AMapRequest extends BaseRequest {

    constructor(url: string, ak:string, config?: AxiosRequestConfig) {
        super(url, config);
        this._configuration = new AMapConfiguration(ak);
    }

    async keywordsQuery(kds: string, config?: IConfig) { 
        const proxy = this.config as AMapConfiguration;
        const options = proxy.options;

        if (kds === undefined || kds === '') return new Error('请求参数--关键字不能为空！');

        if (config) {
            Object.keys(config).map((k) => {
                const op: Option<any> | undefined = options.get(k);
                if (op) {
                    op.value = config[k];
                }
            });
        }

        proxy.q!.value = kds;

        const result = await this.get();
        return new AMapParser(result);
    }

}