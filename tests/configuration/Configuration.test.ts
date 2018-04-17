import Configuration from '../../src/configuration/Configuration';
import Option from '../../src/option/Option';

describe('Configuration 测试套件', () => {
    
    const cg = new Configuration();

    test('构造测试', () => {     
        expect(cg).toBeInstanceOf(Configuration);
    });

    test('get options 测试', () => { 
        expect.assertions(2);
        expect(cg.options).not.toBeUndefined();
        expect(cg.options).toBeInstanceOf(Map);
    });

    test('reset() 测试', () => { 
        expect(cg.reset()).toEqual(cg);
    });

    test('getParams() 测试', () => { 
        expect(cg.getParams()).toBe('');
    });

});