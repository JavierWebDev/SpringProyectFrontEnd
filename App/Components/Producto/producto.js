import { deleteData, getData, postData, updateData, getElementData } from '/API/API.js';

export class ProductosMenu extends HTMLElement {
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
                <h1 class="titulo-list">Products</h1>
    
                <a id="btnAddProduct" class="button-new" href="#"><box-icon name='plus' color="#FFF"></box-icon> New Product</a>
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
                        <h1 class="titulo-list">New Product</h1>
                        <div id="btnCancel" class="button-cancel_modal">&#10005;</div>
                    </div>

                    <div class="cont-form">
                        <form class="form-new">
                            <div class="cont-input_two cont-input">
                                <div class="cont-input_twoo">
                                    <label class="label-form" for="inName">Name</label>
                                    <input class="input-form" id="inName" name="inName" type="text" placeholder="Enter product name">
                                </div>
                            </div>

                            <div class="cont-input_wide cont-input">
                                <div class="cont-input_wide">
                                    <label class="label-form" for="inSalePrice">Sale Price</label>
                                    <input class="input-form" id="inSalePrice" name="inSalePrice" type="number" step="0.01" placeholder="Enter sale price">
                                </div>
                                <div class="cont-input_wide">
                                    <label class="label-form" for="inSupplierPrice">Supplier Price</label>
                                    <input class="input-form" id="inSupplierPrice" name="inSupplierPrice" type="number" step="0.01" placeholder="Enter supplier price">
                                </div>
                            </div>

                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="inProductRange">Product Range</label>
                                <select class="input-form input-select" name="inProductRange" id="inProductRange" placeholder="Enter product range"></select>
                            </div>

                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="inDimensions">Dimensions</label>
                                <div id="inDimensions">

                                    <label class="label-form" for="inHeight">Height</label>
                                    <input class="input-form" id="inHeight" name="inHeight" type="number" step="0.01" placeholder="Enter height">


                                    <label class="label-form" for="inWidth">Width</label>
                                    <input class="input-form" id="inWidth" name="inWidth" type="number" step="0.01" placeholder="Enter width">


                                    <label class="label-form" for="inLength">Length</label>
                                    <input class="input-form" id="inLength" name="inLength" type="number" step="0.01" placeholder="Enter length">
                                
                                </div>
                            </div>

                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="inSupplier">Supplier</label>
                                <select class="input-form input-select" name="inSupplier" id="inSupplier" placeholder="Enter product supplier"></select>
                            </div>

                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="inStock">Stock</label>
                                <input class="input-form" id="inStock" name="inStock" type="number" placeholder="Enter stock quantity">
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
        const productos = document.querySelector("producto-menu")
        const mainMenu = document.querySelector("main-menu"); 

        btnVolver.addEventListener("click", e => {
            productos.style.display = "none";
            mainMenu.style.display = "block"

            e.preventDefault();
        })
    }

    controlModal() {
        const popUp = document.getElementById("overlay");
        const btnAbrir = document.getElementById("btnAddProduct");
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
customElements.define("producto-menu", ProductosMenu);