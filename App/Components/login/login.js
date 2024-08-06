class LoginComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../style.css">
            <div class="login-container">
                <h1>Stock It</h1>
                <input type="email" placeholder="Email" id="email">
                <input type="password" placeholder="Password" id="password">
                <button id="loginButton">Login</button>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.getElementById('loginButton').addEventListener('click', () => this.login());
    }

    disconnectedCallback() {
        this.shadowRoot.getElementById('loginButton').removeEventListener('click', this.login);
    }

    login() {
        const email = this.shadowRoot.getElementById('email').value;
        const password = this.shadowRoot.getElementById('password').value;
        console.log('Logging in with', email, password);
        //Lógica para enviar las credenciales al servidor
    }
}

customElements.define('login-component', LoginComponent);
