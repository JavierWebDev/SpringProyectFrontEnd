class RegisterComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../css/style.css">
            <div class="register-container">
                <h1>Stock It</h1>
                <input type="email" placeholder="Email" id="email">
                <input type="password" placeholder="Password" id="password">
                <select id="role">
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                </select>
                <button id="registerButton">Register</button>
                <p id="message"></p>
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
                window.location.href = './index.html'; 
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
