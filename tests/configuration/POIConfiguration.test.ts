import POIConfiguration, { Method, Type } from '../../src/configuration/POIConfiguration';
import Option from '../../src/option/Option';
import Configuration from '../../src/configuration/Configuration';

describe('POI 参数配置测试', () => {

    const cg = new POIConfiguration();

    test('构造测试', () => { 
        expect(cg).toBeInstanceOf(POIConfiguration);
    });

    test('构造测试 -- options 属性', () => { 
        expect(cg.options).not.toBeUndefined();
        expect(cg.options).toBeInstanceOf(Map);
        expect(cg.options.size).toBe(19);
    });

    test('property accessors 测试', () => { 
        testProperty(cg);
    });

    test('reset() 测试', () => { 
        expect(cg.reset()).toBeInstanceOf(POIConfiguration);
        testProperty(cg);
    });

    test('getParams() 默认测试', () => { 
        expect(cg.getParams()).toBe('method=FULL&type=FQ&scope=_FULLTEXT&pageIndex=0&pageSize=20&limit=512');
    });

    test('getParams() 关键字测试1', () => { 
        cg.reset();
        (cg.keywords as Option<string>).value = '北京大学';
        expect(cg.getParams()).toBe('keywords=北京大学&method=FULL&type=FQ&scope=_FULLTEXT&pageIndex=0&pageSize=20&limit=512');
    });

    test('getParams() 关键字测试2', () => { 
        cg.reset();
        (cg.keywords as Option<string>).value = '北京 同仁堂';
        expect(cg.getParams()).toBe('keywords=北京 同仁堂&method=FULL&type=FQ&scope=_FULLTEXT&pageIndex=0&pageSize=20&limit=512');
    });
    
});

function testProperty(config:POIConfiguration) {
    expect(config.user!.value).toBe('');
    expect(config.group!.value).toEqual([]);
    expect(config.layers!.value).toEqual([]);
    expect(config.keywords!.value).toBe('');
    expect(config.method!.value).toBe(Method.FULL);
    expect(config.type!.value).toBe(Type.FQ);
    expect(config.scope!.value).toBe('_FULLTEXT');
    expect(config.groupBy!.value).toBe('');
    expect(config.bounds!.value).toBeNull();
    expect(config.location!.value).toBeNull();
    expect(config.polyline!.value).toBeNull();
    expect(config.polygon!.value).toBeNull();
    expect(config.buffer!.value).toBeNull();
    expect(config.filterCustom!.value).toBe('');
    expect(config.sortBy!.value).toBe('');
    expect(config.pageIndex!.value).toBe(0);
    expect(config.pageSize!.value).toBe(20);
    expect(config.limit!.value).toBe(512);
    expect(config.callback!.value).toBeNull();
}