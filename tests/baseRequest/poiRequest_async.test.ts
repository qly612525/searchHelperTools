import POIRequest from '../../src/baseRequest/POIRequest';
import axios from 'axios';
import POIConfiguration from '../../src/configuration/POIConfiguration';

jest.mock('axios');
axios.get = jest.fn()
    .mockReturnValueOnce({ data: { data: { name: 'poi async' } } })
    .mockReturnValueOnce({ data: { data: { name: 'poi async' } } })
    .mockRejectedValueOnce(new Error('GET请求抛出异常：获取数据失败！'))
    .mockReturnValueOnce({ data: { data: { name: 'poi async' } } })
    .mockReturnValueOnce({ data: { data: { name: 'poi async' } } })
    .mockRejectedValueOnce(new Error('GET请求抛出异常：获取数据失败！'));


describe('POIRequest 异步接口测试', () => { 

    const req = new POIRequest('http://10.0.10.162:8080/PGIS_S_Search/');

    test('fulltext() 默认参数测试', async () => { 
        const res = await req.fulltextQuery('天安门');
        expect(res).toEqual({ data: { name: 'poi async' } });
    });

    test('fulltext() 带其他全文参数测试', async () => { 
        expect.assertions(3);
        const res = await req.fulltextQuery('天安门', { pageSize: 50 });
        const config = req.config as POIConfiguration;
        expect(config.keywords!.value).toBe('天安门');
        expect(config.pageSize!.value).toBe(50);
        expect(res).toEqual({ data: { name: 'poi async' } });
    });

    test('fulltext() 异常测试', async () => { 
        const error = await req.fulltextQuery('天安门');
        expect(error.message).toBe('GET请求抛出异常：获取数据失败！');
    });

    test('fulltext() 空文本异常', async () => {
        const error = await req.fulltextQuery('');
        expect(error.message).toBe('请求参数--关键字不能为空！');
    });

    test('spell() 默认参数测试', async () => {
        const res = await req.spellQuery('天');
        expect(res).toEqual({ data: { name: 'poi async' } });
    });

    test('spell() 带其他全文参数测试', async () => {
        expect.assertions(3);
        const res = await req.spellQuery('天', { pageSize: 50 });
        const config = req.config as POIConfiguration;
        expect(config.keywords!.value).toBe('天');
        expect(config.pageSize!.value).toBe(50);
        expect(res).toEqual({ data: { name: 'poi async' } });
    });

    test('spell() 异常测试', async () => {
        const error = await req.spellQuery('天');
        expect(error.message).toBe('GET请求抛出异常：获取数据失败！');
    });

    test('spell() 空文本异常', async () => {
        const error = await req.spellQuery('');
        expect(error.message).toBe('请求参数--关键字不能为空！');
    });

});