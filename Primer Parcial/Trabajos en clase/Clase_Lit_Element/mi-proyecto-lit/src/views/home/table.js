import { LitElement, html, css } from 'lit-element';
class Table extends LitElement {
    static get properties(){
        return {
            list: {
                type: Array,
            },
        };
    }

    constructor(){
        super();
        
    }

    render (){
        return html` <h1>Tabla de resgistro</h1>

        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
                ${
                    this.lista.map((element)=>{

                    return html`
                    <tr>
                        <th>${element.nombre}</th>
                        <th>${element.apellido}</th>
                        <th>${element.edad}</th>
                    </tr>
                    `
                })}
            </tbody>

        </table>
        
        `;
    }
}

window.customElements.define("wc-table", Table)