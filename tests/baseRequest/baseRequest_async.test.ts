import Configuration from '../../src/configuration/Configuration';
import Option from '../../src/option/Option';
import BaseRequest from '../../src/baseRequest/BaseRequest';
import axios from 'axios';

jest.mock('axios');
axios.get = jest.fn()
    .mockReturnValueOnce({ data: { data: { name: '123' } } })
    .mockRejectedValueOnce(new Error('GET请求抛出异常：获取数据失败！'));

axios.post = jest.fn()
    .mockReturnValueOnce({ data: { data: { name: 'post123' } } })
    .mockRejectedValueOnce(new Error('POST请求抛出异常：更新数据失败！'));


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
        const error: Error = await request.get();
        expect(error.message).toBe('GET请求抛出异常：获取数据失败！');
    });

    test('post request test', async () => { 
        expect.assertions(1);
        const param = { data: { name: 'post' } };
        const result = await request.post(param);
        expect(result).toEqual({ data: { name: 'post123' } });
    });

    test('post request have a error test', async () => { 
        const param = { data: { name: 'post' } };
        const error: Error = await request.post(param);
        expect(error.message).toBe('POST请求抛出异常：更新数据失败！');
    });

});