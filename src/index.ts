import Option from './option/Option';
import Configuration from './configuration/Configuration';
import POIConfiguration from './configuration/POIConfiguration';
import AMapConfiguration from './configuration/AMapConfiguration';
import BaseRequest from './baseRequest/BaseRequest';
import POIRequest from './baseRequest/POIRequest';
import AMapRequest from './baseRequest/AMapRequest';
import POIParser from './parser/poi';
import AMapParser from './parser/amap';

declare global {
    interface Window { zx: any; }
}

window.zx = { Option, Configuration, POIConfiguration, AMapConfiguration, BaseRequest, POIRequest, AMapRequest, POIParser, AMapParser };