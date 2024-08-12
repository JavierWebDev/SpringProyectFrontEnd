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

                <div class="overlay" id="overlay4Pedidos">
                    <div id="popupAllrigthPedido" class="popup-allright">
                        <box-icon name='check-circle' color='#69ff94' ></box-icon>
                        <div id="btnCloseModalsAllrigthPedido" class="button-cancel_modal">&#10005;</div>
                    </div>
                </div>

                <div class="overlay" id="overlay3Pedido">
                    <div id="popupDeletePedido" class="popup-delete">
                        <div id="delModalPedido" class="cont">
                            <p>Estas seguro que deseas eliminar la pedido?</p>

                            <div class="cont-buttons_delete">
                                <a href="" id="btnConfirmDelPedido" class="button-confirm_delete">Confirm</a>
                                <a href="" id="btnCancelDelPedido" class="button-cancel_delete">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overlay" id="overlay2Pedido">
                    <div id="popUpInfoPedido" class="popup-info">
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

                <div id="overlayPedidoUpdate" class="overlay">
                    <div id="popUpUpdatePedido" class="popup-add">
                        <div class="cont-top_modal">
                            <h1 class="titulo-list">Edit Pedido</h1>
                            <div id="btnCancelUpdatePedido" class="button-cancel_modal">&#10005;</div>
                        </div>
    
                        <div class="cont-form">
                            <form id="updatePedidoForm" class="form-new">

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
                                        <label class="label-form" for="inClientPedidoUpdate">Cliente dueño del pedido</label>
                                        <select class="input-form input-select" id="inClientPedidoUpdate"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inStatusPedidoUpdate">Estado del pedido</label>
                                        <select class="input-form input-select" id="inStatusPedidoUpdate"></select>
                                    </div>
                                </div>

                                <div class="button-add"> <button id="UpdatePedido" class="button-new">SAVE</button> </div>

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

    async arrayClients() {
        const endpoint = "cliente";
        const { data, error } = await getData(endpoint);
        
        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }

    async arrayEstado() {
        const endpoint = "estado";
        const { data, error } = await getData(endpoint);
        
        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }
        return data;
    }

    fillSelectsUpdate(){
        const selectClients = document.querySelector("#inClientPedidoUpdate");
        const selectEstado = document.querySelector("#inStatusPedidoUpdate");
    
        this.arrayClients().then((client) => {
            if (client){
                selectClients.innerHTML= ''
                client.forEach(client => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(client);
                    opc.textContent = client.nombre;
                    selectClients.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los clientes.");
            }
        }).catch((error) => {
            console.error("Error al obtener los clientos:", error);
        });
    
        this.arrayEstado().then((status) => {
            if (status){
                selectEstado.innerHTML= ''
                status.forEach(status => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(status);
                    opc.textContent = status.estado;
                    selectEstado.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los estados.");
            }
        }).catch((error) => {
            console.error("Error al obtener los estados:", error);
        });
    }

    fillSelects(){
        const selectClients = document.querySelector("#inClientPedido");
        const selectEstado = document.querySelector("#inStatusPedido");
    
        this.arrayClients().then((client) => {
            if (client){
                selectClients.innerHTML= ''
                client.forEach(client => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(client);
                    opc.textContent = client.nombre;
                    selectClients.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los clientes.");
            }
        }).catch((error) => {
            console.error("Error al obtener los clientos:", error);
        });
    
        this.arrayEstado().then((status) => {
            if (status){
                selectEstado.innerHTML= ''
                status.forEach(status => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(status);
                    opc.textContent = status.estado;
                    selectEstado.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los estados.");
            }
        }).catch((error) => {
            console.error("Error al obtener los estados:", error);
        });
    }


    // CREATE

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

        this.fillSelects();


        btnAddPedido.addEventListener("click", async e => {
            e.preventDefault();

            let datos = Object.fromEntries(new FormData(addPedidoForm).entries());
            datos.id = 0;

            datos.fechaPedido = new Date(datos.fechaPedido).toISOString(); 
            datos.fechaEsperada = new Date(datos.fechaEsperada).toISOString();
            datos.fechaEntrega = new Date(datos.fechaEntrega).toISOString();


            datos.cliente = JSON.parse(selectClient.value);
            datos.estadoPedido = JSON.parse(selectStatus.value);

            console.log(datos)

            try {
                const response = await postData(datos, endpoint); 
        
                if (response.ok) {
                    this.showOffices(); 
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

    //UPDATE

    controlModalUpdate(pedido) {
        const overlayUpdate = document.getElementById("overlayPedidoUpdate");
        const popUpUpdate = document.getElementById("popUpUpdatePedido");
        const btnAbrirPedido = document.getElementsByClassName("card-button btnUpdatePedido");
        const btnCerrar = document.getElementById("btnCancelUpdatePedido");
    
        const selectClient = document.querySelector("#inClientPedidoUpdate");
        const selectStatus = document.querySelector("#inStatusPedidoUpdate");
    
        const btnUpdatePedido = document.getElementById("UpdatePedido")
        const updatePedidoForm = document.getElementById("updatePedidoForm");
    
        const endpoint = "pedidos";
    
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
    
        if (btnUpdatePedido) {
            btnUpdatePedido.addEventListener("click", async e => {
                e.preventDefault();
    
                let datos = Object.fromEntries(new FormData(updatePedidoForm).entries());
                datos.id = pedido.id;
    
                datos.fechaPedido = new Date(datos.fechaPedido).toISOString(); // Enviar en formato ISO
                datos.fechaEsperada = new Date(datos.fechaEsperada).toISOString();
                datos.fechaEntrega = new Date(datos.fechaEntrega).toISOString();
    
                datos.cliente = JSON.parse(selectClient.value);
                datos.estadoPedido = JSON.parse(selectStatus.value);
    
                console.log(datos);
    
                try {
                    const response = await updateData(datos, endpoint, pedido.id);
    
                    if (response.ok) {
                        this.showOffices(); 
                    } else {
                        throw new Error('Error al actualizar el pedido');
                    }
                } catch (error) {
                    console.error('Error al añadir el pedido:', error);
                }
            });
        } else {
            console.error("No se encontró el botón UpdatePedido");
        }
    
        for (let i = 0; i < btnAbrirPedido.length; i++) {
            btnAbrirPedido[i].addEventListener("click", e => {
                overlayUpdate.classList.add("active");
                popUpUpdate.classList.add("active");
                e.preventDefault();
            });
        }
    
        if (btnCerrar) {
            btnCerrar.addEventListener("click", e => {
                overlayUpdate.classList.remove("active");
                popUpUpdate.classList.remove("active");
                e.preventDefault();
            });
        } else {
            console.error("No se encontró el botón de cerrar");
        }
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
            if (pedidos.length === 0) {
                contShowPedidos.innerHTML='<p class="txt-showbox">No hay pedidos registrados</p>'
            }else {
                if (pedidos) {
                    contShowPedidos.innerHTML=''
                    pedidos.forEach(pedido => {
                        const card = document.createElement("div");
                        card.classList.add("card-element");
                        card.innerHTML = `
                            <p class="card-text">${pedido.id}</p>
                            <p class="card-text">${pedido.cliente ? pedido.cliente.nombre : 'Cliente eliminado'}</p>
                            <p class="card-text">${pedido.estadoPedido.estado}</p>
                            <div class="card-buttons_container">
                                <a href="#" class="card-button btnInfoPedido" data-id="${pedido.id}">
                                    <box-icon name='info-circle' color='#508C9B'></box-icon>
                                </a>
                                <a href="#" class="card-button btnDeletePedido" data-id="${pedido.id}" >
                                    <box-icon name='trash' color='#508C9B'></box-icon>
                                </a>
                                <a href="#" class="card-button btnUpdatePedido" data-id="${pedido.id}">
                                    <box-icon name='pencil' color='#508C9B'></box-icon>
                                </a>
                            </div>`;
    
                        contShowPedidos.appendChild(card);

                        card.querySelector(".btnUpdatePedido").addEventListener("click", e => {
                            e.preventDefault();
                            const pedidoId = e.currentTarget.getAttribute("data-id");
                            const pedido = pedidos.find(o => o.id.toString() === pedidoId);
    
                            if (pedido) {
                                this.controlModalUpdate(pedido);
                            } else {
                                console.error(`No se encontró el pedido con id: ${pedidoId}`);
                            }
                        });
                        
    
                        
                    })
    
                    document.querySelectorAll(".btnInfoPedido").forEach(button => {
                        button.addEventListener("click", e => {
                            e.preventDefault();
                            const pedidoId = button.getAttribute("data-id");
                            const pedido = pedidos.find(o => o.id.toString() === pedidoId);
        
                            if (pedido) {
                                this.showInfoPedido(pedido);
                            } else {
                                console.error(`No se encontró la oficina con id: ${pedidoId}`);
                            }
                        });
                    });
    
                    document.querySelectorAll(".btnDeletePedido").forEach(button => {
                        button.addEventListener("click", e => {
                            e.preventDefault();
                            const pedidoId = button.getAttribute("data-id");
                            const pedido = pedidos.find(o => o.id.toString() === pedidoId);
        
                            if (pedido) {
                                this.deleteOffice(pedido);
                            } else {
                                console.error(`No se encontró la oficina con id: ${pedidoId}`);
                            }
                        });
                    });

                    
                    
                } else {
                    console.log("No se pudieron obtener las pedidos.");
                }

            }
            
        })
        .catch((error) => {
            console.error("Error al obtener las pedidos:", error);
        });


    }

    showInfoPedido(pedido) {
        const overlay2 = document.getElementById("overlay2Pedido");
        const popUpInfoPedido = document.getElementById("popUpInfoPedido");
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
                <p name="pOfficePCode" class="card-text">ID: ${pedido.cliente.id} Nombre: ${pedido.cliente.nombre}</p>
            </div>
            <div class="cont-info_p">
                <label for="pOfficeAddr" class="label-form">Estado</label>
                <p class="card-text">${pedido.estadoPedido.estado}</p>
            </div>`;

        overlay2.classList.add("active");
        popUpInfoPedido.classList.add("active");

        document.getElementById("btnCancelPedidoInfo").addEventListener("click", e => {
            e.preventDefault();
            overlay2.classList.remove("active");
            popUpInfoPedido.classList.remove("active");
        });
    }

    deleteOffice(pedido) {
        const endpoint = "pedidos";
        const overlay3pedido = document.querySelector("#overlay3Pedido");
        const popupDeletePedido = document.getElementById("popupDeletePedido");
        const btnConfirmDelPedido = document.querySelector("#btnConfirmDelPedido");
        const btnCancelDelPedido = document.querySelector("#btnCancelDelPedido");
        const contShowPedidos = document.querySelector("#containerShowPedidos");

        const overlay4Pedido = document.querySelector("#overlay4Pedidos");
        const popUpAllrigth = document.getElementById("popupAllrigthPedido")
        const btnCloseModals = document.querySelector("#btnCloseModalsAllrigthPedido")

        const closeDeletePopup = () => {
            overlay3pedido.classList.remove("active");
            popupDeletePedido.classList.remove("active");
        };

        const closeConfirmPopup = () => {
            overlay4Pedido.classList.remove("active");
            popUpAllrigth.classList.remove("active");
        };

        overlay3pedido.classList.add("active");
        popupDeletePedido.classList.add("active");

        const handleConfirmDelete = e => {
            e.preventDefault();
            deleteData(endpoint, pedido.id)
                .then(response => {
                    if (response.ok) {
                        closeDeletePopup();
                        
                        overlay4Pedido.classList.add("active")
                        popUpAllrigth.classList.add("active")

                        // Espera un pequeño retraso antes de actualizar la lista
                        setTimeout(() => {
                            contShowPedidos.innerHTML = "";  // Limpiar lista actual
                            this.showOffices();  
                        }, 200);  
    
                        
                        btnCloseModals.addEventListener("click", e => {
                            e.preventDefault();
                            overlay4Pedido.classList.remove("active")
                            popUpAllrigth.classList.remove("active")
                        });
                    } else {
                        throw new Error(`Error en la solicitud DELETE: ${response.status} - ${response.statusText}`);
                    }
                })
                .catch(error => {
                    console.error("Error en la eliminación de datos:", error);
                    popupDeletePedido.innerHTML = `
                        <div>Error al eliminar el pedido. Por favor, inténtelo de nuevo.</div>
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

    

    
}
customElements.define("pedidos-menu", PedidosMenu);
