const template = document.createElement("div");
template.innerHTML = `
<style>
    .text {
        color: red;
    }
    p {
        color: blue;
    }
</style>
    <p class="text">Hello World 2!</p>
    <p>This is a custom element.</p>

`;

class myElement extends HTMLElement {
    constructor(){
        super();
        this.p = document.createElement("p");

    }
    connectedCallback(){
        this.p.textContent = "Hello World!";
        this.appendChild(this.p);
        this.appendChild(template);
    }
}

customElements.define("my-element", myElement);