// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src-shared/HeadphoneCheck_Test/headphonesCheck.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Sijia Zhao (2020-2021) sijia.zhao@psy.ox.ac.uk
 * Read LICENSE file before using
 */
var HeadphonesCheck = /*#__PURE__*/function () {
  /**
   * Stylesheet
   */

  /**
   * Constructor
   *
   * @constructor
   * @param {object} [settings={}] - settings for the Headphones Check
   * @param {Function} [settings.callback] - optional callback function on completion
   * @param {string} [settings.volumeSound] - sound for volume adjustment
   * @param {string} [settings.volumeText] - override text to shown volume adjustment page
   * @param {string} [settings.checkType=huggins] - headphones check paradigm,`huggins` or `antiphase`, or `beat`
   * @param {int} [settings.checkVolume=1] - volume setting for check sounds, from `0` (quietest) to `1` (loudest)
   * @param {string} [settings.checkExample] - example check sound (`huggins` and `beat` checkType only)
   * @param {object[]} [settings.checkSounds] - sounds for headphones check. `object` format: `{answer: int, file: string}`
   * @param {int} [settings.trialCount=6] - number of headphones check trials
   * @param {int} [settings.passMark=6] - number of correct trials to pass the check
   * @param {int} [settings.maxAttempts=2] - max number of attempts
   */
  function HeadphonesCheck() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, HeadphonesCheck);

    _defineProperty(this, "_stylesheet", '@charset "utf-8";' + '.no-close .ui-dialog-titlebar-close {' + '  display: none;' + '}' + '#headphones-dialog {' + '  text-align: justify;' + '}' + '#headphones-dialog .center {' + '  text-align: center;' + '}' + '#headphones-dialog table {' + '  margin: 2em auto;' + '}' + '#headphones-dialog table,' + '#headphones-dialog table td {' + '  border: none;' + '  vertical-align: text-top;' + '}' + '#headphones-dialog td {' + '  padding: 0.5em;' + '}' + '#headphones-dialog .notice {' + '  text-align: center;' + '  font-weight: bold;' + '  margin: 2em 0;' + '}' + '#headphones-dialog .left {' + '  text-align: left !important;' + '}' + '#headphones-dialog hr {' + '  border: none;' + '  border-top: 1px solid #ddd;' + '  margin: 1em auto;' + '}' + 'button[data-helper-button] {' + '  width: 60px;' + '  height: 60px;' + '  border: 1px solid #c5c5c5;' + '  border-radius: 10px;' + '  background-color: #f6f6f6;' + '  margin: 0.5em;' + '  padding: 15px 0;' + '  text-align: center;' + '  cursor: pointer;' + '  color: #000;' + '}' + 'button[data-headphones-audio-control] {' + '  border: 1px solid #03a9f4;' + '}' + 'button[data-headphones-check-next] {' + '  width: auto;' + '  padding: 1em;' + '}' + '#headphones-dialog [data-headphones-check-target] {' + '  height: 10em;' + '}' + '#headphones-dialog table {' + '  margin-bottom: 3em;' + '}' + '#headphones-dialog td {' + '  width: 16em;' + '}' + '#headphones-dialog td span {' + '  font-weight: normal;' + '  display: block;' + '  margin-bottom: 1em;' + '}' + '#headphones-dialog td span.disabled {' + '  color: #c5c5c5;' + '}' + '#headphones-dialog [data-headphones-progress] {' + '  position: relative;' + '}' + '#headphones-dialog [data-headphones-progress] span {' + '  display: block;' + '  width: 100%;' + '  padding: 0.5em;' + '  position: absolute;' + '  text-align: center;' + '}' + 'button[data-helper-button]:hover {' + '  background-color: #f0f0f0;' + '}' + 'button[data-helper-button]:active {' + '  background-color: #eaeaea;' + '  border-width: 2px;' + '}' + 'button[data-helper-button][disabled],' + 'button[data-helper-button][disabled]:hover,' + 'button[data-helper-button][disabled]:active {' + '  background-color: #f6f6f6;' + '  border: 1px solid #c5c5c5;' + '  width: auto;' + '  padding: 1em;' + '  cursor: initial;' + '  color: #c5c5c5;' + '}' + 'button[data-headphones-check-response][disabled],' + 'button[data-headphones-check-response][disabled]:hover,' + 'button[data-headphones-check-response][disabled]:active {' + '  width: 60px;' + '}' + 'button[data-helper-button=\'selected\'] {' + '  border-color: #32CD32;' + '  background-color: #bbf8bb;' + '  font-weight: bold;' + '}' + 'button[data-helper-button=\'selected\']:hover {' + '  background-color: #b5f2b5;' + '}' + 'button[data-helper-button=\'selected\']:active {' + '  background-color: #afecaf;' + '  border-width: 2px;' + '}' + 'button[data-helper-button][disabled] img {' + '  display: none;' + '}' + 'button[data-helper-button] img {' + '  height: 30px;' + '}');

    this._settings = {
      callback: undefined,
      volumeSound: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_calibration.flac',
      volumeText: '<p class="notice">Please put on your headphones.</p>' + '<p>If you do not have headphones, you can use earbuds (headphones are preferred).</p>' + '<p>Click the <span style="color:#03a9f4;"><b>blue</b></span> button below to play a sound to check your volume.</p>',
      checkType: 'huggins',
      checkVolume: 1,
      checkExample: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_example_2.flac',
      checkSounds: [{
        answer: 1,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set1_1.flac'
      }, {
        answer: 2,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set1_2.flac'
      }, {
        answer: 3,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set1_3.flac'
      }, {
        answer: 1,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set2_1.flac'
      }, {
        answer: 2,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set2_2.flac'
      }, {
        answer: 3,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set2_3.flac'
      }, {
        answer: 1,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set3_1.flac'
      }, {
        answer: 2,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set3_2.flac'
      }, {
        answer: 3,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set3_3.flac'
      }, {
        answer: 1,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set4_1.flac'
      }, {
        answer: 2,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set4_2.flac'
      }, {
        answer: 3,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set4_3.flac'
      }, {
        answer: 1,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set5_1.flac'
      }, {
        answer: 2,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set5_2.flac'
      }, {
        answer: 3,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set5_3.flac'
      }, {
        answer: 1,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set6_1.flac'
      }, {
        answer: 2,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set6_2.flac'
      }, {
        answer: 3,
        file: 'src-shared/HeadphoneCheck_Test/stimuli_HugginsPitch/HugginsPitch_set6_3.flac'
      }],
      trialCount: 6,
      passMark: 6,
      maxAttempts: 2
    };
    this.htmlElements = {
      huggins: {
        instruction: '<p class="notice">Now we will check your headphones.</p>' + '<p>We need to make sure that your headphones are adjusted and are functioning correctly.</p>' + '<p>On the next few pages, each page will have a button that plays a sound. You can only play each sound once, so don\'t press the button until you are ready.</p>' + '<p>Each sound contains three noises with silent gaps in-between. One of the noises has a faint beep hidden within.</p>' + '<p>Your task is to decide which of the three noises contains the beep, and click on the correct button: <b>1</b>, <b>2</b>, or <b>3</b>.</p>' + '<p>Click the <span style="color:#03a9f4;"><b>blue</b></span> button below to play an example. The beep is hidden inside the second noise, so the answer is <b>2</b>.' + '    You can play the example as many times as you like.</p>' + '<div class="notice"><button type="button" data-helper-button data-headphones-audio-control data-headphones-audio-group="group1" disabled>Loading sounds...</button></div>' + '<span data-headphones-check-target></span>',
        checkPage: '<p class="notice">Remember, you can only play each sound once. Please listen carefully.</p>' + '<p class="center">Which noise contains the hidden beep? Is it <b>1</b>, <b>2</b>, or <b>3</b>?</p>'
      },
      beat: {
        instruction: '<p class="notice">Now we will check your headphones.</p>' + '<p>We need to make sure that your headphones are adjusted and are functioning correctly.</p>' + '<p>On the next few pages, each page will have a button that plays a sound. You can only play each sound once, so don\'t press the button until you are ready.</p>' + '<p>Each sound contains three noises with silent gaps in-between.</p>' + '<p>Your task is to decide which of the three noises was smoothest, and click on the correct button: <b>1</b>, <b>2</b>, or <b>3</b>.</p>' + '<p>Click the <span style="color:#03a9f4;"><b>blue</b></span> button below to play an example. The smoothest tone is the second noise, so the answer is <b>2</b>.' + '    You can play the example as many times as you like.</p>' + '<div class="notice"><button type="button" data-helper-button data-headphones-audio-control data-headphones-audio-group="group1" disabled>Loading sounds...</button></div>' + '<span data-headphones-check-target></span>',
        checkPage: '<p class="notice">Remember, you can only play each sound once. Please listen carefully.</p>' + '<p class="center">Which noise is the smoothest? Is it <b>1</b>, <b>2</b>, or <b>3</b>?</p>'
      },
      antiphase: {
        instruction: '<p class="notice">Now we will check your headphones.</p>' + '<p>We need to make sure that your headphones are adjusted and are functioning correctly.</p>' + '<p>On the next few pages, each page will have a button that plays a sound. You can only play each sound once, so don\'t press the button until you are ready.</p>' + '<p>Each sound contains three noises with silent gaps in-between.</p>' + '<p>Your task is to decide which of the three noises was quietest or softest, and click on the correct button: <b>1</b>, <b>2</b>, or <b>3</b>.</p>',
        checkPage: '<p class="notice">Remember, you can only play each sound once. Please listen carefully.</p>' + '<p class="center">Which noise is the quietest or softest? Is it <b>1</b>, <b>2</b>, or <b>3</b>?</p>'
      },
      reattempt: '<p class="notice">Unfortunately, you did not pass the headphones check.</p>' + '<p>Please make sure that you are in a quiet room, and that you are wearing your headphones correctly.</p>' + '<p>You may also try using a different pair of headphones. It is possible that the sound quality of the headphones was not good enough.</p>' + '<p class="notice">If you are sure that your headphones are working properly, you can try the headphones check again.</p>',
      audioProblem: '<p>Your browser cannot play the audio files used in this study.<br>This study will not work.</p>' + '<p>Please try again using a different web browser (Firefox and Chrome are recommended), and update your web browser to its newest version.</p>'
    };

    if (settings) {
      this._settings = Object.assign(this._settings, settings);
      this.callback = typeof this._settings.callback === 'function' ? this._settings.callback : function () {};

      if (this._settings.checkVolume > 1) {
        this._settings.checkVolume = 1;
      } else {
        if (this._settings.checkVolume < 0) {
          this._settings.checkVolume = 0;
        }
      }

      if (settings.checkType) {
        switch (settings.checkType.toLowerCase()) {
          case 'antiphase':
            this._settings.checkType = 'antiphase';
            break;

          case 'beat':
            this._settings.checkType = 'beat';
            break;

          case 'huggins':
          default:
            this._settings.checkType = 'huggins';
        }
      }

      if (this._settings.passMark > this._settings.trialCount) {
        this._settings.passMark = this._settings.trialCount;
      }
    }

    this.isHeadphones = undefined;
    this.attemptCount = 0;
    this.attemptRecord = {};
    var stylesheet = document.createElement('style');
    stylesheet.innerText = this._stylesheet;
    document.head.appendChild(stylesheet);
  }
  /**
   * Perform a volume check
   *
   * @member HeadphonesCheck.checkVolume
   * @param {Function} [callback] - (if set) callback on completion
   * @returns {Promise} resolved on completion
   */


  _createClass(HeadphonesCheck, [{
    key: "checkVolume",
    value: function checkVolume(callback) {
      var _this = this;

      if (typeof callback === 'function') {
        this.callback = callback;
      }

      var resolveCall;
      this._promise = new Promise(function (resolve) {
        return resolveCall = resolve;
      });
      this._promise.resolve = resolveCall;

      this._adjustVolume().then(function () {
        _this._promise.resolve();

        _this.callback();
      });

      return this._promise;
    }
    /**
     * Perform a headphones check (including a volume check)
     *
     * @member HeadphonesCheck.checkHeadphones
     * @param {Function} [callback] - (if set) callback on completion, with the result as argument: `true` or `false`
     * @param {boolean} [checkVolume=true] - whether to perform a volume check before the headphones check
     * @param {boolean} [repeat] - indicates if user has returned to the checkVolume page, so enable the "I have finished..." button
     * @returns {Promise} fulfilled with the result of the headphones check (pass: resolve, fail: reject)
     */

  }, {
    key: "checkHeadphones",
    value: function checkHeadphones(callback) {
      var _this2 = this;

      var checkVolume = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var repeat = arguments.length > 2 ? arguments[2] : undefined;
      console.log('checkheadphones');

      if (typeof callback === 'function') {
        this.callback = callback;
      }

      this._checkVolume = checkVolume;
      console.log(checkVolume);

      if (this._checkVolume) {
        var promise = this._adjustVolume();

        if (repeat) {
          $('button:contains("finished")').button('option', 'disabled', false);
        }

        promise.then(function () {
          _this2._instruction();
        });
      } else {
        this._instruction();
      }

      if (!this._promise || this._promise.fulfilled === true) {
        var resolveCall, rejectCall;
        this._promise = new Promise(function (resolve, reject) {
          resolveCall = resolve;
          rejectCall = reject;
        });
        this._promise.resolve = resolveCall;
        this._promise.reject = rejectCall;
      }

      return this._promise;
    }
    /**
     * Volume adjustment page
     * @private
     * @member HeadphonesCheck._adjustVolume
     * @return {Promise}
     */

  }, {
    key: "_adjustVolume",
    value: function _adjustVolume() {
      var html = this._settings.volumeText + '<div class="notice">' + '<button type="button" data-helper-button data-headphones-audio-control data-headphones-audio-group="group1" disabled>Loading sounds...</button>' + '<audio data-headphones-audio-group="group1" data-headphones-volume="1" preload="auto" loop><source src="' + this._settings.volumeSound + '">' + this.htmlElements.audioProblem + '</audio>' + '</div>' + '<p>If you do not adjust your volume correctly, you will not be able to successfully complete the study, and the study may stop before completion.</p>';

      var promise = this._createDialog({
        content: html,
        title: 'Adjust your sound volume',
        yes: 'I have finished adjusting my sound volume'
      });

      this._createPlayer('button:contains("finished")');

      return promise;
    }
    /**
     * Instructions page
     * @private
     * @member HeadphonesCheck._instruction
     */

  }, {
    key: "_instruction",
    value: function _instruction() {
      var _this3 = this;

      var html = this.htmlElements[this._settings.checkType].instruction + '<p class="notice">Remember, from now on, you can only play each sound once.<br>Please listen carefully and choose your answer.</p>' + '<p class="notice">Are you ready?</p>';

      var promise = this._createDialog({
        content: html,
        title: 'Headphones check',
        yes: 'I am ready to begin',
        back: 'Back'
      });

      if (this._settings.checkType === 'huggins' || this._settings.checkType === 'beat') {
        $('span[data-headphones-check-target]').html('<audio data-headphones-audio-group="group1" data-headphones-volume="' + this._settings.checkVolume + '" preload="auto"><source src="' + this._settings.checkExample + '">' + this.htmlElements.audioProblem + '</audio>');

        this._createPlayer('button:contains("ready")');
      }

      promise.then(function () {
        _this3._performCheck();
      }, function () {
        void _this3.checkHeadphones(undefined, _this3._checkVolume, true);
      });
    }
    /**
     * Offer another attempt, if allowed by settings
     * @private
     * @member HeadphonesCheck._offerReattempt
     */

  }, {
    key: "_offerReattempt",
    value: function _offerReattempt() {
      var _this4 = this;

      var html = this.htmlElements.reattempt;

      if (+this.attemptCount === this._settings.maxAttempts - 1) {
        html += '<p class="notice">If you do not pass on your next attempt, the study cannot continue.</p>';
      }

      this._createDialog({
        content: html,
        title: 'Headphones check failed',
        yes: 'Try again',
        color: '#FFA500'
      }).then(function () {
        _this4._instruction();
      });
    }
    /**
     * Perform the headphones check
     * @private
     * @member HeadphonesCheck._performCheck
     */

  }, {
    key: "_performCheck",
    value: function _performCheck() {
      var _this5 = this;

      var html = this.htmlElements[this._settings.checkType].checkPage + '<div class="center" data-headphones-check-target></div>' + '<hr><div data-headphones-progress><span></span></div>';

      var promise = this._createDialog({
        content: html,
        title: 'Headphones check',
        yes: 'Continue'
      });

      $('button:contains("Continue")').button('option', 'disabled', true).css('visibility', 'hidden');

      this._trialHandler(this._settings.trialCount);

      promise.then(function () {
        if (_this5.isHeadphones) {
          _this5._promise.resolve();

          _this5._promise.fulfilled = true;

          _this5.callback(true);
        } else {
          if (_this5.attemptCount < _this5._settings.maxAttempts) {
            _this5._offerReattempt();
          } else {
            _this5._promise.reject();

            _this5._promise.fulfilled = true;

            _this5.callback(false);
          }
        }
      });
    }
    /**
     * Display individual headphones check trials
     * @private
     * @member HeadphonesCheck._trialHandler
     * @param {int} remaining
     * @param {int} current
     */

  }, {
    key: "_trialHandler",
    value: function _trialHandler(remaining) {
      var _this6 = this;

      var current = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      $('[data-headphones-check-target]').empty();

      if (!current) {
        current = 1;
        this.attemptCount++;
        this._currentRecord = {};
        this._currentRecord.trials = [];
        this._currentRecord.numberCorrect = 0;
        this._stimuli = this._shuffle(_toConsumableArray(this._settings.checkSounds));
        this._stimuli.index = 0;
      }

      if (remaining <= 0) {
        this._currentRecord.isHeadphones = this._currentRecord.numberCorrect >= this._settings.passMark;
        this.isHeadphones = this._currentRecord.isHeadphones;
        this.attemptRecord[this.attemptCount] = this._currentRecord;
        $('button:contains("Continue")').button('option', 'disabled', false).css('visibility', 'visible').trigger('click');
        return;
      }

      $('#headphones-dialog').dialog('option', 'title', 'Headphones check (' + current + ' of ' + this._settings.trialCount + ')');
      $('[data-headphones-progress]').progressbar({
        max: this._settings.trialCount,
        value: current
      }).children('span').html('Progress: ' + current + '/' + this._settings.trialCount);

      if (current > this._stimuli.length) {
        this._shuffle(this._stimuli);

        this._stimuli.index = 0;
      }

      var trialData = this._stimuli[this._stimuli.index++];
      console.log('createTrial');

      this._createTrial(trialData.file).then(function (response) {
        if (+response === trialData.answer) {
          _this6._currentRecord.numberCorrect++;
        }

        _this6._currentRecord.trials.push({
          answer: trialData.answer,
          file: trialData.file,
          response: response,
          correct: +response === trialData.answer
        });

        _this6._trialHandler(--remaining, ++current);
      });
    }
    /**
     * Creates individual headphones check trials
     * @private
     * @member HeadphonesCheck._createTrial
     * @param {string} soundFile
     * @return {Promise}
     */

  }, {
    key: "_createTrial",
    value: function _createTrial(soundFile) {
      console.log(soundFile);
      var html = '<table><tr>' + '<td>' + '<span data-headphones-check-stage="1">Listen to the sound</span>' + '<button type="button" data-helper-button data-headphones-audio-control data-headphones-audio-group="group1" disabled>Loading sound...</button>' + '</td>' + '<td>' + '<span class="disabled" data-headphones-check-stage="2">choose your answer</span>' + '<button type="button" data-headphones-check-response="1" data-helper-button disabled>1</button>' + '<button type="button" data-headphones-check-response="2" data-helper-button disabled>2</button>' + '<button type="button" data-headphones-check-response="3" data-helper-button disabled>3</button>' + '</td>' + '<td>' + '<span class="disabled" data-headphones-check-stage="3">and continue to the next sound</span>' + '<button type="button" data-helper-button data-headphones-check-next disabled>Confirm and continue</button>' + '</td>' + '</tr></table>' + '<audio data-headphones-audio-group="group1" data-headphones-volume="' + this._settings.checkVolume + '" preload="auto"><source src="' + soundFile + '">' + this.htmlElements.audioProblem + '</audio>';
      $('[data-headphones-check-target]').html(html);
      var audioSelector = $('audio[data-headphones-audio-group]');
      var audioCount = audioSelector.length;
      return new Promise(function (resolve) {
        audioSelector.on('canplaythrough', function () {
          if (--audioCount <= 0) {
            $('button[data-headphones-audio-control]').html('<img alt="Play" src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 31.7 31.9\'%3E%3Cpath d=\'M8.6,0.5C6.8-0.6,5.2,0.2,5.2,2.4v27c0,2.2,1.5,3.1,3.4,1.9L30.3,18c1.9-1.2,1.9-3,0-4.2L8.6,0.5z\' fill=\'%2303A9F4\'/%3E%3C/svg%3E">').prop('disabled', false).on('click', function () {
              $(this).prop('disabled', true).html('Playing...');
              var audioElements = $('audio[data-headphones-audio-group=' + this.dataset.headphonesAudioGroup + ']');
              audioElements.on('ended', function () {
                $('button[data-headphones-audio-control]').html('Already played');
                $('span[data-headphones-check-stage]').addClass('disabled');
                $('span[data-headphones-check-stage="2"]').removeClass('disabled');
                $('button[data-headphones-check-response]').prop('disabled', false).on('click', function () {
                  $('span[data-headphones-check-stage="3"]').removeClass('disabled');
                  $('button[data-headphones-check-response]').attr('data-helper-button', '');
                  $(this).attr('data-helper-button', 'selected');
                  $('button:contains("continue")').prop('disabled', false).on('click', function () {
                    resolve($('button[data-headphones-check-response][data-helper-button="selected"]').attr('data-headphones-check-response'));
                  });
                });
              });

              var _iterator = _createForOfIteratorHelper(audioElements),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var audio = _step.value;
                  audio.volume = audio.dataset.headphonesVolume;
                  audio.play();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          }
        });
      });
    }
    /**
     * Create audio player and disable `selector` button until played
     * @private
     * @member HeadphonesCheck._createPlayer
     * @param {string} selector
     */

  }, {
    key: "_createPlayer",
    value: function _createPlayer(selector) {
      if (selector) {
        $(selector).button('option', 'disabled', true);
      }

      var audioSelector = $('audio[data-headphones-audio-group]');
      var audioCount = audioSelector.length;
      audioSelector.on('canplaythrough', function () {
        $(this).off('canplaythrough');

        if (--audioCount <= 0) {
          $('button[data-headphones-audio-control]').html('<img alt="Play" src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 31.7 31.9\'%3E%3Cpath d=\'M8.6,0.5C6.8-0.6,5.2,0.2,5.2,2.4v27c0,2.2,1.5,3.1,3.4,1.9L30.3,18c1.9-1.2,1.9-3,0-4.2L8.6,0.5z\' fill=\'%2303A9F4\'/%3E%3C/svg%3E">').prop('disabled', false).on('click', function () {
            var audioElements = $('audio[data-headphones-audio-group=' + this.dataset.headphonesAudioGroup + ']');

            var _iterator2 = _createForOfIteratorHelper(audioElements),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var audio = _step2.value;
                audio.volume = audio.dataset.headphonesVolume;

                if (audio.paused || audio.ended) {
                  audio.play();
                  $(this).css('border-color', '#f0f').children('img').attr('src', 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 17.7 31.9\'%3E%3Crect width=\'6.2\' height=\'31.9\' rx=\'3.1\' ry=\'3.1\' fill=\'%23f0f\'/%3E%3Crect x=\'11.4\' width=\'6.2\' height=\'31.9\' rx=\'3.1\' ry=\'3.1\' fill=\'%23f0f\'/%3E%3C/svg%3E').attr('alt', 'Pause');

                  if (selector) {
                    $(selector).button('option', 'disabled', false);
                  }
                } else {
                  audio.pause();
                  $(this).css('border-color', '#03a9f4').children('img').attr('src', 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 31.7 31.9\'%3E%3Cpath d=\'M8.6,0.5C6.8-0.6,5.2,0.2,5.2,2.4v27c0,2.2,1.5,3.1,3.4,1.9L30.3,18c1.9-1.2,1.9-3,0-4.2L8.6,0.5z\' fill=\'%2303A9F4\'/%3E%3C/svg%3E').attr('alt', 'Play');
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          });
        }
      }).on('ended', function () {
        $('button[data-headphones-audio-control]').css('border-color', '#03a9f4').children('img').attr('src', 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 31.7 31.9\'%3E%3Cpath d=\'M8.6,0.5C6.8-0.6,5.2,0.2,5.2,2.4v27c0,2.2,1.5,3.1,3.4,1.9L30.3,18c1.9-1.2,1.9-3,0-4.2L8.6,0.5z\' fill=\'%2303A9F4\'/%3E%3C/svg%3E').attr('alt', 'Play');
      });
    }
    /**
     * Shuffle an array
     * @private
     * @member HeadphonesCheck._shuffle
     * @param {[]} [array=[]]
     * @returns {[]}
     */

  }, {
    key: "_shuffle",
    value: function _shuffle() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref = [array[j], array[i]];
        array[i] = _ref[0];
        array[j] = _ref[1];
      }

      return array;
    }
    /**
     * Create a dialog with a `Promise` resolved/rejected by buttons, using JQueryUI
     * @private
     * @member HeadphonesCheck._createDialog
     * @param {{}} options
     * @param {string} [options.content=''] - dialog content
     * @param {string} [options.title='Headphones check'] - dialog title
     * @param {string} [options.color='#32CD32'] - title bar color
     * @param {string|undefined} [options.back=undefined] - 'Back' button text, or `undefined` for no button
     * @param {string|undefined} [options.yes=undefined] - 'Yes' button text, or `undefined` for no button
     * @return {Promise} Promise - `resolve()` by 'Yes' button, `reject('back')` by 'Back' button
     */

  }, {
    key: "_createDialog",
    value: function _createDialog() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var defaults = {
        content: '',
        title: 'Headphones check',
        color: '#32CD32'
      };
      options = Object.assign(defaults, options);
      return new Promise(function (resolve, reject) {
        function resizeToFit() {
          dialog.dialog('option', 'height', 'auto').dialog('option', 'position', {
            my: 'center',
            at: 'center',
            of: window
          });
          var maxHeight = document.documentElement.clientHeight - 40;

          if (dialog.outerHeight(true) > maxHeight) {
            dialog.dialog('option', 'height', maxHeight);
          }
        }

        $('body').append('<div id="headphones-dialog" title="' + options.title + '">' + options.content + '</div>');
        var dialog = $('#headphones-dialog');
        var dialogOptions = {
          width: 1000,
          height: 'auto',
          classes: {
            'ui-dialog': 'no-close'
          },
          modal: true,
          resizable: false,
          draggable: false,
          closeOnEscape: false,
          buttons: [],
          open: resizeToFit,
          close: function close() {
            $(window).off('resize', resizeToFit);
            $(this).dialog('destroy').remove();
          }
        };

        if (options.back) {
          dialogOptions.buttons.push({
            text: options.back,
            click: function click() {
              $(this).dialog('close');
              reject('back');
            }
          });
        }

        if (options.yes) {
          dialogOptions.buttons.push({
            text: options.yes,
            click: function click() {
              $(this).dialog('close');
              resolve(true);
            }
          });
        }

        dialog.dialog(dialogOptions).prev('.ui-dialog-titlebar').css('background', options.color);
        $(window).on('resize', resizeToFit);
      });
    }
  }]);

  return HeadphonesCheck;
}();

window.HeadphonesCheck = HeadphonesCheck;
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54999" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src-shared/HeadphoneCheck_Test/headphonesCheck.js"], null)
//# sourceMappingURL=/headphonesCheck.ad820d03.js.map