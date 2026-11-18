//*Construye <tarjeta-perfil>
// ACTIVIDAD 2 · 15 min · laboratorio
// 1 Crea index.html y tarjeta-perfil.js como módulo.
// 2Define la clase, llama a attachShadow y
// clona un <template> con <slot>.
// 3
// Registra la etiqueta con
// customElements.define.
// 4 Usa la etiqueta tres veces con datos
// distintos.


class TarjetaPerfil extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML=`
        <section>
            <div>
                <div>
                    <h2>
                        <slot name="title"></slot>
                    </h2>
                </div>
                <div>
                    <img src=""/>
                    <p></p>
                </div>
            </div>
        </section>
        
        `;
        return template;
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

customElements.define("tarjeta-perfil", TarjetaPerfil)