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
        
        
        `

}