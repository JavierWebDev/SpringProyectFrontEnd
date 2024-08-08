import { deleteData, getData, postData, updateData, getElementData, getDataTry } from '/API/API.js';


export class OficinasMenu extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.goBack();
        this.controlModalAdd();
        this.listOffices();
    }

    render() {
        this.innerHTML = /* html */ `
        <section class="container-wc">
            <div class="cont-button">
                <a href="#" id="btnVolver"><box-icon name='arrow-back' ></box-icon></a>
            </div>

            <div class="container-titulos_list">
                <h1 class="titulo-list">Offices</h1>

                <a id="btnAddOffice" class="button-new" href="#"><box-icon name='plus' color="#FFF"></box-icon> New Office</a>
            </div>

            <div class="cont-list_big">
                <div class="cont-list">
                    <p class="titulo-list-id">ID</p>
                    <p class="titulo-list-id">Telefono</p>
                    <p class="titulo-list-id">Ciudad</p>
                </div>

                <div id="containerShowOffices" class="elements-list">

                </div>

                <div class="overlay" id="overlay3">
                    <div id="popupDelete" class="popup-delete">
                        <div id="delModalOffice" class="cont">
                            <p>Estas seguro que deseas eliminar la oficina?</p>

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

                        <div id="infoModalOffice" class="cont">
                            
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
                                        <label class="label-form_addr" for="inStreet">Street</label>
                                        <input class="input-form input-addr" id="inStreet" name="inStreet" type="text">
    
                                        <label for="inNumberStreet">#</label>
                                        <input class="input-form input-addr" id="inNumberStreet" name="inNumberStreet" type="text">
                                    </div>
                                </div>
    
                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inNeighHood">Neighborhood</label>
                                    <select class="input-form input-select" name="inHood" id="inHoodOffice"></select>
                                </div>
    
                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inPostalCode">Postal Code</label>
                                    <input class="input-form" id="inPostalCode" name="inPostalCode" type="text">
                                </div>
    
                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inPhone">Phone</label>
                                    <input class="input-form" id="inPhone" name="inPhone" type="text">
                                </div>
    
                                <button id="createNewOffice" class="button-new">ADD</button>
                            </form>
                        </div>
                    </div>
                </div>
    
        </section>
        `;
    }

    goBack() {
        const btnVolver = document.querySelector("#btnVolver");
        const oficinas = document.querySelector("oficinas-menu")
        const mainMenu = document.querySelector("main-menu");

        btnVolver.addEventListener("click", e => {
            oficinas.style.display = "none";
            mainMenu.style.display = "block"

            e.preventDefault();
        })
    }

    controlModalAdd() {
        const overlay = document.getElementById("overlay");
        const popUpAdd = document.getElementById("popUpAdd");
        const btnAbrir = document.getElementById("btnAddOffice");
        const btnCerrar = document.getElementById("btnCancelAdd");

        const selectCountry = document.querySelector("#inCountryOffice");
        const selectCity = document.querySelector("#inCityOffice");
        const selectHood = document.querySelector("#inHoodOffice");

        const btnAddOffice = document.querySelector("#createNewOffice")

        const formOffice = document.getElementById("addOfficeForm");

        const inputs = document.querySelectorAll(".input-form");

        const endpoint = "oficinas"

        const endpointCountries = "pais";
        const endpointCities = "ciudad";
        const endpointHood = "barrio";

        getDataTry(endpointCountries)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error en la solicitud GET: ${response.status} - ${response.statusText}`);
                }
            })
            .then((responseData) => {
                responseData.forEach(pais => {
                    const opc = document.createElement("option");
                    opc.value = getElementData(endpointCountries, pais.id);
                    console.log(opc.value)
                    opc.innerHTML = `${pais.name}`;
    
                    selectCountry.appendChild(opc);
                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

        getDataTry(endpointCities)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error en la solicitud GET: ${response.status} - ${response.statusText}`);
                }
            })
            .then((responseData) => {
                responseData.forEach(ciudad => {
                    const opc = document.createElement("option");
                    opc.value = ciudad.id;
                    opc.innerHTML = `${ciudad.nombreCiudad}`;
    
                    selectCity.appendChild(opc);
                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

            getDataTry(endpointHood)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error en la solicitud GET: ${response.status} - ${response.statusText}`);
                }
            })
            .then((responseData) => {
                responseData.forEach(hood => {
                    const opc = document.createElement("option");
                    opc.value = hood.id;
                    opc.innerHTML = `${hood.nombreBarrio}`;
    
                    selectHood.appendChild(opc);
                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

        btnAddOffice.addEventListener("click", e => {
            e.preventDefault();

            let datos = Object.fromEntries(new FormData(addOfficeForm).entries());
            datos.id = 0;

            postData(datos, endpoint)
        })

        btnAbrir.addEventListener("click", e => {
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

    showInfoModal(oficina) {
        const overlay2 = document.getElementById("overlay2");
        const popUpInfo = document.getElementById("popupInfo");
        const infoModal = document.getElementById("infoModalOffice");
    
        // Clear existing content
        infoModal.innerHTML = `
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
                <p name="pOfficeCountry" class="card-text">${oficina.pais.nombre}</p>
            </div>
            <div class="cont-info_p">
                <label for="pOfficePCode" class="label-form">Codigo Postal</label>
                <p name="pOfficePCode" class="card-text">${oficina.codigoPostal.codigo}</p>
            </div>
            <div class="cont-info_p">
                <label for="pOfficeAddr" class="label-form">Direccion</label>
                <p class="card-text">Calle ${oficina.direccion.calle} #${oficina.direccion.numero}</p>
            </div>
        `;
    
        overlay2.classList.add("active");
        popUpInfo.classList.add("active");
    
        // Add event listener to close the info modal
        document.getElementById("btnCancelOfficeInfo").addEventListener("click", (e) => {
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
    
        const closeDeletePopup = () => {
            overlay3.classList.remove("active");
            popUpDelete.classList.remove("active");
        };
    
        // Mostrar el modal de confirmación de eliminación
        overlay3.classList.add("active");
        popUpDelete.classList.add("active");
    
        // Evitar la duplicación de event listeners
        const handleConfirmDelete = (e) => {
            e.preventDefault();
            deleteData(endpoint, office.id)
                .then(response => {
                    if (response.ok) {
                        // Mostrar mensaje de éxito
                        const msg = document.createElement("div");
                        msg.innerHTML = `
                            <box-icon name='check-circle' type='solid' color='#6bf54a'></box-icon>
                            <div id="btnCloseDel" class="button-cancel_modal">&#10005;</div>
                        `;
    
                        // Añadir el mensaje al modal
                        popUpDelete.innerHTML = msg.innerHTML;
    
                        const btnCloseConfirm = document.querySelector("#btnCloseDel");
                        btnCloseConfirm.addEventListener("click", e => {
                            e.preventDefault();
                            closeDeletePopup();
                        });
                    } else {
                        throw new Error(`Error en la solicitud DELETE: ${response.status} - ${response.statusText}`);
                    }
                })
                .catch(error => {
                    console.error("Error en la eliminación de datos:", error);
                    // Manejo de errores y mensaje al usuario
                    popUpDelete.innerHTML = `
                        <div>Error al eliminar la oficina. Por favor, inténtelo de nuevo.</div>
                        <div id="btnCloseDelError" class="button-cancel_modal">&#10005;</div>
                    `;
    
                    const btnCloseError = document.querySelector("#btnCloseDelError");
                    btnCloseError.addEventListener("click", e => {
                        e.preventDefault();
                        closeDeletePopup();
                    });
                });
        };
    
        // Añadir el event listener para la confirmación de eliminación
        btnConfirmDelOffice.addEventListener("click", handleConfirmDelete, { once: true });
    
        // Añadir el event listener para cancelar la eliminación
        btnCancelDelOffice.addEventListener("click", (e) => {
            e.preventDefault();
            closeDeletePopup();
        });
    }
    

    listOffices() {
        const endpoint = "oficinas";
    
        const contShowOffices = document.querySelector("#containerShowOffices");
        const contInfoOffices = document.querySelector("#infoModalOffice");
    
        getDataTry(endpoint)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error en la solicitud GET: ${response.status} - ${response.statusText}`);
                }
            })
            .then((responseData) => {
                responseData.forEach(oficina => {
                    // Create a new card element for each office
                    const card = document.createElement("div");
                    card.classList.add("card-element");
                    card.innerHTML = `
                        <p class="card-text">${oficina.id}</p>
                        <p class="card-text">${oficina.telefono.nombre}</p>
                        <p class="card-text">${oficina.ciudad.nombreCiudad}</p>
            
                        <div class="card-buttons_container">
                            <a href="#" class="card-button" data-id="${oficina.id}" id="btnInfoOffice">
                                <box-icon name='info-circle' color='#508C9B'></box-icon>
                            </a>
                            <a href="#" class="card-button" data-id="${oficina.id}" id="btnDeleteOffice">
                                <box-icon name='trash' color='#508C9B'></box-icon>
                            </a>
                            <a href="#" class="card-button">
                                <box-icon name='pencil' color='#508C9B'></box-icon>
                            </a>
                        </div>
                    `;
    
                    contShowOffices.appendChild(card);
    
                    // Add event listener to show info modal
                    card.querySelector("#btnInfoOffice").addEventListener("click", (e) => {
                        e.preventDefault();
                        this.showInfoModal(oficina);
                    });

                    card.querySelector("#btnDeleteOffice").addEventListener("click", (e) => {
                        e.preventDefault();
                        this.deleteOffice(oficina);
                    });


                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

}
customElements.define("oficinas-menu", OficinasMenu);