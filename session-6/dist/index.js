'use strict';

require('babel-polyfill');

var _card = require('./components/card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p = new _card2.default('Hello, World!');
document.body.appendChild(p.render());