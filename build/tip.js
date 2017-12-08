'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyle = function getStyle(direction, size) {
  var style = {
    borderTopWidth: size,
    borderRightWidth: size,
    borderBottomWidth: size,
    borderLeftWidth: size,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent'
  };

  switch (direction) {
    case 'up':
      delete style.borderTopWidth;
      delete style.borderBottomColor;
      break;

    case 'right':
      delete style.borderRightWidth;
      delete style.borderLeftColor;
      break;

    case 'down':
      delete style.borderBottomWidth;
      delete style.borderTopColor;
      break;

    case 'left':
      delete style.borderLeftWidth;
      delete style.borderRightColor;
      break;
  }

  return style;
};

var Tip = function Tip(props) {
  var direction = props.direction;

  var size = props.size || 24;

  return _react2.default.createElement('div', {
    className: 'Popover-tip',
    style: _extends({
      borderStyle: 'solid',
      height: 0,
      width: 0
    }, getStyle(direction, size))
  });
};

exports.default = Tip;