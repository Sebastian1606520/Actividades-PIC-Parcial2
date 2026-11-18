class myElement extends HTMLElement {
    // Siempre el attachShadow va dentro del constructor
    // El attachShadow es para crear un shadowRoot, que es un DOM encapsulado
    // El getAttribute es para obtener el valor de un atributo del elemento, 
    // lo obtiene de nuestro DOM, en este caso el atributo title, que es el que le pasamos al elemento
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.title= this.getAttribute("title") || "";
        this.paragraph= this.getAttribute("paragraph") || "";
        this.image = this.getAttribute("image") || "";
        this.link = this.getAttribute("link") || "";
    }

    // Los slot se dividen en dos tipos el slot normal y el multi-slot, 
    // el slot normal es para un solo elemento y el multi-slot es para varios elementos
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section>    
            <h2>${this.title}</h2>
            <div>
                <p>${this.paragraph}</p>
                <img src="${this.image}"/>
            </div>
            <div>
                <a href="${this.link}">Ir a la página</a>
            </div>

        </section>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
        <style>
            h2 {
                color: red;
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
