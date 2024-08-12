import { deleteData, getData, postData, updateData, getElementData, getDataTry } from '/API/API.js';

export class ClientesMenu extends HTMLElement {
    constructor(){
        super();
        this.render();
        // this.findAll();
        // this.controllerAction();
        this.goBack();
        this.controlModalAdd();
        this.showClientes();
    }

    render() {
        this.innerHTML = /* html */ `
        <section class="container-wc">
            <div class="cont-button">
                <a href="" id="btnVolverClient"><box-icon name='arrow-back' ></box-icon></a>
            </div>

            <div class="container-titulos_list">
                <h1 class="titulo-list">Clientes</h1>

                <a id="btnAddClient" class="button-new" href="#"><box-icon name='plus' color="#FFF"></box-icon> New Client</a>
            </div>

            <div class="cont-list_big">
                <div class="cont-list">
                    <p class="titulo-list-id">ID</p>
                    <p class="titulo-list-id">Cliente</p>
                    <p class="titulo-list-id">Numero</p>
                </div>

                <div id="containerShowClientes" class="elements-list">

                </div>

                <div class="overlay" id="overlay4Clientes">
                    <div id="popupAllrigthClient" class="popup-allright">
                        <box-icon name='check-circle' color='#69ff94' ></box-icon>
                        <div id="btnCloseModalsAllrigthClient" class="button-cancel_modal">&#10005;</div>
                    </div>
                </div>

                <div class="overlay" id="overlay3Client">
                    <div id="popupDeleteClient" class="popup-delete">
                        <div id="delModalClient" class="cont">
                            <p>Estas seguro que deseas eliminar la Client?</p>

                            <div class="cont-buttons_delete">
                                <a href="" id="btnConfirmDelClient" class="button-confirm_delete">Confirm</a>
                                <a href="" id="btnCancelDelClient" class="button-cancel_delete">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overlay" id="overlay2Client">
                    <div id="popUpInfoClient" class="popup-info">
                        <div class="cont-top_modal">
                            <div id="btnCancelClientInfo" class="button-cancel_modal">&#10005;</div>
                        </div>

                        <div id="infoModalClient" class="cont">
                            
                        </div>
                    </div>
                </div>

                <div id="overlayClient" class="overlay">
                    <div id="popUpAddClient" class="popup-add">
                        <div class="cont-top_modal">
                            <h1 class="titulo-list">New Client</h1>
                            <div id="btnCancelAddClient" class="button-cancel_modal">&#10005;</div>
                        </div>
    
                        <div class="cont-form">
                            <form id="addClientForm" class="form-new">

                                <div class="cont-input_two cont-input"> 
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="name">Nombre</label>
                                        <input type="text" class="input-form input-txt" name="nombre"id="nameClient"> 
                                    </div>
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="apellido1">Primer apellido</label>
                                        <input type="text" class="input-form input-txt" name="apellido1"id="apellido">
                                    </div>
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="apellido2">Segundo apellido</label>
                                        <input type="text" class="input-form input-txt" name="apellido2" id="apellido2">
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inContactClient">Contacto</label>
                                        <select class="input-form input-select" id="inContactClient"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inTelefonoClient">Telefono</label>
                                        <select class="input-form input-select" id="inTelefonoClient"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inFaxClient">Fax</label>
                                        <select class="input-form input-select" id="inFaxClient"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inDireccionClient">Direccion</label>
                                        <select class="input-form input-select" id="inDireccionClient"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inCityClient">Ciudad</label>
                                        <select class="input-form input-select" id="inCityClient"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inCodPostalClient">Codigo postal</label>
                                        <select class="input-form input-select" id="inCodPostalClient"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inPaisClient">Pais</label>
                                        <select class="input-form input-select" id="inPaisClient"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inEmpleadoClient">Empleado</label>
                                        <select class="input-form input-select" id="inEmpleadoClient"></select>
                                    </div>
                                </div>

                                <div class="button-add"> <button id="createNewClient" class="button-new">ADD</button> </div>

                            </form>
                        </div>
                    </div>
                </div>

                <div id="overlayClientUpdate" class="overlay">
                    <div id="popUpUpdateClient" class="popup-add">
                        <div class="cont-top_modal">
                            <h1 class="titulo-list">Edit Client</h1>
                            <div id="btnCancelUpdateClient" class="button-cancel_modal">&#10005;</div>
                        </div>
    
                        <div class="cont-form">
                            <form id="updateClientForm" class="form-new">

                            <div class="cont-input_two cont-input"> 
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="name">Nombre</label>
                                        <input type="text" class="input-form input-txt" name="nombre"id="nameClient"> 
                                    </div>
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="apellido1">Primer apellido</label>
                                        <input type="text" class="input-form input-txt" name="apellido1"id="apellido">
                                    </div>
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="apellido2">Segundo apellido</label>
                                        <input type="text" class="input-form input-txt" name="apellido2" id="apellido2">
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inContactClient">Contacto</label>
                                        <select class="input-form input-select" id="inContactClientEdit"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inTelefonoClient">Telefono</label>
                                        <select class="input-form input-select" id="inTelefonoClientEdit"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inFaxClient">Fax</label>
                                        <select class="input-form input-select" id="inFaxClientEdit"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inDireccionClient">Direccion</label>
                                        <select class="input-form input-select" id="inDireccionClientEdit"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inCityClient">Ciudad</label>
                                        <select class="input-form input-select" id="inCityClientEdit"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inCodPostalClient">Codigo postal</label>
                                        <select class="input-form input-select" id="inCodPostalClientEdit"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inPaisClient">Pais</label>
                                        <select class="input-form input-select" id="inPaisClientEdit"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inEmpleadoClient">Empleado</label>
                                        <select class="input-form input-select" id="inEmpleadoClientEdit"></select>
                                    </div>
                                </div>
                                <div class="button-add"> <button id="UpdateClient" class="button-new">SAVE</button> </div>

                            </form>
                        </div>
                    </div>
                </div>
    
        </section>
        `;
    }

