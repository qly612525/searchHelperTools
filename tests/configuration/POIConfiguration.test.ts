import POIConfiguration, { Method } from '../../src/configuration/POIConfiguration';
import Option from '../../src/option/Option';
import Configuration from '../../src/configuration/Configuration';

describe('POI 参数配置测试', () => {

    test('POIConfiguration类实例化测试', () => { 
        const config = new POIConfiguration();
        testProperty(config);
    });

    test('POIConfiguration类accessor处理器', () => { 
        const config = new POIConfiguration();

        expect(config.user.key).toBe('user');
        config.user.value = 'user_test';
        expect(config.user.value).toBe('user_test');

        expect(config.group.key).toBe('group');
        config.group.value = ['group_test'];
        expect(config.group.value).toEqual(['group_test']);

        expect(config.layers.key).toBe('layers');
        config.layers.value = ['layers_test'];
        expect(config.layers.value).toEqual(['layers_test']);

        expect(config.keywords.key).toBe('keywords');
        config.keywords.value = 'keywords_test';
        expect(config.keywords.value).toBe('keywords_test');

        expect(config.method.key).toBe('method');
        config.method.value = Method.ACC;
        expect(config.method.value).toEqual(Method.ACC);

        expect(config.scope.key).toBe('scope');
        config.scope.value = 'scope_test';
        expect(config.scope.value).toBe('scope_test');

        expect(config.groupBy.key).toBe('groupBy');
        config.groupBy.value = 'groupBy_test';
        expect(config.groupBy.value).toBe('groupBy_test');

        expect(config.bounds.key).toBe('bounds');
        config.bounds.value = [0, 0, 0, 0];
        expect(config.bounds.value).toEqual([0, 0, 0, 0]);

        expect(config.location.key).toBe('location');
        config.location.value = [0, 0];
        expect(config.location.value).toEqual([0, 0]);

        expect(config.polyline.key).toBe('polyline');
        config.polyline.value = [[0, 0], [1, 1]];
        expect(config.polyline.value).toEqual([[0, 0], [1, 1]]);

        expect(config.polygon.key).toBe('polygon');
        config.polygon.value = [[0, 0], [1, 1], [2, 2]];
        expect(config.polygon.value).toEqual([[0, 0], [1, 1], [2, 2]]);

        expect(config.buffer.key).toBe('buffer');
        config.buffer.value = 1000;
        expect(config.buffer.value).toBe(1000);

        expect(config.filterCustom.key).toBe('filterCustom');
        config.filterCustom.value = 'type: beijing';
        expect(config.filterCustom.value).toBe('type: beijing');

        expect(config.sortBy.key).toBe('sortBy');
        config.sortBy.value = '_DIST, _SCORE';
        expect(config.sortBy.value).toBe('_DIST, _SCORE');

        expect(config.pageIndex.key).toBe('pageIndex');
        config.pageIndex.value = 1;
        expect(config.pageIndex.value).toBe(1);

        expect(config.pageSize.key).toBe('pageSize');
        config.pageSize.value = 50;
        expect(config.pageSize.value).toBe(50);

        expect(config.limit.key).toBe('limit');
        config.limit.value = 3000;
        expect(config.limit.value).toBe(3000);

        expect(config.callback.key).toBe('callback');
        const cb = (t: any) => { t + 1; };
        config.callback.value = cb;
        expect(config.callback.value).toEqual(cb);
    });

    test('POIConfiguration类 => reset()', () => { 
        const config = new POIConfiguration();
        config.reset();
        testProperty(config);
    });
});

function testProperty(config:POIConfiguration) {
    expect(config).toBeInstanceOf(POIConfiguration);
    expect(config.user.key).toBe('user');
    expect(config.group.key).toBe('group');
    expect(config.layers.key).toBe('layers');
    expect(config.keywords.key).toBe('keywords');
    expect(config.method.key).toBe('method');
    expect(config.scope.key).toBe('scope');
    expect(config.groupBy.key).toBe('groupBy');
    expect(config.bounds.key).toBe('bounds');
    expect(config.bounds.value).toBeUndefined();
    expect(config.location.key).toBe('location');
    expect(config.location.value).toBeUndefined();
    expect(config.polyline.key).toBe('polyline');
    expect(config.polyline.value).toBeUndefined();
    expect(config.polygon.key).toBe('polygon');
    expect(config.polygon.value).toBeUndefined();
    expect(config.buffer.key).toBe('buffer');
    expect(config.buffer.value).toBeUndefined();
    expect(config.filterCustom.key).toBe('filterCustom');
    expect(config.sortBy.key).toBe('sortBy');
    expect(config.pageIndex.key).toBe('pageIndex');
    expect(config.pageSize.key).toBe('pageSize');
    expect(config.limit.key).toBe('limit');
    expect(config.callback.key).toBe('callback');
    expect(config.callback.value).toBeUndefined();
}