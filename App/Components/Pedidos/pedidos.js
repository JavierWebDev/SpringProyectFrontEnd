import { deleteData, getData, postData, updateData, getElementData, getDataTry } from '/API/API.js';

export class PedidosMenu extends HTMLElement {
    constructor(){
        super();
        this.render();
        // this.findAll();
        // this.controllerAction();
        this.goBack();
        this.controlModalAdd();
    }

    render() {
        this.innerHTML = /* html */ `
        <section class="container-wc">
            <div class="cont-button">
                <a href="" id="btnVolverPedido"><box-icon name='arrow-back' ></box-icon></a>
            </div>

            <div class="container-titulos_list">
                <h1 class="titulo-list">Pedidos</h1>

                <a id="btnAddPedido" class="button-new" href="#"><box-icon name='plus' color="#FFF"></box-icon> New Pedido</a>
            </div>

            <div class="cont-list_big">
                <div class="cont-list">
                    <p class="titulo-list-id">ID</p>
                    <p class="titulo-list-id">Telefono</p>
                    <p class="titulo-list-id">Ciudad</p>
                </div>

                <div id="containerShowPedidos" class="elements-list">

                </div>

                <div class="overlay" id="overlay3">
                    <div id="popupDelete" class="popup-delete">
                        <div id="delModalPedido" class="cont">
                            <p>Estas seguro que deseas eliminar la oficina?</p>

                            <div class="cont-buttons_delete">
                                <a id="btnConfirmDelPedido" class="button-confirm_delete">Confirm</a>
                                <a id="btnCancelDelPedido" class="button-cancel_delete">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overlay" id="overlay2">
                    <div id="popupInfo" class="popup-info">
                        <div class="cont-top_modal">
                            <div id="btnCancelPedidoInfo" class="button-cancel_modal">&#10005;</div>
                        </div>

                        <div id="infoModalPedido" class="cont">
                            
                        </div>
                    </div>
                </div>

                <div id="overlayPedido" class="overlay">
                    <div id="popUpAddPedido" class="popup-add">
                        <div class="cont-top_modal">
                            <h1 class="titulo-list">New Pedido</h1>
                            <div id="btnCancelAddPedido" class="button-cancel_modal">&#10005;</div>
                        </div>
    
                        <div class="cont-form">
                            <form id="addPedidoForm" class="form-new">
                                <div>
                                    <label class=label-form_addr>Fecha Pedido</label>
                                    <input type=date class="input-form input-addr" name="fechaPedido">
                                </div>
                                <div>
                                    <label class=label-form_addr>Fecha Esperada</label>
                                    <input type=date class="input-form input-addr" name="fechaEsperada">
                                </div>

                                <div>
                                    <label class=label-form_addr>Fecha Entrega</label>
                                    <input type=date class="input-form input-addr" name="fechaEntrega">
                                </div>


                                <div>
                                    <label class=label-form_addr>Comentarios adicionales</label>
                                    <input type="text" class="input-form input-addr" name="comentarios">
                                </div>


                                <div class="cont-input_two cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inCountry">Cliente dueño del pedido</label>
                                        <select class="input-form input-select"  id="inClientPedido"></select>
                                    </div>
                                </div>
    
                                <div class="cont-input_two cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inCountry">Estado del pedido</label>
                                        <select class="input-form input-select"  id="inStatusPedido"></select>
                                    </div>
                                </div>
    
                                <button id="createNewPedido" class="button-new">ADD</button>
                            </form>
                        </div>
                    </div>
                </div>
    
        </section>
        `;
    }

    goBack() {
        const btnVolverPedido = document.querySelector("#btnVolverPedido");
        const pedidos = document.querySelector("pedidos-menu")
        const mainMenu = document.querySelector("main-menu");

        btnVolverPedido.addEventListener("click", e => {
            pedidos.style.display = "none";
            mainMenu.style.display = "block"

            e.preventDefault();
        })
    }

