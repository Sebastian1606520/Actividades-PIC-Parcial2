class myElement extends HTMLElement {
    // Siempre el attachShadow va dentro del constructor
    // El attachShadow es para crear un shadowRoot, que es un DOM encapsulado
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    // Los slot se dividen en dos tipos el slot normal y el multi-slot, 
    // el slot normal es para un solo elemento y el multi-slot es para varios elementos
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
            
            <h2>
                <slot name="title"></slot>
            </h2>
            <div>
                <p>
                    <slot name="paragraph"></slot>
                </p>
            </div>

            <div>
                <h5>
                    <slot name="titulo1"></slot>
                </h5>
            </div>

        </section>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
            <style>
                :host{
                    display: inline-block;
                    width: 100%;
                    min-width: 300px;
                    max-width: 450px;
                    font-size: 20px;
                    background-color: #f0f0f0;
                }

                :host(.color){
                    background-color: green;
                }

                :host([yellow]){
                    background-color: yellow;
                }

                :host-context(article){
                background-color:red;
                }
            </style>
        `;
    }
    render() {
        //appendChild es para agregar el contenido del template al shadowRoot
        //.getTemplate() es para obtener el contenido del template
        //.content es para obtener el contenido del template
        //.cloneNode(true) es para clonar el contenido del template
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
// Definimos el custom element
customElements.define("my-element", myElement);
