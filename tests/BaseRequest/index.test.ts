import BaseRequest from '../../src/BaseRequest/index';
import Configuration from '../../src/Configuration/index';
import Option from '../../src/Option/index';

describe('基础请求类测试套件', () => { 
    
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

    test('get request test', async () => { 
        request.url = 'http://127.0.0.1:8080/request';
        const response = await request.get();
        expect(response).toEqual({ 'test': '34567' });
    });
});