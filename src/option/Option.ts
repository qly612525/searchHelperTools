export default class Option<T> {
    private _key: string;
    private _value: T;

    constructor(key: string, value: T) {
        if (key === '') throw OptionException();
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

    get value(): T {
        return this._value;
    }

    set value(val: T) {
        this._value = val;
    }
}

export function OptionException() {
    throw new Error('设置配置项的值不能为空字符串！');
}