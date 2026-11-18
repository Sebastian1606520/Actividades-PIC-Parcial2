import { LitElement, html, css } from 'lit-element';
class button extends LitElement {

    static get properties(){
        return {
            text: {Type: String, attribute: true},
        };
    }

    constructor(){
        super()
        this.text = "Aceptar";
    }

    static get styles() {
        return css`
            button {
                all: initial;
                background-color: #4949f1;
                color: white;
                font-family: cursive;
                margin-right: 20px;
                width: 150px;
                border-radius: 10px;
                text-align: center;
                padding: 2px;
                cursor: pointer;
            }
        `;
    }

    firstUpdated(){
        this.button = this.shadowRoot.querySelector('button');
    }

    mouseUpListener(event){
        this.button.style.backgroundColor = "#9292b5";
    }

    
    mouseDownListener(event){
        this.button.style.backgroundColor = "#585866";
    }
    render(){
        return html`
            <button @mousedown="${this.mouseDownListener}" @mouseup= "${this.mouseUpListener}">${this.text}</button>
        
        `;
    }
}

window.customElements.define("wc-button", button);