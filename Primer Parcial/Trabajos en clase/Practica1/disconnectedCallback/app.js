class MyCustomElement extends HTMLElement{
    constructor(){
        super();
        console.log("Constructor: MyCustomElement created");
    }

    connectedCallback(){
        console.log("connectedCallback: MyCustomElement added to the DOM");
    }

    disconnectedCallback(){
        console.log("disconnectedCallback: MyCustomElement removed from the DOM");
    }
}

customElements.define("my-custom-element", MyCustomElement);

document.querySelector("my-custom-element").remove();