import BaseRequest from '../../src/baseRequest/BaseResquest';
import Configuration from '../../src/configuration/Configuration';
import Option from '../../src/option/Option';

jest.mock('../../src/baseRequest/BaseResquest');

describe('BaseResquest ==> 异步接口测试套件', () => { 
    
    let request: BaseRequest;

    beforeEach(() => { 
        request = new BaseRequest();
        request.url = 'http://127.0.0.1:8080/request';
    });

    test('get request test', async () => { 
        expect.assertions(1);
        const result = await request.get();
        expect(result).toEqual({ data: { name: '123' } });
    });

    test('get request have a error test', async () => {
        expect.assertions(2);
        BaseRequest.prototype.get = jest.fn().mockImplementationOnce(() => { 
            return new Error('获取数据失败！');
        });
        const error: Error = await request.get();
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('获取数据失败！');
    });

    test('post request test', async () => { 
        expect.assertions(1);
        const param = { data: { name: 'post' } };
        const result = await request.post(param);
        expect(result).toEqual({ data: { name: 'post123' } });
    });

    test('post request have a error test', async () => { 
        expect.assertions(2);
        BaseRequest.prototype.post = jest.fn().mockImplementationOnce(() => { 
            return new Error('更新数据失败！');
        });
        const param = { data: { name: 'post' } };
        const error: Error = await request.post(param);
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('更新数据失败！');
    });

});