(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _RabbitAttack = require('./RabbitAttack');

var _RabbitAttack2 = _interopRequireDefault(_RabbitAttack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _RabbitAttack2.default();

// window.addEventListener('resize', () => {
//   game.scale.refresh();
// });
// game.scale.refresh();

},{"./RabbitAttack":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StateManager = require('./StateManager');

var _StateManager2 = _interopRequireDefault(_StateManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RabbitAttack = function (_Phaser$Game) {
  _inherits(RabbitAttack, _Phaser$Game);

  function RabbitAttack() {
    _classCallCheck(this, RabbitAttack);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RabbitAttack).call(this));

    _this.state.add('StateManager', _StateManager2.default, false);
    _this.state.start('StateManager');
    return _this;
  }

  return RabbitAttack;
}(Phaser.Game);

exports.default = RabbitAttack;

},{"./StateManager":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StateManager = function (_Phaser$State) {
  _inherits(StateManager, _Phaser$State);

  function StateManager() {
    _classCallCheck(this, StateManager);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(StateManager).apply(this, arguments));
  }

  _createClass(StateManager, [{
    key: 'init',
    value: function init() {
      // Sizing here
      this.game.scale.startFullScreen();
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.image('rabbit', 'rabbit.jpg');
    }
  }, {
    key: 'create',
    value: function create() {
      this.rabbit = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'rabbit');
      this.game.physics.enable(this.rabbit, Phaser.Physics.ARCADE);
    }
  }, {
    key: 'update',
    value: function update() {
      this.game.physics.arcade.moveToPointer(this.rabbit, 400);
    }
  }]);

  return StateManager;
}(Phaser.State);

exports.default = StateManager;

},{}]},{},[1]);
