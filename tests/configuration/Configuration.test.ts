import Configuration from '../../src/configuration/Configuration';
import Option from '../../src/option/Option';

describe('Configuration 测试套件', () => {

    test('正常构建', () => { 
        const cg = new Configuration();
        expect(cg.getLength()).toBe(0);
    });

    let cgWithOptions: Configuration;
    beforeAll(() => { 
        cgWithOptions = new Configuration();
        cgWithOptions.push(new Option('KEY1', 'VALUE1'));
        cgWithOptions.push(new Option('KEY2', 'VALUE2'));
        cgWithOptions.push(new Option('KEY3', 'VALUE3'));
    });

    test('push a Option test', () => {
        cgWithOptions.push(new Option('KEY4', 'VALUE4'));
        expect(cgWithOptions.getLength()).toBe(4);
        expect(cgWithOptions.get('KEY4')).toBe('VALUE4');
    });

    test('remove a Option test', () => { 
        cgWithOptions.remove('KEY4');
        expect(cgWithOptions.getLength()).toBe(3);
        expect(cgWithOptions.getItem(2).value).toBe('VALUE3');
    });

});