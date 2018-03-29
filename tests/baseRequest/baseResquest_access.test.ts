import BaseRequest from '../../src/baseRequest/BaseResquest';
import Configuration from '../../src/configuration/Configuration';
import Option from '../../src/option/Option';

describe('BaseResquest ==> 属性测试套件', () => {

    let request: BaseRequest;

    beforeEach(() => {
        request = new BaseRequest();
    });

    test('get config test', () => {
        expect(request.config.getLength()).toBe(0);
    });

    test('set config test', () => {
        const oldConfig = request.config;
        const config = new Configuration();
        const option = new Option('KEY1', 'VALUE1');
        config.push(option);
        request.config = config;
        expect(request.config).not.toEqual(oldConfig);
    });

    test('get url test', () => {
        expect(request.url).toEqual('');
    });

    test('set url test', () => {
        request.url = 'http://127.0.0.1:8080/request';
        expect(request.url).toEqual('http://127.0.0.1:8080/request');
    });

    test('get or post request when url is ""', () => {
        request.url = '';
        const isOk: boolean = request.checkConfig();
        expect(isOk).not.toBeTruthy();
    });
    
});