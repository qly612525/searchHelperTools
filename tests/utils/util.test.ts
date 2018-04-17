import Util from '../../src/utils/util';

describe('工具包测试集', () => { 

    test('getCodeByName() 测试', () => { 
        expect(Util.getCodeByName('北京')).toBe('110000');
    });

    test('getCodeByName() 空值或者不存在城市的异常测试', () => { 
        const exceptEmptyFn = () => Util.getCodeByName('');
        expect(exceptEmptyFn).toThrow('参数不能为空！');
        const exceptFailFn = () => Util.getCodeByName('北南');
        expect(exceptFailFn).toThrow('无法匹配的城市编码！');
    });
    
});