    goBack() {
        const btnVolverClient = document.querySelector("#btnVolverClient");
        const Clientes = document.querySelector("Clientes-menu")
        const mainMenu = document.querySelector("main-menu");

        btnVolverClient.addEventListener("click", e => {
            Clientes.style.display = "none";
            mainMenu.style.display = "block"

            e.preventDefault();
        })
    }

    // FOREING KEYS

    async arrayContact(){
        const endpoint = "contacto";
        const {data , error} = await getData(endpoint)

        if (error){
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }

    async arrayTelefono(){
        const endpoint = "telefono";
        const {data , error} = await getData(endpoint)

        if (error){
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }

    async arrayFax(){
        const endpoint = "fax";
        const {data , error} = await getData(endpoint)

        if (error){
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }

    async arrayDireccion(){
        const endpoint = "direccion";
        const {data , error} = await getData(endpoint)

        if (error){
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }


    async arrayCity(){
        const endpoint = "ciudad";
        const {data , error} = await getData(endpoint)

        if (error){
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }


    async arrayCodPostal(){
        const endpoint = "codigo_postal";
        const {data , error} = await getData(endpoint)

        if (error){
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }

    async arrayPais(){
        const endpoint = "pais";
        const {data , error} = await getData(endpoint)

        if (error){
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }

    async arrayEmpleado(){
        const endpoint = "empleado";
        const {data , error} = await getData(endpoint)

        if (error){
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }

    fillSelectsUpdate(){
        const selectContact = document.querySelector("#inContactClientEdit");
        const selectTelefono = document.querySelector("#inTelefonoClientEdit");
        const selectFax = document.querySelector("#inFaxClientEdit");
        const selectDireccion = document.querySelector("#inDireccionClientEdit");
        const selectCity = document.querySelector("#inCityClientEdit");
        const selectCodPostal = document.querySelector("#inCodPostalClientEdit");
        const selectPais = document.querySelector("#inPaisClientEdit");
        const selectEmpleado = document.querySelector("#inEmpleadoClientEdit");
    
        this.arrayContact().then((contact) => {
            if (contact){
                selectContact.innerHTML= ''
                contact.forEach(contact => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(contact);
                    opc.textContent = contact.nombre;
                    selectContact.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los contactos.");
            }
        }).catch((error) => {
            console.error("Error al obtener los contactos:", error);
        });
    
        this.arrayTelefono().then((telefono) => {
            if (telefono){
                selectTelefono.innerHTML= ''
                telefono.forEach(telefono => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(telefono);
                    opc.textContent = telefono.nombre;
                    selectTelefono.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los teléfonos.");
            }
        }).catch((error) => {
            console.error("Error al obtener los teléfonos:", error);
        });
    
        this.arrayFax().then((fax) => {
            if (fax){
                selectFax.innerHTML= ''
                fax.forEach(fax => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(fax);
                    opc.textContent = fax.fax;
                    selectFax.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los faxes.");
            }
        }).catch((error) => {
            console.error("Error al obtener los faxes:", error);
        });
    
        this.arrayDireccion().then((direccion) => {
            if (direccion){
                selectDireccion.innerHTML= ''
                direccion.forEach(direccion => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(direccion);
                    opc.textContent = direccion.calle;
                    selectDireccion.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener las direcciones.");
            }
        }).catch((error) => {
            console.error("Error al obtener las direcciones:", error);
        });
    
        this.arrayCity().then((ciudad) => {
            if (ciudad){
                selectCity.innerHTML= ''
                ciudad.forEach(ciudad => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(ciudad);
                    opc.textContent = ciudad.nombreCiudad;
                    selectCity.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener las ciudades.");
            }
        }).catch((error) => {
            console.error("Error al obtener las ciudades:", error);
        });
    
        this.arrayCodPostal().then((codigoPostal) => {
            if (codigoPostal){
                selectCodPostal.innerHTML= ''
                codigoPostal.forEach(codigoPostal => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(codigoPostal);
                    opc.textContent = codigoPostal.codigo;
                    selectCodPostal.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los códigos postales.");
            }
        }).catch((error) => {
            console.error("Error al obtener los códigos postales:", error);
        });
    
        this.arrayPais().then((pais) => {
            if (pais){
                selectPais.innerHTML= ''
                pais.forEach(pais => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(pais);
                    opc.textContent = pais.name;
                    selectPais.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los países.");
            }
        }).catch((error) => {
            console.error("Error al obtener los países:", error);
        });
    
        this.arrayEmpleado().then((empleado) => {
            if (empleado){
                selectEmpleado.innerHTML= ''
                empleado.forEach(empleado => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(empleado);
                    opc.textContent = empleado.nombreEmpleado;
                    selectEmpleado.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los empleados.");
            }
        }).catch((error) => {
            console.error("Error al obtener los empleados:", error);
        });
    }


    fillSelectsEdit(){
        const selectContact = document.querySelector("#inContactClient");
        const selectTelefono = document.querySelector("#inTelefonoClient");
        const selectFax = document.querySelector("#inFaxClient");
        const selectDireccion = document.querySelector("#inDireccionClient");
        const selectCity = document.querySelector("#inCityClient");
        const selectCodPostal = document.querySelector("#inCodPostalClient");
        const selectPais = document.querySelector("#inPaisClient");
        const selectEmpleado = document.querySelector("#inEmpleadoClient");
    
        this.arrayContact().then((contact) => {
            if (contact){
                selectContact.innerHTML= ''
                contact.forEach(contact => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(contact);
                    opc.textContent = contact.nombre;
                    selectContact.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los contactos.");
            }
        }).catch((error) => {
            console.error("Error al obtener los contactos:", error);
        });
    
        this.arrayTelefono().then((telefono) => {
            if (telefono){
                selectTelefono.innerHTML= ''
                telefono.forEach(telefono => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(telefono);
                    opc.textContent = telefono.nombre;
                    selectTelefono.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los teléfonos.");
            }
        }).catch((error) => {
            console.error("Error al obtener los teléfonos:", error);
        });
    
        this.arrayFax().then((fax) => {
            if (fax){
                selectFax.innerHTML= ''
                fax.forEach(fax => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(fax);
                    opc.textContent = fax.fax;
                    selectFax.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los faxes.");
            }
        }).catch((error) => {
            console.error("Error al obtener los faxes:", error);
        });
    
        this.arrayDireccion().then((direccion) => {
            if (direccion){
                selectDireccion.innerHTML= ''
                direccion.forEach(direccion => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(direccion);
                    opc.textContent = direccion.calle;
                    selectDireccion.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener las direcciones.");
            }
        }).catch((error) => {
            console.error("Error al obtener las direcciones:", error);
        });
    
        this.arrayCity().then((ciudad) => {
            if (ciudad){
                selectCity.innerHTML= ''
                ciudad.forEach(ciudad => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(ciudad);
                    opc.textContent = ciudad.nombreCiudad;
                    selectCity.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener las ciudades.");
            }
        }).catch((error) => {
            console.error("Error al obtener las ciudades:", error);
        });
    
        this.arrayCodPostal().then((codigoPostal) => {
            if (codigoPostal){
                selectCodPostal.innerHTML= ''
                codigoPostal.forEach(codigoPostal => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(codigoPostal);
                    opc.textContent = codigoPostal.codigo;
                    selectCodPostal.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los códigos postales.");
            }
        }).catch((error) => {
            console.error("Error al obtener los códigos postales:", error);
        });
    
        this.arrayPais().then((pais) => {
            if (pais){
                selectPais.innerHTML= ''
                pais.forEach(pais => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(pais);
                    opc.textContent = pais.name;
                    selectPais.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los países.");
            }
        }).catch((error) => {
            console.error("Error al obtener los países:", error);
        });
    
        this.arrayEmpleado().then((empleado) => {
            if (empleado){
                selectEmpleado.innerHTML= ''
                empleado.forEach(empleado => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(empleado);
                    opc.textContent = empleado.nombreEmpleado;
                    selectEmpleado.appendChild(opc);
                })
            } else {
                console.log("No se pudieron obtener los empleados.");
            }
        }).catch((error) => {
            console.error("Error al obtener los empleados:", error);
        });
    }
    




    // CREATE

    controlModalAdd() {
        const overlay = document.getElementById("overlayClient");
        const popUpAdd = document.getElementById("popUpAddClient");
        const btnAbrirClient = document.getElementById("btnAddClient");
        const btnCerrar = document.getElementById("btnCancelAddClient");

        const selectContact = document.getElementById("inContactClient");
        const selectTelefono = document.getElementById("inTelefonoClient");
        const selectFax = document.getElementById("inFaxClient");
        const selectDireccion = document.getElementById("inDireccionClient");
        const selectCity = document.getElementById("inCityClient");
        const selectCodPostal = document.getElementById("inCodPostalClient");
        const selectPais = document.getElementById("inPaisClient");
        const selectEmpleado = document.getElementById("inEmpleadoClient");

        

        const btnAddClient = document.querySelector("#createNewClient")

        const addClientForm = document.getElementById("addClientForm");

        const inputs = document.querySelectorAll(".input-form");

        const endpoint = "cliente"


       this.fillSelectsEdit();

        
        btnAddClient.addEventListener("click", async e => {
            e.preventDefault();

            let datos = Object.fromEntries(new FormData(addClientForm).entries());
            datos.id = 0;

            datos.contacto = JSON.parse(selectContact.value);
            datos.telefono = JSON.parse(selectTelefono.value);
            datos.fax = JSON.parse(selectFax.value);
            datos.direccion = JSON.parse(selectDireccion.value);
            datos.ciudad = JSON.parse(selectCity.value);
            datos.codigoPostal = JSON.parse(selectCodPostal.value);
            datos.pais = JSON.parse(selectPais.value);
            datos.empleado = JSON.parse(selectEmpleado.value);


            console.log(datos)

            try {
                const response = await postData(datos, endpoint); // postData es una función que deberías tener en tu API.js
        
                if (response.ok) {
                    this.showClientes(); 
                } else {
                    throw new Error('Error al añadir el Client');
                }
            } catch (error) {
                console.error('Error al añadir el Client:', error);
            }
        })

        btnAbrirClient.addEventListener("click", e => {
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

    controlModalUpdate(Client) {
        const overlayUpdate = document.getElementById("overlayClientUpdate");
        const popUpAddUpdate = document.getElementById("popUpUpdateClient");
        const btnAbrirClientUpdate = document.getElementsByClassName("card-button btnUpdateClient");
        const btnCerrarUpdate = document.getElementById("btnCancelUpdateClient");

        const selectContact = document.getElementById("inContactClientEdit");
        const selectTelefono = document.getElementById("inTelefonoClientEdit");
        const selectFax = document.getElementById("inFaxClientEdit");
        const selectDireccion = document.getElementById("inDireccionClientEdit");
        const selectCity = document.getElementById("inCityClientEdit");
        const selectCodPostal = document.getElementById("inCodPostalClientEdit");
        const selectPais = document.getElementById("inPaisClientEdit");
        const selectEmpleado = document.getElementById("inEmpleadoClientEdit");

        

        const btnUpdateClient = document.getElementById("UpdateClient")

        const UpdateClientForm = document.getElementById("updateClientForm");

        const inputs = document.querySelectorAll(".input-form");

        const endpoint = "cliente"


       this.fillSelectsUpdate();

        
        if (btnUpdateClient) {
            btnUpdateClient.addEventListener("click", async e => {
                e.preventDefault();

                let datos = Object.fromEntries(new FormData(UpdateClientForm).entries());
                datos.id = Client.id;

                datos.contacto = JSON.parse(selectContact.value);
                datos.telefono = JSON.parse(selectTelefono.value);
                datos.fax = JSON.parse(selectFax.value);
                datos.direccion = JSON.parse(selectDireccion.value);
                datos.ciudad = JSON.parse(selectCity.value);
                datos.codigoPostal = JSON.parse(selectCodPostal.value);
                datos.pais = JSON.parse(selectPais.value);
                datos.empleado = JSON.parse(selectEmpleado.value);

                console.log(datos);

                try {
                    const response = await updateData(datos, endpoint, Client.id);

                    if (response.ok) {
                        this.showOffices(); 
                    } else {
                        throw new Error('Error al actualizar el cliente');
                    }
                } catch (error) {
                    console.error('Error al añadir el cliente:', error);
                }
                });
        } else {
            console.error("No se encontró el botón UpdatePedido");
        }

        for (let i = 0; i < btnAbrirClientUpdate.length; i++) {
            btnAbrirClientUpdate[i].addEventListener("click", e => {
                overlayUpdate.classList.add("active");
                popUpAddUpdate.classList.add("active");
                e.preventDefault();
            });
        }

        if (btnCerrarUpdate) {
            btnCerrarUpdate.addEventListener("click", e => {
                overlayUpdate.classList.remove("active");
                popUpAddUpdate.classList.remove("active");
                e.preventDefault();
            });
        } else {
            console.error("No se encontró el botón de cerrar");
        }


    }

    async arrayRequest() {
        const endpoint = "cliente";
        const { data, error } = await getData(endpoint);
        
        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }

    showClientes() {
        const btnAddClient = document.getElementById("btnAddClient");
        const overlay = document.getElementById("overlay");
        const popUpAdd = document.getElementById("popUpAdd");
        const btnCerrar = document.getElementById("btnCancelAdd");
        const contShowClientes = document.querySelector("#containerShowClientes");
        

        btnAddClient.addEventListener("click", e => {
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
        .then((Clientes) => {
            if (Clientes.length === 0) {
                contShowClientes.innerHTML='<p class="txt-showbox">No hay Clientes registrados</p>'
            }else {
                if (Clientes) {
                    contShowClientes.innerHTML=''
                    Clientes.forEach(Client => {
                        const card = document.createElement("div");
                        card.classList.add("card-element");
                        card.innerHTML = `
                            <p class="card-text">${Client.id}</p>
                            <p class="card-text">${Client.nombre}</p>
                            <p class="card-text">${Client.telefono.nombre}</p>
                            <div class="card-buttons_container">
                                <a href="#" class="card-button btnInfoClient" data-id="${Client.id}">
                                    <box-icon name='info-circle' color='#508C9B'></box-icon>
                                </a>
                                <a href="#" class="card-button btnDeleteClient" data-id="${Client.id}" >
                                    <box-icon name='trash' color='#508C9B'></box-icon>
                                </a>
                                <a href="#" class="card-button btnUpdateClient" data-id="${Client.id}">
                                    <box-icon name='pencil' color='#508C9B'></box-icon>
                                </a>
                            </div>`;
    
                        contShowClientes.appendChild(card);
                        
                        card.querySelector(".btnUpdateClient").addEventListener("click", e => {
                            e.preventDefault();
                            const clienteId = e.currentTarget.getAttribute("data-id");
                            const cliente = Clientes.find(o => o.id.toString() === clienteId);
    
                            if (cliente) {
                                this.controlModalUpdate(cliente);
                            } else {
                                console.error(`No se encontró el cliente con id: ${clienteId}`);
                            }
                        });
                        
                    })
    
                    document.querySelectorAll(".btnInfoClient").forEach(button => {
                        button.addEventListener("click", e => {
                            e.preventDefault();
                            const ClientId = button.getAttribute("data-id");
                            const Client = Clientes.find(o => o.id.toString() === ClientId);
        
                            if (Client) {
                                this.showInfoClient(Client);
                            } else {
                                console.error(`No se encontró la oficina con id: ${ClientId}`);
                            }
                        });
                    });
    
                    document.querySelectorAll(".btnDeleteClient").forEach(button => {
                        button.addEventListener("click", e => {
                            e.preventDefault();
                            const ClientId = button.getAttribute("data-id");
                            const Client = Clientes.find(o => o.id.toString() === ClientId);
        
                            if (Client) {
                                this.deleteCliente(Client);
                            } else {
                                console.error(`No se encontró la oficina con id: ${ClientId}`);
                            }
                        });
                    });

                    
                    
                } else {
                    console.log("No se pudieron obtener las Clientes.");
                }

            }
            
        })
        .catch((error) => {
            console.error("Error al obtener las Clientes:", error);
        });


    }

    showInfoClient(Client) {
        const overlay2 = document.getElementById("overlay2Client");
        const popUpInfoClient = document.getElementById("popUpInfoClient");
        const infoModal = document.getElementById("infoModalClient");

        infoModal.innerHTML = `
            <div class="cont-info_p">
                <label class="label-form">Nombre</label>
                <p  class="card-text">${Client.nombre}</p>
            </div>
            <div class="cont-info_p">
                <label  class="label-form">Primer apellido</label>
                <p class="card-text">${Client.apellido1}</p>
            </div>
            <div class="cont-info_p">
                <label class="label-form">Segundo apellido</label>
                <p class="card-text">${Client.apellido2}</p>
            </div>
            <div class="cont-info_p">
                <label  class="label-form">Contacto</label>
                <p class="card-text">${Client.contacto.nombre}</p>
            </div>
            <div class="cont-info_p">
                <label  class="label-form">Telefono</label>
                <p class="card-text">${Client.telefono.nombre}</p>
            </div>
            <div class="cont-info_p">
                <label  class="label-form">Fax</label>
                <p class="card-text">${Client.fax.fax}</p>
            </div>
            <div class="cont-info_p">
                <label class="label-form">Direccion</label>
                <p class="card-text">${Client.direccion.calle} # ${Client.direccion.numero}</p>
            </div>
            <div class="cont-info_p">
                <label  class="label-form">Ciudad</label>
                <p class="card-text">${Client.ciudad.nombreCiudad}</p>
            </div>
            <div class="cont-info_p">
                <label class="label-form">Pais</label>
                <p class="card-text">${Client.pais.name}</p>
            </div>
            <div class="cont-info_p">
                <label class="label-form">Empleado</label>
                <p class="card-text">${Client.empleado.nombreEmpleado}</p>
            </div>
            `;
            

        overlay2.classList.add("active");
        popUpInfoClient.classList.add("active");

        document.getElementById("btnCancelClientInfo").addEventListener("click", e => {
            e.preventDefault();
            overlay2.classList.remove("active");
            popUpInfoClient.classList.remove("active");
        });
    }

    deleteCliente(Client) {
        const endpoint = "cliente";
        const overlay3Client = document.querySelector("#overlay3Client");
        const popupDeleteClient = document.getElementById("popupDeleteClient");
        const btnConfirmDelClient = document.querySelector("#btnConfirmDelClient");
        const btnCancelDelClient = document.querySelector("#btnCancelDelClient");
        const contShowClientes = document.querySelector("#containerShowClientes");

        const overlay4Client = document.querySelector("#overlay4Clientes");
        const popUpAllrigth = document.getElementById("popupAllrigthClient")
        const btnCloseModals = document.querySelector("#btnCloseModalsAllrigthClient")

        const closeDeletePopup = () => {
            overlay3Client.classList.remove("active");
            popupDeleteClient.classList.remove("active");
        };


        overlay3Client.classList.add("active");
        popupDeleteClient.classList.add("active");

        const handleConfirmDelete = e => {
            e.preventDefault();
            deleteData(endpoint, Client.id)
                .then(response => {
                    if (response.ok) {
                        closeDeletePopup();
                        
                        overlay4Client.classList.add("active")
                        popUpAllrigth.classList.add("active")

                        // Espera un pequeño retraso antes de actualizar la lista
                        setTimeout(() => {
                            contShowClientes.innerHTML = "";  // Limpiar lista actual
                            this.showClientes();  
                        }, 200);  
    
                        
                        btnCloseModals.addEventListener("click", e => {
                            e.preventDefault();
                            overlay4Client.classList.remove("active")
                            popUpAllrigth.classList.remove("active")
                        });
                    } else {
                        throw new Error(`Error en la solicitud DELETE: ${response.status} - ${response.statusText}`);
                    }
                })
                .catch(error => {
                    console.error("Error en la eliminación de datos:", error);
                    popupDeleteClient.innerHTML = `
                        <div>Error al eliminar el Client. Por favor, inténtelo de nuevo.</div>
                        <div id="btnCloseDelError" class="button-cancel_modal">&#10005;</div>`;
                    
                    document.getElementById("btnCloseDelError").addEventListener("click", e => {
                        e.preventDefault();
                        closeDeletePopup();
                    });
                });
        };

        btnConfirmDelClient.addEventListener("click", handleConfirmDelete, { once: true });

        btnCancelDelClient.addEventListener("click", e => {
            e.preventDefault();
            closeDeletePopup();
        });
    }

    

    
}
customElements.define("clientes-menu", ClientesMenu);
