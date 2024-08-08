import { getData } from "../../../API/API.js";

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
                <a href="#" id="btnVolver"><box-icon name='arrow-back' ></box-icon></a>
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

                <div id="containerShowOffices" class="elements-list">

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
		`
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


    showOffices() {
        const endpoint = "oficinas"

        const contShowOffices = document.querySelector("#containerShowOffices");

        getData(endpoint)
        .then(({ data, error }) => { 
            if (error) {
                console.error(`Error en la solicitud GET: ${error.message}`);
                return;
            } else {
                data.forEach(office => {
                    const card = document.createElement("div")
                    card.classList.add("card-element")
                    card.innerHTML = `
                    <p class="card-text">${office.id}</p>
                    <p class="card-text">${office.telefono.nombre}</p>
                    <p class="card-text">${office.ciudad.nombreCiudad}</p>
        
                    <div class="card-buttons_container">
                        <a href="#" class="card-button" data-id="${office.id}" id="btnInfoOffice">
                            <box-icon name='info-circle' color='#508C9B'></box-icon>
                        </a>
                        <a href="#" class="card-button" data-id="${office.id}" id="btnDeleteOffice">
                            <box-icon name='trash' color='#508C9B'></box-icon>
                        </a>
                        <a href="#" class="card-button">
                            <box-icon name='pencil' color='#508C9B'></box-icon>
                        </a>
                    </div>
                `;
                    
                });
            }
        });
    }
}
customElements.define("oficinas-menu",OficinasMenu)

