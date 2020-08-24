import { LitElement } from "https://unpkg.com/lit-element/lit-element.js?module";
import "./keypad-input/index.js";
import "./key-pad/index.js";
import "./display-output/index.js";
export declare class AppCalculator extends LitElement {
    width: string;
    primaryColor: string;
    accentColor: string;
    static styles: any;
    connectedCallback(): void;
    disconnectedCallback(): void;
    _staging: string;
    _value: string;
    _mode: string;
    get mode(): string;
    set mode(v: string);
    private get value();
    private set value(value);
    _handleNumber: (event: CustomEvent) => void;
    _clear: () => void;
    calculate: () => void;
    render(): any;
}
//# sourceMappingURL=calculator.d.ts.map