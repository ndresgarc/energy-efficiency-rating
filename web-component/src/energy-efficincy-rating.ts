import energyEfficiencyRatingStyle from "./energy-efficiency-rating.scss";

class EnergyEfficiencyRating extends HTMLElement {

    constructor() {
        super();

        /*
        
            const shadow = this.attachShadow({ mode: "open" });

            const div = document.createElement("div");
            const style = document.createElement("style");
            shadow.appendChild(style);
            shadow.appendChild(div);

        */
    }

    connectedCallback() {

    }

    disconnectedCallback() {

    }

    adoptedCallback() {

    }

    static get observedAttributes() {
        return ['name'];
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