import { deleteData, getData, postData, updateData, getElementData } from '/API/API.js';

export class PedidosMenu extends HTMLElement {
    constructor(){
        super();
        this.render();
        this.findAll();
        this.controllerAction();
    }

    render() {
        this.innerHTML = /* html */  `
        <section class="container-wc">
            <div class="cont-button">
                <a href="#"><box-icon name='arrow-back' ></box-icon></a>
            </div>

            <div class="container-titulos_list">
                <h1 class="titulo-list">Pedidos</h1>

                <a id="btnCreate_Pedidos" class="button-new" href="#"><box-icon name='plus' color="#FFF"></box-icon> Nuevo Pedido</a>
            </div>
            <div>
                <div class="cont-list_big"> 
                    <div class="cont-list">
                        <p class="titulo-list">ID</p>
                        <p class="titulo-list">Nombre</p>
                    </div>
                    <div id="elements--container" class="container-wc"></div>
                </div>
            </div>

            
        </section>
        `;      
    }

    findAll = async () =>{
        const endpoint = "pedidos"
        const container = this.querySelector("#elements--container")

        const data = await getData(endpoint);

        container.innerHTML= ''

        data.forEach(item => {
            const clon = document.createElement("div");

            clon.innerHTML = `
            
                    <div class="elements-list">
                        <div class="card-element">
                            <p class="card-text">AAA</p>
                            <p class="card-text">AAA</p>
                            <p class="card-text">AAA</p>

                            <div class="card-buttons_container">
                                <a id="btnInfo_Pedidos" href="" class="card-button"><box-icon name='info-circle' color='#000' ></box-icon></a>
                                <a id="btnDelete_Pedidos" href="" class="card-button"><box-icon name='trash' color='#e00000' ></box-icon></a>
                                <a id="btnUpdate_Pedidos" href="" class="card-button"><box-icon name='pencil' color='#02a0ff' ></box-icon></a>
                            </div>
                        </div>     
                    </div>
                `
            container.appendChild(clon)

        })

        
    }

    controllerAction() {
        

        const btnCreatePedidos = this.querySelector("#btnCreate_Pedidos")
        const btnDeletePedidos = this.querySelector("#btnDelete_Pedidos")
        const btnUpdatePedidos = this.querySelector("#btnUpdate_Pedidos")
        const btnInfoPedidos = this.querySelector("#btnInfo_Pedidos")

        btnCreatePedidos.addEventListener("click", () =>{
            this.innerHTML = /* html */ `
            <section id="Pedidos--create">
                <div>
                    <h2>Registre Pedidos</h2>
                </div>
                <div>
                    <h3>Nombre</h3>
                    <input placeholder="Pedidos" id="name">
                </div>
                <div>
                    <button id="savePedidos">Guardar</button>
                </div>
            </section>
            `;

            const btnSave = this.querySelector("#savePedidos")
            btnSave.addEventListener("click", () => {
                const endpoint = "Pedidos"
                const nombre = this.querySelector("#name").value;

                const newPedidos = {
                    id : 0,
                    nombre: nombre
                }

                postData(newPedidos, endpoint)
                    .then(response => {
                        if (response.ok){
                            return response.json();
                        }
                        throw new Error('Error al crear el Pedidos')
                    })
                    .then(data => {
                        console.log('Pedidos creado', data);
                    })
                    .catch(error => {
                        console.error('Error', error);
                    })
            })
        })
    }

    
}
customElements.define("pedidos-menu", PedidosMenu);
