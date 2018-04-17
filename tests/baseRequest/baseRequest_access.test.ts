import BaseRequest from '../../src/baseRequest/BaseRequest';
import Configuration from '../../src/configuration/Configuration';
import Option from '../../src/option/Option';

describe('BaseResquest ==> 属性测试套件', () => {

    let request: BaseRequest = new BaseRequest();

    test('get config test', () => {
        expect.assertions(2);
        expect(request.config).not.toBeUndefined();
        expect(request.config).toBeInstanceOf(Configuration);
    });

    test('get url test', () => {
        expect(request.url).toEqual('');
    });

    test('set url test', () => {
        request.url = 'http://127.0.0.1:8080/request';
        expect(request.url).toEqual('http://127.0.0.1:8080/request');
    });

    test('get axios test', () => { 
        expect(request.axios).not.toBeUndefined();
        expect(request.axios).not.toBeNull();
    });

    test('reset() 基础测试', () => { 
        request.reset();
        const cg: Configuration = request.config;
        expect(cg).toBeInstanceOf(Configuration);
        expect(cg.options.size).toBe(0);
    });
});