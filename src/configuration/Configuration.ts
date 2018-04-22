import Option from "../option/Option";


export default class Configuration {

    protected _options: Map<string, Option<any>>;

    constructor() {
        this._options = new Map();
    }

    get options(): Map<string, Option<any>> {
        return this._options;
    }

    reset(): Configuration {
        return this;
    }

    getParams(type? :any): string {
        return '';
    }

}