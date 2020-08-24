var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, customElement, property, } from "https://unpkg.com/lit-element/lit-element.js?module";
let CalcDisplay = class CalcDisplay extends LitElement {
    constructor() {
        super(...arguments);
        this.color = "black";
        this.textColor = "white";
        this.value = "";
    }
    // Render element DOM by returning a `lit-html` template.
    render() {
        return html `<div id="base" style="background-color: ${this.color};">
      <div id="text-display" style="color: ${this.textColor};">
        ${this.value || "0"}
      </div>
    </div>`;
    }
};
CalcDisplay.styles = css `
    #base {
      background-color: black;
      text-align: end;
      display: inline-block;
      margin: var(--base-padding);
      width: calc(100% - calc(var(--base-padding) * 2));
      border-bottom: 2px solid black;
    }

    #text-display {
      color: white;
      margin: 0px;
      padding-top: 40px;
      padding-right: 10px;
      padding-bottom: 10px;
      font-size: 36px;
    }
  `;
__decorate([
    property()
], CalcDisplay.prototype, "color", void 0);
__decorate([
    property()
], CalcDisplay.prototype, "textColor", void 0);
__decorate([
    property()
], CalcDisplay.prototype, "value", void 0);
CalcDisplay = __decorate([
    customElement("display-output")
], CalcDisplay);
export { CalcDisplay };
//# sourceMappingURL=index.js.map