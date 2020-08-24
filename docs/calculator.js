"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCalculator = void 0;
var lit_element_js_module_1 = require("https://unpkg.com/lit-element/lit-element.js?module");
require("./keypad-input.js");
require("./key-pad.js");
require("./display-output.js");
var AppCalculator = /** @class */ (function (_super) {
    __extends(AppCalculator, _super);
    function AppCalculator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = "500px";
        _this.primaryColor = "red";
        _this.accentColor = "black";
        _this._staging = "";
        _this._value = "";
        _this._mode = "";
        _this._handleNumber = function (event) {
            var num = event.detail.value;
            event.stopPropagation();
            if (num === "=") {
                _this.calculate();
                return;
            }
            if (_this.value === "0") {
                _this.value = "";
            }
            if (num === "." && _this.value.includes(".")) {
                return;
            }
            _this.value += num;
        };
        _this.clear = function () {
            _this.value = "";
            _this._staging = "";
            _this._value = "";
            _this.mode = "";
        };
        _this.calculate = function () {
            var staging = Number(_this._staging || "0");
            var current = Number(_this._value || "0");
            var result = 0;
            // Calculate
            switch (_this.mode) {
                case "+":
                    result = staging + current;
                    break;
                case "-":
                    result = staging - current;
                    break;
                case "/":
                    result = staging / current;
                    break;
                case "*":
                    result = staging * current;
                    break;
                default:
                    break;
            }
            var output = result.toString();
            _this.value = output;
            _this._staging = output;
        };
        return _this;
    }
    AppCalculator.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        // @ts-ignore
        window.addEventListener("select-number", this._handleNumber);
    };
    AppCalculator.prototype.disconnectedCallback = function () {
        // @ts-ignore
        window.removeEventListener("select-number", this._handleNumber);
        _super.prototype.disconnectedCallback.call(this);
    };
    Object.defineProperty(AppCalculator.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (v) {
            var oldMode = this._mode;
            var oldVal = this.value;
            this._mode = v;
            // @ts-ignore
            this.requestUpdate("mode", oldMode);
            // @ts-ignore
            this.requestUpdate("value", oldVal);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppCalculator.prototype, "value", {
        get: function () {
            if (this.mode == "")
                return this._value;
            return this._staging;
        },
        set: function (v) {
            var oldVal = "";
            if (this.mode == "") {
                oldVal = this._value;
                this._value = v;
            }
            else {
                oldVal = this._staging;
                this._staging = v;
            }
            // @ts-ignore
            this.requestUpdate("value", oldVal);
        },
        enumerable: false,
        configurable: true
    });
    // Render element DOM by returning a `lit-html` template.
    AppCalculator.prototype.render = function () {
        var _this = this;
        return lit_element_js_module_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<div\n      id=\"base\"\n      style=\"width: ", "; background-color: ", ";\"\n    >\n      <display-output\n        value=\"", "\"\n        color=\"black\"\n        textColor=\"white\"\n      ></display-output>\n      <div id=\"actions\">\n        <button\n          @click=", "\n          ?disabled=", "\n        >\n          Clear\n        </button>\n        <button @click=\"", "\">+</button>\n        <button @click=\"", "\">-</button>\n        <button @click=\"", "\">/</button>\n        <button @click=\"", "\">*</button>\n      </div>\n      <key-pad></key-pad>\n    </div>"], ["<div\n      id=\"base\"\n      style=\"width: ", "; background-color: ", ";\"\n    >\n      <display-output\n        value=\"", "\"\n        color=\"black\"\n        textColor=\"white\"\n      ></display-output>\n      <div id=\"actions\">\n        <button\n          @click=", "\n          ?disabled=", "\n        >\n          Clear\n        </button>\n        <button @click=\"", "\">+</button>\n        <button @click=\"", "\">-</button>\n        <button @click=\"", "\">/</button>\n        <button @click=\"", "\">*</button>\n      </div>\n      <key-pad></key-pad>\n    </div>"])), this.width, this.primaryColor, this.value, this.clear, this.value === "" && this.mode === "", function () { return (_this.mode = "+"); }, function () { return (_this.mode = "-"); }, function () { return (_this.mode = "/"); }, function () { return (_this.mode = "*"); });
    };
    AppCalculator.styles = lit_element_js_module_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    #base {\n      border: 2px solid black;\n      padding-bottom: 20px;\n      --base-padding: 10px;\n    }\n\n    #actions {\n      padding-top: var(--base-padding);\n      padding-left: var(--base-padding);\n    }\n\n    button {\n      font-size: 17px;\n    }\n  "], ["\n    #base {\n      border: 2px solid black;\n      padding-bottom: 20px;\n      --base-padding: 10px;\n    }\n\n    #actions {\n      padding-top: var(--base-padding);\n      padding-left: var(--base-padding);\n    }\n\n    button {\n      font-size: 17px;\n    }\n  "])));
    __decorate([
        lit_element_js_module_1.property()
    ], AppCalculator.prototype, "width", void 0);
    __decorate([
        lit_element_js_module_1.property()
    ], AppCalculator.prototype, "primaryColor", void 0);
    __decorate([
        lit_element_js_module_1.property()
    ], AppCalculator.prototype, "accentColor", void 0);
    AppCalculator = __decorate([
        lit_element_js_module_1.customElement("app-calculator")
    ], AppCalculator);
    return AppCalculator;
}(lit_element_js_module_1.LitElement));
exports.AppCalculator = AppCalculator;
var templateObject_1, templateObject_2;
//# sourceMappingURL=calculator.js.map