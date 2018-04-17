import Option from '../option/Option';
import BaseRequest from './BaseRequest';
import POIConfiguration, { Type } from '../configuration/POIConfiguration';
import { AxiosRequestConfig } from 'axios';

interface IConfig {
    [key:string]: string | number;
}

export default class POIRequest extends BaseRequest {

    constructor(url: string, config?: AxiosRequestConfig) {
        super(url, config);
        this._configuration = new POIConfiguration();
    }

    fulltextQuery(kds: string, config?: IConfig) { 
        const proxy = this.config as POIConfiguration;
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

        // 关键字分隔，增加城市定位
        const kdsSplits: string[] = kds.split('');
        (proxy.keywords as Option<string>).value = kds;

        const result = this.get();
        return result;
    }
    
    spellQuery(kds: string, config?: IConfig) { 
        const proxy = this.config as POIConfiguration;
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

        (proxy.keywords as Option<string>).value = kds;
        (proxy.type as Option<Type>).value = Type.PY;

        const result = this.get();
        return result;
    }
    
    // groupQuery(category: string, config?: any) {

    // }

}