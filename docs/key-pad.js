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
exports.CalcKeyPad = void 0;
var lit_element_js_module_1 = require("https://unpkg.com/lit-element/lit-element.js?module");
var CalcKeyPad = /** @class */ (function (_super) {
    __extends(CalcKeyPad, _super);
    function CalcKeyPad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.accentColor = "blue";
        _this.textColor = "white";
        _this.actionColor = "black";
        _this.actionTextColor = "white";
        return _this;
    }
    // Render element DOM by returning a `lit-html` template.
    CalcKeyPad.prototype.render = function () {
        return lit_element_js_module_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject([" <div id=\"base\">\n      <keypad-input\n        number=\"7\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"8\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"9\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"4\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"5\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"6\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"1\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"2\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"3\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"0\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\".\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"=\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n    </div>"], [" <div id=\"base\">\n      <keypad-input\n        number=\"7\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"8\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"9\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"4\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"5\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"6\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"1\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"2\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"3\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"0\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\".\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n      <keypad-input\n        number=\"=\"\n        color=\"", "\"\n        textColor=\"", "\"\n      ></keypad-input>\n    </div>"])), this.accentColor, this.textColor, this.accentColor, this.textColor, this.accentColor, this.textColor, this.accentColor, this.textColor, this.accentColor, this.textColor, this.accentColor, this.textColor, this.accentColor, this.textColor, this.accentColor, this.textColor, this.accentColor, this.textColor, this.accentColor, this.textColor, this.accentColor, this.textColor, this.actionColor, this.actionTextColor);
    };
    CalcKeyPad.styles = lit_element_js_module_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    #base {\n      display: grid;\n      grid-template-columns: 33% 33% 33%;\n      padding-left: calc(var(--base-padding) / 2);\n      padding-right: calc(var(--base-padding) / 2);\n    }\n\n    keypad-input {\n      display: inline-grid;\n      margin: 5px;\n    }\n  "], ["\n    #base {\n      display: grid;\n      grid-template-columns: 33% 33% 33%;\n      padding-left: calc(var(--base-padding) / 2);\n      padding-right: calc(var(--base-padding) / 2);\n    }\n\n    keypad-input {\n      display: inline-grid;\n      margin: 5px;\n    }\n  "])));
    __decorate([
        lit_element_js_module_1.property()
    ], CalcKeyPad.prototype, "accentColor", void 0);
    __decorate([
        lit_element_js_module_1.property()
    ], CalcKeyPad.prototype, "textColor", void 0);
    __decorate([
        lit_element_js_module_1.property()
    ], CalcKeyPad.prototype, "actionColor", void 0);
    __decorate([
        lit_element_js_module_1.property()
    ], CalcKeyPad.prototype, "actionTextColor", void 0);
    CalcKeyPad = __decorate([
        lit_element_js_module_1.customElement("key-pad")
    ], CalcKeyPad);
    return CalcKeyPad;
}(lit_element_js_module_1.LitElement));
exports.CalcKeyPad = CalcKeyPad;
var templateObject_1, templateObject_2;
//# sourceMappingURL=key-pad.js.map