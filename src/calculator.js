var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, customElement, property, } from "https://unpkg.com/lit-element/lit-element.js?module";
import "./keypad-input/index.js";
import "./key-pad/index.js";
import "./display-output/index.js";
let AppCalculator = class AppCalculator extends LitElement {
    constructor() {
        super(...arguments);
        this.width = "500px";
        this.primaryColor = "red";
        this.accentColor = "black";
        this._staging = "";
        this._value = "";
        this._mode = "";
        this._handleNumber = (event) => {
            const num = event.detail.value;
            event.stopPropagation();
            if (num === "=") {
                this.calculate();
                return;
            }
            if (this.value === "0") {
                this.value = "";
            }
            if (num === "." && this.value.includes(".")) {
                return;
            }
            this.value += num;
        };
        this._clear = () => {
            this.value = "";
            this._staging = "";
            this._value = "";
            this.mode = "";
        };
        this.calculate = () => {
            const staging = Number(this._staging || "0");
            const current = Number(this._value || "0");
            var result = 0;
            // Calculate
            switch (this.mode) {
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
            const output = result.toString();
            this.value = output;
            this._staging = output;
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // @ts-ignore
        window.addEventListener("select-number", this._handleNumber);
    }
    disconnectedCallback() {
        // @ts-ignore
        window.removeEventListener("select-number", this._handleNumber);
        super.disconnectedCallback();
    }
    get mode() {
        return this._mode;
    }
    set mode(v) {
        const oldMode = this._mode;
        const oldVal = this.value;
        this._mode = v;
        // @ts-ignore
        this.requestUpdate("mode", oldMode);
        // @ts-ignore
        this.requestUpdate("value", oldVal);
    }
    get value() {
        if (this.mode == "")
            return this._value;
        return this._staging;
    }
    set value(v) {
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
    }
    // Render element DOM by returning a `lit-html` template.
    render() {
        return html `<div
      id="base"
      style="width: ${this.width}; background-color: ${this.primaryColor};"
    >
      <display-output
        value="${this.value}"
        color="black"
        textColor="white"
      ></display-output>
      <div id="actions">
        <button
          @click=${this._clear}
          ?disabled=${this.value === "" && this.mode === ""}
        >
          Clear
        </button>
        <button @click="${() => (this.mode = "+")}">+</button>
        <button @click="${() => (this.mode = "-")}">-</button>
        <button @click="${() => (this.mode = "/")}">/</button>
        <button @click="${() => (this.mode = "*")}">*</button>
      </div>
      <key-pad></key-pad>
    </div>`;
    }
};
AppCalculator.styles = css `
    #base {
      border: 2px solid black;
      padding-bottom: 20px;
      --base-padding: 10px;
    }

    #actions {
      padding-top: var(--base-padding);
      padding-left: var(--base-padding);
    }

    button {
      font-size: 17px;
    }
  `;
__decorate([
    property()
], AppCalculator.prototype, "width", void 0);
__decorate([
    property()
], AppCalculator.prototype, "primaryColor", void 0);
__decorate([
    property()
], AppCalculator.prototype, "accentColor", void 0);
AppCalculator = __decorate([
    customElement("app-calculator")
], AppCalculator);
export { AppCalculator };
//# sourceMappingURL=calculator.js.map