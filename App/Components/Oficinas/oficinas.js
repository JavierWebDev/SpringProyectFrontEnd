export class OficinasMenu extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.goBack();
        this.controlModal();
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
    
                <div class="elements-list">
                <div class="card-element">
                    <p class="card-text">AAA</p>
                    <p class="card-text">AAA</p>
                    <p class="card-text">AAA</p>
    
                    <div class="card-buttons_container">
                        <a href="#" class="card-button"><box-icon name='info-circle' color='#508C9B' ></box-icon></a>
                        <a href="" class="card-button"><box-icon name='trash' color='#508C9B' ></box-icon></a>
                        <a href="" class="card-button"><box-icon name='pencil' color='#508C9B' ></box-icon></a>
                    </div>
                </div>                
            </div>

            <div id="overlay" class="overlay">
                <div class="popup active">
                    <div class="cont-top_modal">
                        <h1 class="titulo-list">New Office</h1>
                        <div id="btnCancel" class="button-cancel_modal">&#10005;</div>
                    </div>

                    <div class="cont-form">
                        <form class="form-new">
                            <div class="cont-input_two cont-input">
                                <div class="cont-input_twoo">
                                    <label class="label-form" for="inCountry">Country</label>
                                    <select class="input-form input-select" name="inCountry" id="inCountry"></select>
                                </div>
                                <div class="cont-input_twoo">
                                    <label class="label-form" for="inCity">City</label>
                                    <select class="input-form input-select" name="inCity" id="inCity"></select>
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
                                <select class="input-form input-select" name="inHood" id="inHood"></select>
                            </div>

                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="inPostalCode">Postal Code</label>
                                <input class="input-form" id="inPostalCode" name="inPostalCode" type="text">
                            </div>

                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="inPhone">Phone</label>
                                <input class="input-form" id="inPhone" name="inPhone" type="text">
                            </div>

                            <button class="button-new">ADD</button>
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

    controlModal() {
        const popUp = document.getElementById("overlay");
        const btnAbrir = document.getElementById("btnAddOffice");
        const btnCerrar = document.getElementById("btnCancel");

        btnAbrir.addEventListener("click", e => {
            popUp.classList.add("active")

            e.preventDefault();
        })

        btnCerrar.addEventListener("click", e => {
            popUp.classList.remove("active")

            e.preventDefault();
        })

    }
}
customElements.define("oficinas-menu", OficinasMenu);