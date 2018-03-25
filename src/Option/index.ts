export default class Option {
    private _key: string;
    private _value: string;

    constructor(key: string, value: string) {
        if (key === '' || value === '') throw OptionException();
        this._key = key;
        this._value = value;
    }

    get key(): string {
        return this._key;
    }

    set key(val: string) {
        if (val === '') throw OptionException();
        this._key = val;
    }

    get value(): string {
        return this._value;
    }

    set value(val: string) {
        if (val === '') throw OptionException();
        this._value = val;
    }
}

export function OptionException() {
    throw new Error('设置配置项的值不能为空字符串！');
}