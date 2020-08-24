import {
  LitElement,
  html,
  css,
  customElement,
  property,
  // @ts-ignore
} from "https://unpkg.com/lit-element/lit-element.js?module";

@customElement("display-output")
export class CalcDisplay extends LitElement {
  @property()
  color = "black";

  @property()
  textColor = "white";

  @property()
  value = "";

  static styles = css`
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

  // Render element DOM by returning a `lit-html` template.
  render() {
    return html`<div id="base" style="background-color: ${this.color};">
      <div id="text-display" style="color: ${this.textColor};">
        ${this.value || "0"}
      </div>
    </div>`;
  }
}
