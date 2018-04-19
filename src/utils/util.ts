interface ICODE {
    [index: string]: string;
}

const codes: ICODE = {
    '北京': '110000'
};

export default class Util {

    static getCodeByName(name: string): string {
        if (name === undefined || name === '') throw new Error('参数不能为空！');
        if (!codes[name]) throw new Error('无法匹配的城市编码！');
        return codes[name];
    }

    static regTransport(text: string): boolean {
        const reg = /^(运通|专|夜|机场巴士)?\d+(路|号线)?$/g;
        if (text.match(reg)) return true;
        return false;
    }

} 