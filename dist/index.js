'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

var DumbHuman = function DumbHuman() {
  _classCallCheck(this, DumbHuman);

  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  if (!_instanceof(this, DumbHuman)) {
    return new DumbHuman(options);
  }

  // '/Users/username', '/home/username'
  this.options = _lodash2.default.defaults(options, {
    configFile: ''
  });

  this.name = this.options.name;
};

exports.default = DumbHuman;