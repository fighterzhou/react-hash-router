import _regeneratorRuntime from 'babel-runtime/regenerator';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

import { history } from './h';

var Link = function (_React$Component) {
	_inherits(Link, _React$Component);

	function Link() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		_classCallCheck(this, Link);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.click = function () {
			_this.link.click();
		}, _this.handleClick = function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(ev) {
				var goon, _this$props, to, back, replace, path;

				return _regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								ev.persist();
								_context.next = 3;
								return _this.props.onClick(ev);

							case 3:
								goon = _context.sent;

								if (goon !== false && !ev.isDefaultPrevented()) {
									_this$props = _this.props, to = _this$props.to, back = _this$props.back, replace = _this$props.replace, path = _this$props.path;

									if (to) {
										history.navigateTo(to);
									} else if (back) {
										history.backTo(back);
									} else if (replace) {
										history.replaceWith(replace);
									} else if (path) {
										history.loads(path);
									}
									// history.navigateTo(this.props.to)
								}

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Link, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props = this.props,
			    title = _props.title,
			    id = _props.id,
			    className = _props.className,
			    style = _props.style,
			    children = _props.children;


			return React.createElement(
				'a',
				{
					id: id,
					className: className,
					style: style,
					title: title,
					onClick: this.handleClick,
					ref: function ref(_ref3) {
						_this3.link = _ref3;
					}
				},
				children
			);
		}
	}]);

	return Link;
}(React.Component);

Link.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	to: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.shape(),
	children: PropTypes.node,
	onClick: PropTypes.func
};
Link.defaultProps = {
	id: null,
	title: '',
	to: '',
	className: '',
	style: {},
	children: PropTypes.node,
	onClick: function onClick() {}
};
export default Link;