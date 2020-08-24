var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, customElement, property, } from "https://unpkg.com/lit-element/lit-element.js?module";
let CalcKeyPad = class CalcKeyPad extends LitElement {
    constructor() {
        super(...arguments);
        this.accentColor = "blue";
        this.textColor = "white";
        this.actionColor = "black";
        this.actionTextColor = "white";
    }
    // Render element DOM by returning a `lit-html` template.
    render() {
        return html ` <div id="base">
      <keypad-input
        number="7"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="8"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="9"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="4"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="5"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="6"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="1"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="2"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="3"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="0"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="."
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="="
        color="${this.actionColor}"
        textColor="${this.actionTextColor}"
      ></keypad-input>
    </div>`;
    }
};
CalcKeyPad.styles = css `
    #base {
      display: grid;
      grid-template-columns: 33% 33% 33%;
      padding-left: calc(var(--base-padding) / 2);
      padding-right: calc(var(--base-padding) / 2);
    }

    keypad-input {
      display: inline-grid;
      margin: 5px;
    }
  `;
__decorate([
    property()
], CalcKeyPad.prototype, "accentColor", void 0);
__decorate([
    property()
], CalcKeyPad.prototype, "textColor", void 0);
__decorate([
    property()
], CalcKeyPad.prototype, "actionColor", void 0);
__decorate([
    property()
], CalcKeyPad.prototype, "actionTextColor", void 0);
CalcKeyPad = __decorate([
    customElement("key-pad")
], CalcKeyPad);
export { CalcKeyPad };
//# sourceMappingURL=index.js.map