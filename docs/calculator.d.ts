import { LitElement } from "https://unpkg.com/lit-element/lit-element.js?module";
import "./keypad-input.js";
import "./key-pad.js";
import "./display-output.js";
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
    clear: () => void;
    calculate: () => void;
    render(): any;
}
