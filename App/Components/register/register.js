class RegisterComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="css/styles.css">
            <div class="container-menu_enter">
                <div class="container-login">
                    <a href="" class="titulo-nav">Stock It!</a>
                    <img src="img/coder_2.svg" alt="">
                    <input type="email" placeholder="Email" id="email" class="input-form">
                    <input type="password" placeholder="Password" id="password" class="input-form">
                    <select id="role" class="input-select">
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                    <button id="registerButton" class="button-new">Register</button>
                    <p id="message"></p>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.getElementById('registerButton').addEventListener('click', () => this.register());
    }

    disconnectedCallback() {
        this.shadowRoot.getElementById('registerButton').removeEventListener('click', this.register);
    }

    async register() {
        const email = this.shadowRoot.getElementById('email').value;
        const password = this.shadowRoot.getElementById('password').value;
        const role = this.shadowRoot.getElementById('role').value;
        
        try {
            const response = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: email, password, role }),
            });

            const data = await response.json();

            if (response.ok) {
                this.shadowRoot.getElementById('message').textContent = 'Registro exitoso! Redirigiendo...';
                // Almacenar el token
                localStorage.setItem('authToken', data.token);
                // Redireccionar a la página principal 
                window.location.href = './login.html'; 
            } else {
                this.shadowRoot.getElementById('message').textContent = data.message || 'Error en el registro';
            }
        } catch (error) {
            console.error('Error durante el registro:', error);
            this.shadowRoot.getElementById('message').textContent = 'Error de conexión';
        }
    }
}

customElements.define('register-component', RegisterComponent);
