'use strict';

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function to(type) {
    return function (target, parent, plugins, plugin) {
        target.type = type;
        innet__default['default'](target, parent, plugins, plugin);
    };
}

module.exports = to;
