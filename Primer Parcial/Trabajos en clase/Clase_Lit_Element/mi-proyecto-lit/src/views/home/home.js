import { LitElement, html, css } from 'lit-element';
import "./table";
import "./register";

class Home extends LitElement {
    static get properties() {
        return {
            lista: { type: Array }
        };
    }


    constructor(){
        super();
        this.lista = [
            {nombre: "Sebastian", apellido: "Tonato", edad:20},
            {nombre: "Sebastian", apellido: "Tonato", edad:20},
            {nombre: "Sebastian", apellido: "Tonato", edad:20},
        ];    
    }

    addList(){
        this.lista = [...this.lista, event.detail];
    }
    render (){
        return html`
        <wc-form-register @registrarEstudiante="${this.addList}"></wc-form-register>
        <wc-table .lista="${this.lista}"></wc-table>
        `;
    }
}

window.customElements.define("wc-home", Home)

