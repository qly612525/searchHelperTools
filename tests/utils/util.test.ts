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

describe('公交信息正则测试集', () => { 
    test('1 ==> true', () => { 
        expect(Util.regTransport('1')).toBeTruthy();
    });
    test('1路 ==> true', () => { 
        expect(Util.regTransport('1路')).toBeTruthy();
    });
    test('999 ==> true', () => { 
        expect(Util.regTransport('999')).toBeTruthy();
    });
    test('999路 ==> true', () => {
        expect(Util.regTransport('999路')).toBeTruthy();
    });
    test('运通103 ==> true', () => { 
        expect(Util.regTransport('运通103')).toBeTruthy();
    });
    test('运通103路 ==> true', () => { 
        expect(Util.regTransport('运通103路')).toBeTruthy();
    });
    test('专103 ==> true', () => { 
        expect(Util.regTransport('专103')).toBeTruthy();
    });
    test('专103路 ==> true', () => { 
        expect(Util.regTransport('专103路')).toBeTruthy();
    });
    test('夜5 ==> true', () => { 
        expect(Util.regTransport('夜5')).toBeTruthy();
    });
    test('夜5路 ==> true', () => { 
        expect(Util.regTransport('夜5路')).toBeTruthy();
    });
    test('机场巴士12 ==> true', () => { 
        expect(Util.regTransport('机场巴士12')).toBeTruthy();
    });
    test('机场巴士2号线 ==> true', () => { 
        expect(Util.regTransport('机场巴士2号线')).toBeTruthy();
    });
    test('哈哈09路 ==> false', () => { 
        expect(Util.regTransport('哈哈09路')).toBeFalsy();
    });
    test('公交车 ==> false', () => { 
        expect(Util.regTransport('公交车')).toBeFalsy();
    });
});