class productCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <main class="container">
            <section class="imgBox">
                <img src="./img/pupos.webp">
            </section>
            <section class="details">
                <div class="content">
                    <h2> Hola Mundo </h2>
                    <p>Descripción del producto </p>
                    <h3></h3>
                    <button></button>
                </div>
            </section>
        </main>
        ${this.getStyles()}
        `;
        return template;
    }  

    getStyles() {
    return `
    <style>
        :host {
            display: block;
            --primary-color: #3b7141;
            width: 80%;
            max-width: 900px;
            min-width: 200px;
            margin: 20px auto;
        }
        
        .container {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
            min-height: 600px;
            background-color: #fff;
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        
        .container .imgBox {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            min-height: 600px;
            background-color: var(--primary-color);
        }
        
        .container .imgBox:before {
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 8em;
            font-weight: 800;
            color: #000;
            content: 'pupos';
            opacity: 0.1;
        }

        .container .imgBox img {
            position: relative;
            top: 20px;
            left: -20px;
            width: 100%;
            max-width: 450px;
            height: auto;
            transform: rotate(-30deg);
        }

        .container .details {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 50%;
            height: 100%;
            box-sizing: border-box;
            padding: 40px;
        }

        .container .details h2 {
            margin-bottom: 15px;
            font-size: 22.5em; /* Corregido de 22.5em a 2.5em */
            line-height: 0.8em;
            color: #444;
        }

        .container .details p {
            max-width: 85%;
            margin-bottom: 25px;
            color: #333;
            font-size: 15px;
        }

        .container .details h3 {
            font-size: 2.5em;
            color: #a2a2a2;
            margin-bottom: 20px;
        }

        .container .details button {
            padding: 15px 30px;
            font-size: 16px;
            color: #fff;
            letter-spacing: 1px;
            font-weight: 600;
            text-transform: uppercase;
            border: none;
            border-radius: 40px;
            background-color: #5a6cb2;
            cursor: pointer;
            align-self: flex-start;
        }       
    </style>
    `;

    }
    
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define("product-card", productCard);