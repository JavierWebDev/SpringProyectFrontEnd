import { deleteData, getData, postData, updateData, getElementData, getDataTry } from '/API/API.js';

export class PedidosMenu extends HTMLElement {
    constructor(){
        super();
        this.render();
        // this.findAll();
        // this.controllerAction();
        this.goBack();
        this.controlModalAdd();
        this.showOffices();
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
                    <p class="titulo-list-id">Cliente</p>
                    <p class="titulo-list-id">Estado</p>
                </div>

                <div id="containerShowPedidos" class="elements-list">

                </div>

                <div class="overlay" id="overlay3">
                    <div id="popupDelete" class="popup-delete">
                        <div id="delModalPedido" class="cont">
                            <p>Estas seguro que deseas eliminar la pedido?</p>

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

                                <div class="cont-input_two cont-input"> 
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="fechaPedido">Fecha Pedido</label>
                                        <input type="date" class="input-form input-txt" name="fechaPedido" id="fechaPedido"> 
                                    </div>
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="fechaEsperada">Fecha Esperada</label>
                                        <input type="date" class="input-form input-txt" name="fechaEsperada" id="fechaEsperada">
                                    </div>
                                </div>

                                <div class="cont-input_two cont-input"> 
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="fechaEntrega">Fecha Entrega</label>
                                        <input type="date" class="input-form input-txt" name="fechaEntrega" id="fechaEntrega">
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="comentarios">Comentarios adicionales</label>
                                    <input type="text" class="input-form input-txt" name="comentarios" id="comentarios">
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inClientPedido">Cliente dueño del pedido</label>
                                        <select class="input-form input-select" id="inClientPedido"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inStatusPedido">Estado del pedido</label>
                                        <select class="input-form input-select" id="inStatusPedido"></select>
                                    </div>
                                </div>

                                <div class="button-add"> <button id="createNewPedido" class="button-new">ADD</button> </div>

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

        btnAddPedido.addEventListener("click", async e => {
            e.preventDefault();

            let datos = Object.fromEntries(new FormData(addPedidoForm).entries());
            datos.id = 0;

            datos.fechaPedido = new Date(datos.fechaPedido).getTime();
            datos.fechaEsperada = new Date(datos.fechaEsperada).getTime();
            datos.fechaEntrega = new Date(datos.fechaEntrega).getTime();


            datos.clientePedido = JSON.parse(selectClient.value);
            datos.estadoPedido = JSON.parse(selectStatus.value);

            console.log(datos)

            try {
                const response = await postData(datos, endpoint); // postData es una función que deberías tener en tu API.js
        
                if (response.ok) {
                    this.showOffices(); 
                    this.closeAddOfficeModal(); 
                } else {
                    throw new Error('Error al añadir el pedido');
                }
            } catch (error) {
                console.error('Error al añadir el pedido:', error);
            }
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

    async arrayRequest() {
        const endpoint = "pedidos";
        const { data, error } = await getData(endpoint);
        
        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }

    showOffices() {
        const btnAddPedido = document.getElementById("btnAddPedido");
        const overlay = document.getElementById("overlay");
        const popUpAdd = document.getElementById("popUpAdd");
        const btnCerrar = document.getElementById("btnCancelAdd");
        const contShowPedidos = document.querySelector("#containerShowPedidos");
        contShowPedidos.innerHTML=''

        btnAddPedido.addEventListener("click", e => {
            e.preventDefault();
            overlay.classList.add("active");
            popUpAdd.classList.add("active");
        });

        btnCerrar.addEventListener("click", e => {
            e.preventDefault();
            overlay.classList.remove("active");
            popUpAdd.classList.remove("active");
        });

        this.arrayRequest()
        .then((pedidos) => {
            if (pedidos) {
                console.log(pedidos); 
                pedidos.forEach(pedido => {
                    const card = document.createElement("div");
                    card.classList.add("card-element");
                    card.innerHTML = `
                        <p class="card-text">${pedido.id}</p>
                        <p class="card-text">${pedido.clientePedido.nombre}</p>
                        <p class="card-text">${pedido.estadoPedido.estado}</p>
                        <div class="card-buttons_container">
                            <a href="#" class="card-button" data-id="${pedido.id}" id="btnInfoPedido">
                                <box-icon name='info-circle' color='#508C9B'></box-icon>
                            </a>
                            <a href="#" class="card-button" data-id="${pedido.id}" id="btnDeletePedido">
                                <box-icon name='trash' color='#508C9B'></box-icon>
                            </a>
                            <a href="#" class="card-button">
                                <box-icon name='pencil' color='#508C9B'></box-icon>
                            </a>
                        </div>`;

                    contShowPedidos.appendChild(card);
                    

                    
                })

                document.querySelectorAll("btnInfoPedido").forEach(button => {
                    button.addEventListener("click", e => {
                        e.preventDefault();
                        const pedidoId = button.getAttribute("data-id");
                        const pedido = pedidos.find(o => o.id.toString() === pedidoId);
    
                        if (pedido) {
                            this.showInfoModal(pedido);
                        } else {
                            console.error(`No se encontró la oficina con id: ${pedidoId}`);
                        }
                    });
                });
                
            } else {
                console.log("No se pudieron obtener las pedidos.");
            }
        })
        .catch((error) => {
            console.error("Error al obtener las pedidos:", error);
        });


    }

    showInfoPedido(pedido) {
        const overlay2 = document.getElementById("overlay2");
        const popUpInfo = document.getElementById("popupInfo");
        const infoModal = document.getElementById("infoModalPedido");

        infoModal.innerHTML = `
            <div class="cont-info_p">
                <label for="pOfficeTel" class="label-form">Fecha Pedido</label>
                <p name="pOfficeTel" class="card-text">${pedido.fechaPedido}</p>
            </div>
            <div class="cont-info_p">
                <label for="pOfficeCity" class="label-form">Fecha Esperada</label>
                <p name="pOfficeCity" class="card-text">${pedido.fechaEsperada}</p>
            </div>
            <div class="cont-info_p">
                <label for="pOfficeCountry" class="label-form">Fecha Entrega</label>
                <p name="pOfficeCountry" class="card-text">${pedido.fechaEntrega}</p>
            </div>
            <div class="cont-info_p">
                <label for="pOfficePCode" class="label-form">Cliente</label>
                <p name="pOfficePCode" class="card-text">ID: ${pedido.clientePedido.id} Nombre: ${pedido.clientePedido.nombre}</p>
            </div>
            <div class="cont-info_p">
                <label for="pOfficeAddr" class="label-form">Estado</label>
                <p class="card-text">${pedido.estadoPedido.estado}</p>
            </div>`;

        overlay2.classList.add("active");
        popUpInfo.classList.add("active");

        document.getElementById("btnCancelPedidoInfo").addEventListener("click", e => {
            e.preventDefault();
            overlay2.classList.remove("active");
            popUpInfo.classList.remove("active");
        });
    }

    deleteOffice(pedido) {
        const endpoint = "pedidos";
        const overlay3 = document.querySelector("#overlay3");
        const popUpDelete = document.getElementById("popupDelete");
        const btnConfirmDelPedido = document.querySelector("#btnConfirmDelPedido");
        const btnCancelDelPedido = document.querySelector("#btnCancelDelPedido");

        const closeDeletePopup = () => {
            overlay3.classList.remove("active");
            popUpDelete.classList.remove("active");
        };

        overlay3.classList.add("active");
        popUpDelete.classList.add("active");

        const handleConfirmDelete = e => {
            e.preventDefault();
            deleteData(endpoint, pedido.id)
                .then(response => {
                    if (response.ok) {
                        popUpDelete.innerHTML = `
                            <box-icon name='check-circle' type='solid' color='#6bf54a'></box-icon>
                            <div id="btnCloseDel" class="button-cancel_modal">&#10005;</div>`;
                        
                        document.getElementById("btnCloseDel").addEventListener("click", e => {
                            e.preventDefault();
                            closeDeletePopup();
                        });
                    } else {
                        throw new Error(`Error en la solicitud DELETE: ${response.status} - ${response.statusText}`);
                    }
                })
                .catch(error => {
                    console.error("Error en la eliminación de datos:", error);
                    popUpDelete.innerHTML = `
                        <div>Error al eliminar la oficina. Por favor, inténtelo de nuevo.</div>
                        <div id="btnCloseDelError" class="button-cancel_modal">&#10005;</div>`;
                    
                    document.getElementById("btnCloseDelError").addEventListener("click", e => {
                        e.preventDefault();
                        closeDeletePopup();
                    });
                });
        };

        btnConfirmDelPedido.addEventListener("click", handleConfirmDelete, { once: true });

        btnCancelDelPedido.addEventListener("click", e => {
            e.preventDefault();
            closeDeletePopup();
        });
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
