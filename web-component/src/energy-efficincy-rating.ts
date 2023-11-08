import {
    AttributeName,
    Score
} from './types';

class EnergyEfficiencyRating extends HTMLElement {

    _shadowRoot: ShadowRoot;
    _template: HTMLTemplateElement;
    _score: Score;
    
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._template = document.createElement('template');
        this._template.innerHTML = this.initTemplate();
        this._shadowRoot.appendChild(this._template.content.cloneNode(true));
        this._score = this.getAttribute('score') as Score;
    }

    initTemplate() {
        return `
            <div>Base template</div>
        `;
    }

    connectedCallback() {

    }

    disconnectedCallback() {

    }

    adoptedCallback() {

    }

    static get observedAttributes() {
        return ['score'];
    }

    attributeChangedCallback(attributeName: string, oldValue: string, newValue: string) {
        console.log(`Attribute ${attributeName} has changed from ${oldValue} to ${newValue}`);
    }

    diff() {

    }

    render() {

    }

}

customElements.define('energy-efficiency-rating', EnergyEfficiencyRating);