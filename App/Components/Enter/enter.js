export class EnterComponent extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.controlComnponents();
    }

    render() {
        this.innerHTML = /* html */ `
        <section class="container-menu_enter">
            <div>
                <h2 class="titulo--enter">Stock It!</h2>
            </div>
            <div>
                <button id="btnLogin" class="login--button">Login</button>
            </div>
            <div>
                <button id="btnRegister" class="register--button">Register</button>
            </div>
        </section>
        `
    }

    controlComnponents() {
        const menuprincipal = document.querySelector("enter-menu")

        const btnLogin = document.querySelector("#btnLogin")
        const secLogin = document.querySelector("login-component")

        const btnRegister = document.querySelector("#btnRegister")
        const secRegister = document.querySelector("register-component")

        /* CONTROLADOR LOGIN */

        btnLogin.addEventListener("click", () => {
            menuprincipal.style.display = "none"
            secLogin.style.display = "block"
        })

        /* CONTROLADOR REGISTER */

        btnRegister.addEventListener("click", () => {
            menuprincipal.style.display = "none"
            secRegister.style.display = "block"
        })
    }
    



}
customElements.define("enter-menu", EnterComponent)