jest.mock('../../src/baseRequest/POIRequest');
import POIRequest from '../../src/baseRequest/POIRequest';

POIRequest.prototype.get = jest.fn()
    .mockImplementationOnce(() => {
    return { data: { name: 'poi async' } };
    })
    .mockImplementationOnce(() => {
        return new Error('获取数据失败！');
    });

POIRequest.prototype.post = jest.fn()
    .mockImplementationOnce(() => {
        return { data: { name: 'poi async post' } };
    })
    .mockImplementationOnce(() => { 
        return new Error('更新数据失败！');
    });

describe('POIRequest 异步接口测试', () => { 

    const req = new POIRequest('http://180.76.190.175:55504/EzPOISearchS/');

    test('GET 网络正常情况下测试', async () => {
        const result = { data: { name: 'poi async' } };
        const data = await req.get();
        expect(data).toEqual(result);
    });

    test('GET 网络异常情况下测试', async () => { 
        const error: Error = await req.get();
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('获取数据失败！');
    });

    test('POST 网络正常情况下测试', async () => { 
        const result = { data: { name: 'poi async post' } };
        const data = await req.post({ data: { name: 'post' } });
        expect(data).toEqual(result);
    });

    test('POST 网络异常情况下测试', async () => { 
        const error: Error = await req.post({ data: { name: 'post' } });
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('更新数据失败！');
    });

});