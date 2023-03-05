/* This is a converter for zigbee2mqtt to support our custom device.
 * See https://www.zigbee2mqtt.io/advanced/support-new-devices/01_support_new_devices.html
 * for more info.
 */

const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const ota = require('zigbee-herdsman-converters/lib/ota');
const tuya = require('zigbee-herdsman-converters/lib/tuya');
const utils = require('zigbee-herdsman-converters/lib/utils');
const globalStore = require('zigbee-herdsman-converters/lib/store');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    zigbeeModel: ['RIGGAD'],
    model: 'RIGGAD',
    vendor: 'Nordic',
    description: 'RIGGAD with DIY brains!',
    fromZigbee: [fz.on_off, fz.ignore_basic_report, fz.temperature],
    toZigbee: [tz.on_off],
    exposes: [e.switch(), e.temperature()],
};

module.exports = definition;
