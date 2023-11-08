class EnergyEfficiencyRating extends HTMLElement {

    _shadowRoot: ShadowRoot;
    _template: HTMLTemplateElement = document.createElement('template');
    
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._template.innerHTML = this.template();
        this._shadowRoot.appendChild(this._template.content.cloneNode(true));
    }

    template() {
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