    controlModalAdd() {
        const overlay = document.getElementById("overlayPedido");
        const popUpAdd = document.getElementById("popUpAddPedido");
        const btnAbrirPedido = document.getElementById("btnAddPedido");
        const btnCerrar = document.getElementById("btnCancelAddPedido");

        const selectClient = document.querySelector("#inClientPedido");
        const selectStatus = document.querySelector("#inStatusPedido");

        const btnAddPedido = document.querySelector("#createNewPedido")

        const formPedido = document.getElementById("addPedidoForm");

        const inputs = document.querySelectorAll(".input-form");

        const endpoint = "pedidos"

        const endpointClient = "cliente";
        const endpointStatus = "estado";

        getDataTry(endpointClient)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error en la solicitud GET: ${response.status} - ${response.statusText}`);
                }
            })
            .then((responseData) => {
                responseData.forEach(client => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(client); 
                    opc.textContent = client.nombre; 

                    selectClient.appendChild(opc);
                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

        getDataTry(endpointStatus)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error en la solicitud GET: ${response.status} - ${response.statusText}`);
                }
            })
            .then((responseData) => {
                responseData.forEach(status => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(status);
                    opc.textContent= status.estado;
    
                    selectStatus.appendChild(opc);
                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

        btnAddPedido.addEventListener("click", e => {
            e.preventDefault();

            let datos = Object.fromEntries(new FormData(addPedidoForm).entries());
            datos.id = 0;

            datos.fechaPedido = new Date(datos.fechaPedido).getTime();
            datos.fechaEsperada = new Date(datos.fechaEsperada).getTime();
            datos.fechaEntrega = new Date(datos.fechaEntrega).getTime();


            datos.clientePedido = JSON.parse(selectClient.value);
            datos.estadoPedido = JSON.parse(selectStatus.value);

            console.log(datos)

            postData(datos, endpoint);
        })

        btnAbrirPedido.addEventListener("click", e => {
            overlay.classList.add("active")
            popUpAdd.classList.add("active")
            e.preventDefault();
        })

        btnCerrar.addEventListener("click", e => {
            overlay.classList.remove("active")
            popUpAdd.classList.remove("active")
            e.preventDefault();
        })


    }

    // findAll = async () =>{
    //     const endpoint = "pedidos"
    //     const container = this.querySelector("#elements--container")

    //     const data = await getData(endpoint);

    //     container.innerHTML= ''

    //     data.forEach(item => {
    //         const clon = document.createElement("div");

    //         clon.innerHTML = `
            
    //                 <div class="elements-list">
    //                     <div class="card-element">
    //                         <p class="card-text">AAA</p>
    //                         <p class="card-text">AAA</p>
    //                         <p class="card-text">AAA</p>

    //                         <div class="card-buttons_container">
    //                             <a id="btnInfo_Pedidos" href="" class="card-button"><box-icon name='info-circle' color='#000' ></box-icon></a>
    //                             <a id="btnDelete_Pedidos" href="" class="card-button"><box-icon name='trash' color='#e00000' ></box-icon></a>
    //                             <a id="btnUpdate_Pedidos" href="" class="card-button"><box-icon name='pencil' color='#02a0ff' ></box-icon></a>
    //                         </div>
    //                     </div>     
    //                 </div>
    //             `
    //         container.appendChild(clon)

    //     })

        
    // }

    // controllerAction() {
        

    //     const btnCreatePedidos = this.querySelector("#btnCreate_Pedidos")
    //     const btnDeletePedidos = this.querySelector("#btnDelete_Pedidos")
    //     const btnUpdatePedidos = this.querySelector("#btnUpdate_Pedidos")
    //     const btnInfoPedidos = this.querySelector("#btnInfo_Pedidos")

    //     btnCreatePedidos.addEventListener("click", () =>{
    //         this.innerHTML = /* html */ `
    //         <section id="Pedidos--create">
    //             <div>
    //                 <h2>Registre Pedidos</h2>
    //             </div>
    //             <div>
    //                 <h3>Nombre</h3>
    //                 <input placeholder="Pedidos" id="name">
    //             </div>
    //             <div>
    //                 <button id="savePedidos">Guardar</button>
    //             </div>
    //         </section>
    //         `;

    //         const btnSave = this.querySelector("#savePedidos")
    //         btnSave.addEventListener("click", () => {
    //             const endpoint = "Pedidos"
    //             const nombre = this.querySelector("#name").value;

    //             const newPedidos = {
    //                 id : 0,
    //                 nombre: nombre
    //             }

    //             postData(newPedidos, endpoint)
    //                 .then(response => {
    //                     if (response.ok){
    //                         return response.json();
    //                     }
    //                     throw new Error('Error al crear el Pedidos')
    //                 })
    //                 .then(data => {
    //                     console.log('Pedidos creado', data);
    //                 })
    //                 .catch(error => {
    //                     console.error('Error', error);
    //                 })
    //         })
    //     })
    // }

    
}
customElements.define("pedidos-menu", PedidosMenu);
