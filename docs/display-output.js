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
exports.CalcDisplay = void 0;
var lit_element_js_module_1 = require("https://unpkg.com/lit-element/lit-element.js?module");
var CalcDisplay = /** @class */ (function (_super) {
    __extends(CalcDisplay, _super);
    function CalcDisplay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = "black";
        _this.textColor = "white";
        _this.value = "";
        return _this;
    }
    // Render element DOM by returning a `lit-html` template.
    CalcDisplay.prototype.render = function () {
        return lit_element_js_module_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<div id=\"base\" style=\"background-color: ", ";\">\n      <div id=\"text-display\" style=\"color: ", ";\">\n        ", "\n      </div>\n    </div>"], ["<div id=\"base\" style=\"background-color: ", ";\">\n      <div id=\"text-display\" style=\"color: ", ";\">\n        ", "\n      </div>\n    </div>"])), this.color, this.textColor, this.value || "0");
    };
    CalcDisplay.styles = lit_element_js_module_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    #base {\n      background-color: black;\n      text-align: end;\n      display: inline-block;\n      margin: var(--base-padding);\n      width: calc(100% - calc(var(--base-padding) * 2));\n      border-bottom: 2px solid black;\n    }\n\n    #text-display {\n      color: white;\n      margin: 0px;\n      padding-top: 40px;\n      padding-right: 10px;\n      padding-bottom: 10px;\n      font-size: 36px;\n    }\n  "], ["\n    #base {\n      background-color: black;\n      text-align: end;\n      display: inline-block;\n      margin: var(--base-padding);\n      width: calc(100% - calc(var(--base-padding) * 2));\n      border-bottom: 2px solid black;\n    }\n\n    #text-display {\n      color: white;\n      margin: 0px;\n      padding-top: 40px;\n      padding-right: 10px;\n      padding-bottom: 10px;\n      font-size: 36px;\n    }\n  "])));
    __decorate([
        lit_element_js_module_1.property()
    ], CalcDisplay.prototype, "color", void 0);
    __decorate([
        lit_element_js_module_1.property()
    ], CalcDisplay.prototype, "textColor", void 0);
    __decorate([
        lit_element_js_module_1.property()
    ], CalcDisplay.prototype, "value", void 0);
    CalcDisplay = __decorate([
        lit_element_js_module_1.customElement("display-output")
    ], CalcDisplay);
    return CalcDisplay;
}(lit_element_js_module_1.LitElement));
exports.CalcDisplay = CalcDisplay;
var templateObject_1, templateObject_2;
//# sourceMappingURL=display-output.js.map