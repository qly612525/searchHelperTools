import Option from './option/Option';
import Configuration from './configuration/Configuration';
import POIConfiguration from './configuration/POIConfiguration';
import BaseRequest from './baseRequest/BaseRequest';
import POIRequest from './baseRequest/POIRequest';
import POIParser from './parser/poi';

declare global {
    interface Window { zx: any; }
}

window.zx = { Option, Configuration, POIConfiguration, BaseRequest, POIRequest, POIParser };