class myElement extends HTMLElement {
    constructor() { //constructor es para inicializar una clase 
        super();
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML= `
            <section>
                <h2 class="title">My Custom Element</h2>
                <div>
                    <p>This is a custom element created using the Web Componentes API.</p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
            <style>
                h2{
                    color: red;
                }
            </style>
        `;
    }
    // Metodo render se lo llama para 
    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){//Metodo que permite insertar en el DOM y ademas escuchar y algo mas 
        this.render();
    }
}
customElements.define("my-element", myElement)