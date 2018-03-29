import Option, { OptionException } from '../../src/option/Option';

describe('Option类测试套件', () => { 

    test('正常构建：new Option("key","value")', () => {
        expect(new Option('key', 'value')).toBeDefined();
    });

    test('参数为空构建异常：new Option("", "")', () => { 
        expect(() => {
            new Option('', '')
        }).toThrow('设置配置项的值不能为空字符串！');
    });

    test('get key', () => { 
        const op = new Option('key', 'value');
        expect(op.key).toEqual('key');
    });

    test('get value', () => { 
        const op = new Option('key', 'value');
        expect(op.value).toEqual('value');
    });

    test('set key', () => { 
        const op = new Option('key', 'value');
        op.key = 'changed';
        expect(op.key).toEqual('changed');
    });

    test('set value', () => { 
        const op = new Option('key', 'value');
        op.value = 'changed';
        expect(op.value).toEqual('changed');
    });
});