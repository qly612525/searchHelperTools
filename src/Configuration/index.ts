import Option from "../Option/index";


export default class Configuration {

    private _options: Array<Option>;

    constructor() {
        this._options = [];
    }

    getLength(): number {
        return this._options.length;
    }

    get(key: string): string|null {
        let val: string | null = null;
        const ops = this._options;
        ops.map((op: Option) => { 
            if (op.key === key) val = op.value;
        });

        if (val) return val;
        return null;
    }

    getItem(index: number): Option {
        const ops = this._options;
        return ops[index];
    }

    push(op: Option): void {
        this._options.push(op);
    }

    remove(key: string): void {
        let delIndex: number = 0;
        this._options.map((p, i) => {
            if (p.key === key) delIndex = i;
        });
        this._options.splice(delIndex, 1);
    }
}