import Option from "../Option/index";

export default class Configuration {

    private _options: Array<Option>;

    constructor() {
        this._options = [];
    }

    push(op: Option): void{
        this._options.push(op);
    }

    remove(op: Option): void{
        let delIndex: number = 0;
        this._options.map((p, i) => {
            if (p === op) delIndex = i;
        });
        this._options.splice(delIndex, 1);
    }
}