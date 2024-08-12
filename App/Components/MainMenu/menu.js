export class MainMenu extends HTMLElement {
	constructor() {
		super();
		this.render();
        this.controlComponents();
	}
	render() {
		this.innerHTML = /* html */ `
        <section class="container-menu">
            <div class="grid-menu">
                <div id="btnProductos" class="menu--button_large button-menu btn-productos">
                    <div>
                        <h2 class="titulo--boton">Productos</h2>
                    </div>
                </div>
                <div id="btnClientes"class="menu--button_wide button-menu btn-clientes">
                    <div>
                        <h2 class="titulo--boton">Clientes</h2>
                    </div>
                </div>
                <div id="btnPedidos" class="button-menu_large button-menu btn-pedidos">
                    <div>
                        <h2 class="titulo--boton">Pedidos</h2>
                    </div>
                </div>
                <div id="btnPagos" class="button-menu_large button-menu btn-pagos">
                    <div>
                        <h2 class="titulo--boton">Pagos</h2>
                    </div>
                </div>
                <div id="btnEmpleados" class="button-menu btn-empleados">
                    <div>
                        <h2 class="titulo--boton">Empleados</h2>
                    </div>
                </div>
                <div id="btnOficinas" class="menu--button_wide2 button-menu btn-oficinas">
                    <div>
                        <h2 class="titulo--boton">Oficinas</h2>
                    </div>
                </div>
            </div>
        </section>
		`
	}

    controlComponents() {
        const menuprincipal = document.querySelector("main-menu")

        const btnProductos = document.querySelector("#btnProductos");
        const secProductos = document.querySelector("productos-menu")

        const btnOficinas = document.querySelector("#btnOficinas")
        const secOficinas = document.querySelector("oficinas-menu")

        const btnPedidos = document.querySelector("#btnPedidos")
        const secPedidos = document.querySelector("pedidos-menu")

        const btnPagos = document.querySelector("#btnPagos")
        const secPagos = document.querySelector("pagos-menu")

        /* CONTROLADOR OFICINAS */

        btnOficinas.addEventListener("click", () => {
            menuprincipal.style.display = "none"
            secOficinas.style.display = "block"
        })

        /* CONTROLADOR PEDIDOS */

        btnPedidos.addEventListener("click", () => {
            menuprincipal.style.display = "none"
            secPedidos.style.display = "block"
        })

        /* CONTROLADOR PEDIDOS */

        btnProductos.addEventListener("click", () => {
            menuprincipal.style.display = "none"
            secProductos.style.display = "block"
        })

        /* CONTROLADOR PAGOS */

        btnPagos.addEventListener("click", () => {
            menuprincipal.style.display = "none"
            secPagos.style.display = "block"
        })
    }

}
customElements.define("main-menu",MainMenu)