import { deleteData, getDataTry } from '/API/API.js';

export class OficinasMenu extends HTMLElement {
	constructor() {
		super();
		this.render();
		this.goBack();
		this.showOffices();
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

    arrayOffices() {
        endpoint = "oficinas"
        getData(endpoint)
         .then((response) => {
            if (!response.ok) {
                console.log(`${response}`)
            }
         })
    }

    showOffices() {
        const endpoint = "oficinas";
        const endpointCountries = "pais";
        const endpointCities = "ciudad";
        const endpointHood = "barrio";
        const selectCountry = document.getElementById("inCountryOffice");
        const selectCity = document.getElementById("inCityOffice");
        const selectHood = document.getElementById("inHoodOffice");
        const btnAddOffice = document.getElementById("btnAddOffice");
        const overlay = document.getElementById("overlay");
        const popUpAdd = document.getElementById("popUpAdd");
        const btnCerrar = document.getElementById("btnCancelAdd");

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
    }

    showInfoModal(oficina) {
        const overlay2 = document.getElementById("overlay2");
        const popUpInfo = document.getElementById("popupInfo");
        const infoModal = document.getElementById("infoModalOffice");

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

        const closeDeletePopup = () => {
            overlay3.classList.remove("active");
            popUpDelete.classList.remove("active");
        };

        overlay3.classList.add("active");
        popUpDelete.classList.add("active");

        const handleConfirmDelete = e => {
            e.preventDefault();
            deleteData(endpoint, office.id)
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

        btnConfirmDelOffice.addEventListener("click", handleConfirmDelete, { once: true });

        btnCancelDelOffice.addEventListener("click", e => {
            e.preventDefault();
            closeDeletePopup();
        });
    }

    listOffices() {
        const endpoint = "oficinas";
        const contShowOffices = document.querySelector("#containerShowOffices");

        getDataTry(endpoint)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error en la solicitud GET: ${response.status} - ${response.statusText}`);
                }
            })
            .then(responseData => {
                responseData.forEach(oficina => {
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
                        </div>`;

                    contShowOffices.appendChild(card);
                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }
}

customElements.define("oficinas-menu", OficinasMenu);
