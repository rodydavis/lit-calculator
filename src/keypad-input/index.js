var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, customElement, property, } from "https://unpkg.com/lit-element/lit-element.js?module";
let CalcNumber = class CalcNumber extends LitElement {
    constructor() {
        super(...arguments);
        this.number = "0";
        this.color = "black";
        this.textColor = "white";
    }
    _onTap(e) {
        e.preventDefault();
        const event = new CustomEvent("select-number", {
            detail: { value: this.number },
            bubbles: true,
            cancelable: true,
        });
        // @ts-ignore
        window.dispatchEvent(event);
    }
    // Render element DOM by returning a `lit-html` template.
    render() {
        return html ` <button
      @click="${this._onTap}"
      id="base"
      style="background-color: ${this.color}; color: ${this.textColor};"
    >
      ${this.number}
    </button>`;
    }
};
CalcNumber.styles = css `
    #base {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      text-align: center;
      float: left;
    }

    #base:hover {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    }

    #base:active {
      background-color: lightgrey;
    }

    button {
      outline: 0 none;
      color: white;
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 20px;
    }
  `;
__decorate([
    property()
], CalcNumber.prototype, "number", void 0);
__decorate([
    property()
], CalcNumber.prototype, "color", void 0);
__decorate([
    property()
], CalcNumber.prototype, "textColor", void 0);
CalcNumber = __decorate([
    customElement("keypad-input")
], CalcNumber);
export { CalcNumber };
//# sourceMappingURL=index.js.map