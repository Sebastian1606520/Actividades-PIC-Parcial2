import { LitElement, html, css } from "lit-element";
class Register extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      lastName: { type: String },
      age: { type: Number },
    };
  }
 
  constructor() {
    super();
        this.name = "";
        this.lastName = "";
        this.age = 0;
    
  }
 
  handler(name){
    return (event) => {
            const { value, valueAsNumber } = event.target;
            this[name] = name === "edad" ? valueAsNumber : value;
        };
  }


  register(event){
    event.preventDefault();

        const data = {
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
        };

        this.dispatchEvent(
            new CustomEvent("registrarEstudiante", {
                detail: data,
                bubbles: true,
                composed: true,
            })
        );
  }

  render() {
    return html`
      <form @submit="${this.register}">
                <fieldset>
                    <legend>Registro</legend>
                    <label for="nombre">Nombre:</label>
                    <input .value="${this.name}" @input="${this.handler('nombre')}" type="text" id="nombre" name="nombre" required />
                    <br />
                    
                    <label for="apellido">Apellido:</label>
                    <input .value="${this.lastName}" @input="${this.handler('apellido')}" type="text" id="apellido" name="apellido" required />
                    <br />
                    
                    <label for="edad">Edad:</label>
                    <input .value="${String(this.age)}" @input="${this.handler('edad')}" type="number" id="edad" name="edad" required />
                    <br />
                    
                    <button type="submit">Registrar</button>
                </fieldset>
            </form>
    `;
  }
}
 
window.customElements.define("wc-form-register", Register);
 