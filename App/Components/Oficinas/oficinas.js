import { deleteData, getDataTry, getData, postData } from '/API/API.js';

export class OficinasMenu extends HTMLElement {
	constructor() {
		super();
		this.render();
		this.goBack();
		this.showOffices();
        this.addNewOffice();
	}

	render() {
		this.innerHTML = /* html */ `
		<section class="container-wc">
            <div class="cont-button">
                <a href="#" id="btnVolver"><box-icon name='arrow-back'></box-icon></a>
            </div>

            <div class="container-titulos_list">
                <h1 class="titulo-list">Offices</h1>
                <a id="btnAddOffice" class="button-new" href="#"><box-icon name='plus' color="#FFF"></box-icon> New Office</a>
            </div>

            <div class="cont-list_big">
                <div class="cont-list">
                    <p class="titulo-list-id">ID</p>
                    <p class="titulo-list-id">Telephone</p>
                    <p class="titulo-list-id">City</p>
                </div>

                <div id="containerShowOffices" class="elements-list"></div>

                <div class="overlay" id="overlay4">
                    <div id="popupAllrigth" class="popup-allright">
                        <box-icon name='check-circle' color='#69ff94' ></box-icon>
                        <p> Eliminado!</p>
                        <div id="btnCloseModalsAllrigth" class="button-cancel_modal">&#10005;</div>
                    </div>
                </div>
                
                <div class="overlay" id="overlay3">
                    <div id="popupDelete" class="popup-delete">
                        <div id="delModalOffice" class="cont">
                            <p>Would you delete the office?</p>
                            <div class="cont-buttons_delete">
                                <a id="btnConfirmDelOffice" class="button-confirm_delete">Confirm</a>
                                <a id="btnCancelDelOffice" class="button-cancel_delete">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overlay" id="overlay2">
                    <div id="popupInfo" class="popup-info">
                        <div class="cont-top_modal">
                            <div id="btnCancelOfficeInfo" class="button-cancel_modal">&#10005;</div>
                        </div>
                        <div id="infoModalOffice" class="cont"></div>
                    </div>
                </div>

                <div id="overlay" class="overlay5">
                    <div id="popUpEditOffice" class="popup-edit">
                        <div class="cont-top_modal">
                            <h1 class="titulo-list">Edit Office</h1>
                            <div id="btnCancelAdd" class="button-cancel_modal">&#10005;</div>
                        </div>
                        <div class="cont-form">
                            <form id="editOfficeForm" class="form-new">
                                <div class="cont-input_two cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inPhoneEditOffice">Phone</label>
                                        <input type="tel" class="input-form input-txt" name="inPhoneEditOffice" id="inPhoneEditOffice">
                                    </div>
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inTypePhoneEditOffice">Phone Type</label>
                                        <select class="input-form input-select" name="inTypePhoneEditOffice" id="inTypePhoneEditOffice"></select>
                                    </div>
                                </div>

                                <div class="cont-input_two cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inCountry">Country</label>
                                        <select class="input-form input-select" name="inCountry" id="inCountryOffice"></select>
                                    </div>
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inCity">City</label>
                                        <select class="input-form input-select" name="inCity" id="inCityOffice"></select>
                                    </div>
                                </div>
                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inAddres">Address</label>
                                    <div id="inAddres">
                                        <label class="label-form_addr" for="inStreetOffice">Street</label>
                                        <input class="input-form input-addr input-txt" id="inStreetOffice" name="inStreetOffice" type="text">
                                        <label for="inNumberStreet">#</label>
                                        <input class="input-form input-addr input-txt" id="inNumberStreet" name="inNumberStreet" type="text">
                                    </div>
                                </div>
                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inNeighHood">Neighborhood</label>
                                    <select class="input-form input-select" name="inHood" id="inHoodOffice"></select>
                                </div>
                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inPostalCodeOffice">Postal Code</label>
                                    <input class="input-form input-txt" id="inPostalCodeOffice" name="inPostalCodeOffice" type="text">
                                </div>
                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inRegionOffice">Region</label>
                                    <select class="input-form input-select" name="inRegionOffice" id="inRegionOffice"></select>
                                </div>
                                <div class="button-add">
                                    <button id="createNewOffice" class="button-new">ADD</button>
                                </div>   
                            </form>
                        </div>
                    </div>
                </div>

                <div id="overlay" class="overlay">
                    <div id="popUpAdd" class="popup-add">
                        <div class="cont-top_modal">
                            <h1 class="titulo-list">New Office</h1>
                            <div id="btnCancelAdd" class="button-cancel_modal">&#10005;</div>
                        </div>
                        <div class="cont-form">
                            <form id="addOfficeForm" class="form-new">
                                <div class="cont-input_two cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inPhoneOffice">Phone</label>
                                        <input type="tel" class="input-form input-txt" name="inPhoneOffice" id="inPhoneOffice">
                                    </div>
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inTypePhone">Phone Type</label>
                                        <select class="input-form input-select" name="inTypePhoneOffice" id="inTypePhoneOffice"></select>
                                    </div>
                                </div>

                                <div class="cont-input_two cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inCountry">Country</label>
                                        <select class="input-form input-select" name="inCountry" id="inCountryOffice"></select>
                                    </div>
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inCity">City</label>
                                        <select class="input-form input-select" name="inCity" id="inCityOffice"></select>
                                    </div>
                                </div>
                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inAddres">Address</label>
                                    <div id="inAddres">
                                        <label class="label-form_addr" for="inStreetOffice">Street</label>
                                        <input class="input-form input-addr input-txt" id="inStreetOffice" name="inStreetOffice" type="text">
                                        <label for="inNumberStreet">#</label>
                                        <input class="input-form input-addr input-txt" id="inNumberStreet" name="inNumberStreet" type="text">
                                    </div>
                                </div>
                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inNeighHood">Neighborhood</label>
                                    <select class="input-form input-select" name="inHood" id="inHoodOffice"></select>
                                </div>
                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inPostalCodeOffice">Postal Code</label>
                                    <input class="input-form input-txt" id="inPostalCodeOffice" name="inPostalCodeOffice" type="text">
                                </div>
                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inRegionOffice">Region</label>
                                    <select class="input-form input-select" name="inRegionOffice" id="inRegionOffice"></select>
                                </div>
                                <div class="button-add">
                                    <button id="createNewOffice" class="button-new">ADD</button>
                                </div>   
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
               
	}
    

	goBack() {
        const btnVolver = document.querySelector("#btnVolver");
        const oficinas = document.querySelector("oficinas-menu");
        const mainMenu = document.querySelector("main-menu");

        btnVolver.addEventListener("click", e => {
            oficinas.style.display = "none";
            mainMenu.style.display = "block";
            e.preventDefault();
        });
    }

    async arrayOffices() {
        const endpoint = "oficinas";
        const { data, error } = await getData(endpoint);
        
        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }

    async arrayPhoneTypes() {
        const endpoint = "tipotelefono";
        const { data, error } = await getData(endpoint);
        
        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }
        return data;
    }

    async arrayCountries() {
        const endpoint = "pais";
        const { data, error } = await getData(endpoint);
        
        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }
        return data;
    }
    
    async arrayCities() {
        const endpoint = "ciudad";
        const { data, error } = await getData(endpoint);
        
        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }

    async arrayHood() {
        const endpoint = "barrio";
        const { data, error } = await getData(endpoint);
        
        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }

    async arrayRegion() {
        const endpoint = "region";
        const { data, error } = await getData(endpoint);
        
        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }

    async arrayTelefonos() {
        const endpoint = "telefono";
        const { data, error } = await getData(endpoint);
        
        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }

    async arrayDireccion() {
        const endpoint = "direccion";
        const { data, error } = await getData(endpoint);
        
        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }

    async arrayPostalCode() {
        const endpoint = "codigopostal";
        const { data, error } = await getData(endpoint);
        
        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        return data;
    }
    
    addNewOffice() {
        const officeForm = document.getElementById("addOfficeForm");
    
        const selectCountryOficinas = document.getElementById("inCountryOffice");
        const selectCityOficinas = document.getElementById("inCityOffice");
        const selectHoodOficinas = document.getElementById("inHoodOffice");
        const selectPhoneTypeOficinas = document.getElementById("inTypePhoneOffice");
        const selectRegionOficinas = document.getElementById("inRegionOffice");
    
        const btnSendOffice = document.getElementById("createNewOffice");
    
        // Llenar los selects con los datos obtenidos de las respectivas funciones
        this.fillSelects();
    
        btnSendOffice.addEventListener("click", async (e) => {
            e.preventDefault();
    
            try {
                let inputsFormText = document.querySelectorAll(".input-txt")

                // Obtener los valores de los inputs
                let nombreTelefono = document.getElementById("inPhoneOffice").value;
                let calleDir = document.getElementById("inStreetOffice").value;
                let numeroDir = Number.parseInt(document.getElementById("inNumberStreet").value);
                let postalOffice = document.getElementById("inPostalCodeOffice").value;
    
                // Obtener las opciones seleccionadas
                const selectedOptionPhoneType = selectPhoneTypeOficinas.options[selectPhoneTypeOficinas.selectedIndex];
                const selectedPhoneType = JSON.parse(selectedOptionPhoneType.value);
    
                const selectedPais = JSON.parse(selectCountryOficinas.value);
                const selectedCity = JSON.parse(selectCityOficinas.value);
    
                const selectedOptionHood = selectHoodOficinas.options[selectHoodOficinas.selectedIndex];
                const selectedHood = JSON.parse(selectedOptionHood.value);
    
                const selectedOptionRegion = selectRegionOficinas.options[selectRegionOficinas.selectedIndex];
                const selectedRegion = JSON.parse(selectedOptionRegion.value);
    
                // Calcular el maxIDTel
                let maxIDTel = await this.calculateMaxId("telefono");
                let maxIDDir = await this.calculateMaxId("direccion");
                let maxIDPos = await this.calculateMaxId("codigopostal");
    
                // Crear el objeto teléfono
                let telefono = {
                    id: 0,
                    nombre: Number.parseInt(nombreTelefono),
                    tipoTelefono: selectedPhoneType
                };
    
                await postData(telefono, "telefono");
    
                // Crear el objeto dirección
                let direccion = {
                    id: 0,
                    calle: calleDir,
                    numero: numeroDir,
                    dirBarrio: selectedHood
                };
    
                await postData(direccion, "direccion");
    
                // Crear el objeto código postal
                let postalCode = {
                    id: 0,
                    codigo: postalOffice,
                    region: selectedRegion
                };
    
                await postData(postalCode, "codigopostal");
    
                // Crear el objeto nuevaOficina
                let nuevaOficina = {
                    id: 0,
                    telefono: {
                        id: maxIDTel,
                        nombre: telefono.nombre,
                        tipoTelefono: selectedPhoneType
                    },
                    ciudad: selectedCity,
                    pais: selectedPais,
                    direccion: {
                        id: maxIDDir,
                        calle: direccion.calle,
                        numero: direccion.numero,
                        dirBarrio: selectedHood
                    },
                    codigoPostal: {
                        id: maxIDPos,
                        codigo: postalCode.codigo,
                        region: selectedRegion
                    }
                };
    
                console.log("Oficina creada:", nuevaOficina);
    
                await postData(nuevaOficina, "oficinas");
    
                this.showOffices();

                inputsFormText.forEach((inpt) => {
                    inpt.value = ""
                })
                
    
            } catch (error) {
                console.error("Error al crear la oficina:", error);
            }
        });
    }

        
    async calculateMaxId(endpoint) {
        try {
            const { data } = await getData(endpoint);  // Destructura solo 'data' del resultado
            if (!Array.isArray(data)) {
                throw new Error('Los datos no son un array');
            }
    
            let maxID = 0;
            data.forEach((item) => {
                if (item.id >= maxID) {
                    maxID = item.id + 1;
                }
            });
            return maxID;
        } catch (error) {
            console.error(`Error al calcular maxID para ${endpoint}:`, error);
            throw error;
        }
    }
    
    

    fillSelects() {
        const selectCountryOficinas = document.getElementById("inCountryOffice");
        const selectCityOficinas = document.getElementById("inCityOffice");
        const selectHoodOficinas = document.getElementById("inHoodOffice");
        const selectPhoneTypeOficinas = document.getElementById("inTypePhoneOffice");
        const selectRegionOficinas = document.getElementById("inRegionOffice");
    
        // Llenar los selects con los datos obtenidos de las respectivas funciones
        this.arrayPhoneTypes().then((tipostel) => {
            if (tipostel) {
                selectPhoneTypeOficinas.innerHTML = ''; 
                tipostel.forEach(tipotel => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(tipotel);
                    opc.textContent = tipotel.nombre;
                    selectPhoneTypeOficinas.appendChild(opc);
                });
            } else {
                console.log("No se pudieron obtener los tipos de teléfono.");
            }
        }).catch((error) => {
            console.error("Error al obtener los tipos de teléfono:", error);
        });
    
        this.arrayCountries().then((paises) => {
            if (paises) {
                selectCountryOficinas.innerHTML = ''; 
                paises.forEach(pais => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(pais);
                    opc.textContent = pais.name;
                    selectCountryOficinas.appendChild(opc);
                });
            } else {
                console.log("No se pudieron obtener los países.");
            }
        }).catch((error) => {
            console.error("Error al obtener los países:", error);
        });
    
        this.arrayCities().then((ciudades) => {
            if (ciudades) {
                selectCityOficinas.innerHTML = ''; 
                ciudades.forEach(city => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(city);
                    opc.textContent = city.nombreCiudad;
                    selectCityOficinas.appendChild(opc);
                });
            } else {
                console.log("No se pudieron obtener las ciudades.");
            }
        }).catch((error) => {
            console.error("Error al obtener las ciudades:", error);
        });
    
        this.arrayHood().then((barrios) => {
            if (barrios) {
                selectHoodOficinas.innerHTML = ''; 
                barrios.forEach(barrio => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(barrio);
                    opc.textContent = barrio.nombreBarrio;
                    selectHoodOficinas.appendChild(opc);
                });
            } else {
                console.log("No se pudieron obtener los barrios.");
            }
        }).catch((error) => {
            console.error("Error al obtener los barrios:", error);
        });
    
        this.arrayRegion().then((regions) => {
            if (regions) {
                selectRegionOficinas.innerHTML = ''; 
                regions.forEach(region => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(region);
                    opc.textContent = region.nombre;
                    selectRegionOficinas.appendChild(opc);
                });
            } else {
                console.log("No se pudieron obtener las regiones.");
            }
        }).catch((error) => {
            console.error("Error al obtener las regiones:", error);
        });
    }
    
    closeAddOfficeModal() {
        const overlay = document.getElementById("overlay");
        const popUpAdd = document.getElementById("popUpAdd");
        overlay.classList.remove("active");
        popUpAdd.classList.remove("active");
    }

    editOffice(oficina) {
        const overlay = document.getElementById("overlay5");
    }

    showOffices() {
        const btnAddOffice = document.getElementById("btnAddOffice");
        const overlay = document.getElementById("overlay");
        const popUpAdd = document.getElementById("popUpAdd");
        const btnCerrar = document.getElementById("btnCancelAdd");
        const contShowOffices = document.querySelector("#containerShowOffices");
    
        btnAddOffice.addEventListener("click", e => {
            e.preventDefault();
            overlay.classList.add("active");
            popUpAdd.classList.add("active");
        });
    
        btnCerrar.addEventListener("click", e => {
            e.preventDefault();
            overlay.classList.remove("active");
            popUpAdd.classList.remove("active");
        });
    
        this.arrayOffices()
        .then((oficinas) => {
            if (oficinas.length === 0) {
                contShowOffices.innerHTML = '<p class="txt-showbox">No hay oficinas registradas</p>'
            } else {
                if (oficinas) {
                    contShowOffices.innerHTML = ''; // Limpiar la lista antes de añadir nuevas oficinas
                    oficinas.forEach(oficina => {
                        const card = document.createElement("div");
                        card.classList.add("card-element");
                        card.innerHTML = `
                            <p class="card-text">${oficina.id}</p>
                            <p class="card-text">${oficina.telefono.nombre}</p>
                            <p class="card-text">${oficina.ciudad.nombreCiudad}</p>
                            <div class="card-buttons_container">
                                <a href="#" class="card-button btnInfoOffice" data-id="${oficina.id}">
                                    <box-icon name='info-circle' color='#508C9B'></box-icon>
                                </a>
                                <a href="#" class="card-button btnDeleteOffice" data-id="${oficina.id}">
                                    <box-icon name='trash' color='#508C9B'></box-icon>
                                </a>
                                <a href="#" class="card-button btnEditOffice"  data-id="${oficina.id}>
                                    <box-icon name='pencil' color='#508C9B'></box-icon>
                                </a>
                            </div>`;
        
                        contShowOffices.appendChild(card);
                    });
        
                    // Añadir los event listeners después de haber añadido los botones al DOM
                    document.querySelectorAll(".btnInfoOffice").forEach(button => {
                        button.addEventListener("click", e => {
                            e.preventDefault();
                            const officeId = button.getAttribute("data-id");
                            const oficina = oficinas.find(o => o.id.toString() === officeId);
        
                            if (oficina) {
                                this.showInfoModal(oficina);
    
                            } else {
                                console.error(`No se encontró la oficina con id: ${officeId}`);
                            }
                        });
                    });
        
                    document.querySelectorAll(".btnDeleteOffice").forEach(button => {
                        button.addEventListener("click", e => {
                            e.preventDefault();
                            const officeId = button.getAttribute("data-id");
                            const oficina = oficinas.find(o => o.id.toString() === officeId);
        
                            if (oficina) {
                                this.deleteOffice(oficina);
    
                            } else {
                                console.error(`No se encontró la oficina con id: ${officeId}`);
                            }
                        });
                    });

                    document.querySelectorAll(".btnEditOffice").forEach(button => {
                        button.addEventListener("click", e => {
                            e.preventDefault();
                            const officeId = button.getAttribute("data-id");
                            const oficina = oficinas.find(o => o.id.toString() === officeId);
        
                            if (oficina) {
                                this.editOffice(oficina);
    
                            } else {
                                console.error(`No se encontró la oficina con id: ${officeId}`);
                            }
                        });
                    });
                } else {
                    console.log("No se pudieron obtener las oficinas.");
                }
            }
        })
        .catch((error) => {
            console.error("Error al obtener las oficinas:", error);
        });
    }
    
    
    showInfoModal(oficina) {
        const overlay2 = document.getElementById("overlay2");
        const popUpInfo = document.getElementById("popupInfo");
        const infoModal = document.getElementById("infoModalOffice");

        infoModal.innerHTML =` 
            <div class="cont-info_p">
                <label for="pOfficeTel" class="label-form">Telefono</label>
                <p name="pOfficeTel" class="card-text">${oficina.telefono.nombre}</p>
            </div>
            <div class="cont-info_p">
                <label for="pOfficeCity" class="label-form">Ciudad</label>
                <p name="pOfficeCity" class="card-text">${oficina.ciudad.nombreCiudad}</p>
            </div>
            <div class="cont-info_p">
                <label for="pOfficeCountry" class="label-form">Pais</label>
                <p name="pOfficeCountry" class="card-text">${oficina.pais.name}</p>
            </div>
            <div class="cont-info_p">
                <label for="pOfficePCode" class="label-form">Codigo Postal</label>
                <p name="pOfficePCode" class="card-text">${oficina.codigoPostal.codigo}</p>
            </div>
            <div class="cont-info_p">
                <label for="pOfficeAddr" class="label-form">Direccion</label>
                <p class="card-text">Calle ${oficina.direccion.calle} #${oficina.direccion.numero}</p>
            </div>`;

        overlay2.classList.add("active");
        popUpInfo.classList.add("active");

        document.getElementById("btnCancelOfficeInfo").addEventListener("click", e => {
            e.preventDefault();
            overlay2.classList.remove("active");
            popUpInfo.classList.remove("active");
        });
    }
    
    deleteOffice(office) {
        const endpoint = "oficinas";
        const overlay3 = document.querySelector("#overlay3");
        const popUpDelete = document.getElementById("popupDelete");
        const btnConfirmDelOffice = document.querySelector("#btnConfirmDelOffice");
        const btnCancelDelOffice = document.querySelector("#btnCancelDelOffice");
        const contShowOffices = document.querySelector("#containerShowOffices");
        const overlay4 = document.querySelector("#overlay4");
        const popUpAllrigth = document.getElementById("popupAllrigth")
        const btnCloseModals = document.querySelector("#btnCloseModalsAllrigth")
    
        const closeDeletePopup = () => {
            overlay3.classList.remove("active");
            popUpDelete.classList.remove("active");
        };

        const closeConfirmPopup = () => {
            overlay4.classList.remove("active");
            popUpAllrigth.classList.remove("active");
        };
    
        overlay3.classList.add("active");
        popUpDelete.classList.add("active");
    
        const handleConfirmDelete = e => {
            e.preventDefault();
            deleteData(endpoint, office.id)
                .then(response => {
                    if (response.ok) {
                        closeDeletePopup();

                        overlay4.classList.add("active")
                        popUpAllrigth.classList.add("active")

                        // Espera un pequeño retraso antes de actualizar la lista
                        setTimeout(() => {
                            contShowOffices.innerHTML = "";  // Limpiar lista actual
                            this.showOffices();  // Vuelve a cargar y renderizar la lista de oficinas
                        }, 200);  // Agrega un retraso corto
    
                        // Escuchar el evento de cierre del popup
                        btnCloseModals.addEventListener("click", e => {
                            e.preventDefault();
                            overlay4.classList.remove("active")
                            popUpAllrigth.classList.remove("active")
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
    
        // Se asegura de que solo se escuche una vez el evento de confirmación
        btnConfirmDelOffice.addEventListener("click", handleConfirmDelete, { once: true });
    
        btnCancelDelOffice.addEventListener("click", e => {
            e.preventDefault();
            closeConfirmPopup();
        });
    }
}    

customElements.define("oficinas-menu", OficinasMenu);
