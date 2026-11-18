class myElement extends HTMLElement {
    // Siempre el attachShadow va dentro del constructor
    // El attachShadow es para crear un shadowRoot, que es un DOM encapsulado
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
            <h2 class="title">My Custom Element 2</h2>
            <div>
                <p>This is a cusrome element created using the Web Components API.</p>
            </div>
        </section>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
            h2 {
                color: red;
            }
        </style>
        `;
    }
    render(){
        //appendChild es para agregar el contenido del template al shadowRoot
        //.getTemplate() es para obtener el contenido del template
        //.content es para obtener el contenido del template
        //.cloneNode(true) es para clonar el contenido del template
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}
// Definimos el custom element
customElements.define("my-element", myElement);
