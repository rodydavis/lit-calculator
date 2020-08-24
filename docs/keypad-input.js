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
exports.CalcNumber = void 0;
var lit_element_js_module_1 = require("https://unpkg.com/lit-element/lit-element.js?module");
var CalcNumber = /** @class */ (function (_super) {
    __extends(CalcNumber, _super);
    function CalcNumber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.number = "0";
        _this.color = "black";
        _this.textColor = "white";
        return _this;
    }
    CalcNumber.prototype._onTap = function (e) {
        e.preventDefault();
        var event = new CustomEvent("select-number", {
            detail: { value: this.number },
            bubbles: true,
            cancelable: true,
        });
        // @ts-ignore
        window.dispatchEvent(event);
    };
    // Render element DOM by returning a `lit-html` template.
    CalcNumber.prototype.render = function () {
        return lit_element_js_module_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject([" <button\n      @click=\"", "\"\n      id=\"base\"\n      style=\"background-color: ", "; color: ", ";\"\n    >\n      ", "\n    </button>"], [" <button\n      @click=\"", "\"\n      id=\"base\"\n      style=\"background-color: ", "; color: ", ";\"\n    >\n      ", "\n    </button>"])), this._onTap, this.color, this.textColor, this.number);
    };
    CalcNumber.styles = lit_element_js_module_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    #base {\n      width: 100%;\n      height: 100%;\n      border-radius: 10px;\n      text-align: center;\n      float: left;\n    }\n\n    #base:hover {\n      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n    }\n\n    #base:active {\n      background-color: lightgrey;\n    }\n\n    button {\n      outline: 0 none;\n      color: white;\n      margin-top: 10px;\n      margin-bottom: 10px;\n      font-size: 20px;\n    }\n  "], ["\n    #base {\n      width: 100%;\n      height: 100%;\n      border-radius: 10px;\n      text-align: center;\n      float: left;\n    }\n\n    #base:hover {\n      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n    }\n\n    #base:active {\n      background-color: lightgrey;\n    }\n\n    button {\n      outline: 0 none;\n      color: white;\n      margin-top: 10px;\n      margin-bottom: 10px;\n      font-size: 20px;\n    }\n  "])));
    __decorate([
        lit_element_js_module_1.property()
    ], CalcNumber.prototype, "number", void 0);
    __decorate([
        lit_element_js_module_1.property()
    ], CalcNumber.prototype, "color", void 0);
    __decorate([
        lit_element_js_module_1.property()
    ], CalcNumber.prototype, "textColor", void 0);
    CalcNumber = __decorate([
        lit_element_js_module_1.customElement("keypad-input")
    ], CalcNumber);
    return CalcNumber;
}(lit_element_js_module_1.LitElement));
exports.CalcNumber = CalcNumber;
var templateObject_1, templateObject_2;
//# sourceMappingURL=keypad-input.js.map