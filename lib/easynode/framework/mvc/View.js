'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var assert = require('assert');
var logger = using('easynode.framework.Logger').forFile(__filename);
var GenericObject = using('easynode.GenericObject');

(function () {

  /**
   * Class View
   *
   * @class easynode.framework.mvc.View
   * @extends easynode.GenericObject
   * @since 0.1.0
   * @author hujiabao
   * */

  var View = function (_GenericObject) {
    _inherits(View, _GenericObject);

    /**
     * 构造函数。
     *
     * @method 构造函数
     * @since 0.1.0
     * @author hujiabao
     * */

    function View() {
      _classCallCheck(this, View);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(View).call(this));
      // 调用super()后再定义子类成员。
    }

    /**
     * 获取渲染类型，json/html，影响response content-type。
     *
     * @method getContentType
     * @return {String} 返回body类型, json/html
     * @abstract
     * @since 0.1.0
     * @author hujiabao
     * */


    _createClass(View, [{
      key: 'getContentType',
      value: function getContentType() {
        throw new Error('Abstract Method');
      }

      /**
       * 渲染ActionResult。
       *
       * @method render
       * @param {easynode.framework.mvc.ActionResult} actionResult Action执行结果
       * @param {Object} opts 保留参数
       * @return {Object} 返回渲染结果，JSON对象或者String
       * @abstract
       * @since 0.1.0
       * @author hujiabao
       * */

    }, {
      key: 'render',
      value: function render(actionResult, opts) {
        throw new Error('Abstract Method');
      }
    }, {
      key: 'getClassName',
      value: function getClassName() {
        return EasyNode.namespace(__filename);
      }
    }]);

    return View;
  }(GenericObject);

  module.exports = View;
})();