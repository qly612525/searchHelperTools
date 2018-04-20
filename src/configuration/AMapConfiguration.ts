import Option from '../option/Option';
import Configuration from './Configuration';



export default class AMapConfiguration extends Configuration {
    
    private _ak: string;

    constructor(ak: string) {
        
        super();
        if (!ak) throw new Error('ak 为必需项！');
        this._ak = ak;

        this._options.set('q', new Option<string>('q', ''));
        this._options.set('scope', new Option<number>('scope', 1));
        this._options.set('type', new Option<string>('type', ''));
        this._options.set('page_size', new Option<number>('page_size', 10));
        this._options.set('page_num', new Option<number>('page_num', 1));
        this._options.set('region', new Option<string>('region', ''));
        this._options.set('output', new Option<string>('output', 'json'));
    }

    //
    // ─── PROPERTY ACCESSOR ──────────────────────────────────────────────────────────
    //

    get q(): Option<string> | undefined {
        return this._options.get('q');
    }

    get scope(): Option<number> | undefined {
        return this._options.get('scope');
    }

    get type(): Option<string> | undefined {
        return this._options.get('type');
    }

    get page_size(): Option<number> | undefined {
        return this._options.get('page_size');
    }

    get page_num(): Option<number> | undefined {
        return this._options.get('page_num');
    }

    get region(): Option<string> | undefined {
        return this._options.get('region');
    }

    get output(): Option<string> | undefined {
        return this._options.get('output');
    }

    // ────────────────────────────────────────────────────────────────────────────────

    //
    // ─── OVERRIDE FUNCTIONS ─────────────────────────────────────────────────────────
    //

    reset(): AMapConfiguration {
        this.q!.value = '';
        this.scope!.value = 1;
        this.type!.value = '';
        this.page_size!.value = 10;
        this.page_num!.value = 1;
        this.region!.value = '';
        this.output!.value = 'json';
        return this;
    }

    getParams(): string {
        let val: string[] = [];
        const ops = this._options;
        for (const [k, op] of ops) {
            let isJoin = true;
            if (op.value === null) {
                isJoin = false;
            } else if (op.value === '') {
                isJoin = false;
            } else if (((op.value) as Array<string>).length === 0) {
                isJoin = false;
            }

            if (isJoin) {
                val.push(op.key + '=' + op.value);
            }
        }

        val.push('ak=' + this._ak);
        return val.join('&');
    }

    // ────────────────────────────────────────────────────────────────────────────────

}