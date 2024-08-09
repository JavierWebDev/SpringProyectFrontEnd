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
                <a href="#" id="btnVolver-product"><box-icon name='arrow-back' ></box-icon></a>
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
                        <a id="btnInfo_producto" href="#" class="card-button"><box-icon name='info-circle' color='#000' ></box-icon></a>
                        <a id="btnDelete_producto" href="" class="card-button"><box-icon name='trash' color='#e00000' ></box-icon></a>
                        <a id="btnUpdate_producto" href="" class="card-button"><box-icon name='pencil' color='#02a0ff' ></box-icon></a>
                    </div>
                </div>                
            </div>

            <div id="overlay-product" class="overlay">
                <div class="popup active">
                    <div class="cont-top_modal">
                        <h1 class="titulo-list">New Product</h1>
                        <div id="btnCancel-product" class="button-cancel_modal">&#10005;</div>
                    </div>

                    <div class="cont-form">
                        <form class="form-new" id="productForm">
                            <div class="cont-input_two cont-input">
                                <div class="cont-input_twoo">
                                    <label class="label-form" for="name">Name</label>
                                    <input class="input-form" id="name" name="name" type="text" placeholder="Enter product name" required>
                                </div>
                            </div>

                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="salePrice">Sale Price</label>
                                <input class="input-form" id="salePrice" name="salePrice" type="number" step="0.01" placeholder="Enter sale price" required>
                            </div>

                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="supplierPrice">Supplier Price</label>
                                <input class="input-form" id="supplierPrice" name="supplierPrice" type="number" step="0.01" placeholder="Enter supplier price" required>
                            </div>
                        
                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="productRange">Product Range</label>
                                <select class="input-form input-select" name="productRange" id="productRange" placeholder="Enter product range"></select>
                            </div>

                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="dimensions">Dimensions</label>
                                <div id="dimensions">

                                    <label class="label-form" for="height">Height</label>
                                    <input class="input-form" id="height" name="height" type="number" step="0.01" placeholder="Enter height" required>


                                    <label class="label-form" for="width">Width</label>
                                    <input class="input-form" id="width" name="width" type="number" step="0.01" placeholder="Enter width" required>


                                    <label class="label-form" for="length">Length</label>
                                    <input class="input-form" id="length" name="length" type="number" step="0.01" placeholder="Enter length" required>
                                
                                </div>
                            </div>

                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="supplier">Supplier</label>
                                <select class="input-form input-select" name="supplier" id="supplier" placeholder="Enter product supplier"></select>
                            </div>

                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="stock">Stock</label>
                                <input class="input-form" id="stock" name="stock" type="number" placeholder="Enter stock quantity" required>
                            </div>

                            <button class="button-new" type="submit">ADD</button>
                        </form>
                    </div>
                </div>
            </div>
    
        </section>
        `;
    }

    goBack() {
        const btnVolver = document.querySelector("#btnVolver-product");
        const productos = document.querySelector("producto-menu")
        const mainMenu = document.querySelector("main-menu"); 

        btnVolver.addEventListener("click", e => {
            productos.style.display = "none";
            mainMenu.style.display = "block"

            e.preventDefault();
        })
    }

    controlModal() {
        const popUp = document.getElementById("overlay-product");
        const btnAbrir = document.getElementById("btnAddProduct");
        const btnCerrar = document.getElementById("btnCancel-product");

        btnAbrir.addEventListener("click", e => {
            popUp.classList.add("active")

            e.preventDefault();
        })

        btnCerrar.addEventListener("click", e => {
            popUp.classList.remove("active")

            e.preventDefault();
        })

    }

    createProduct() {

        const submitBtn = document.getElementById('productForm')
        submitBtn.addEventListener('submit', async function(e) {
            e.preventDefault();

            const endpoint = "productos"
            const newProduct = {
                name: document.getElementById('name').value,
                salePrice: parseFloat(document.getElementById('salePrice').value),
                supplierPrice: parseFloat(document.getElementById('supplierPrice').value),
                productRange: document.getElementById('productRange').value,
                dimensions: {
                    height: parseFloat(document.getElementById('height').value),
                    width: parseFloat(document.getElementById('width').value),
                    length: parseFloat(document.getElementById('length').value)
                },
                supplier: document.getElementById('supplier').value,
                stock: parseInt(document.getElementById('stock').value, 10)
            }
            postData(newProduct, endpoint)
                    .then(response => {
                        if (response.ok){
                            return response.json();
                        }
                        throw new Error('Error al crear el proveedor')
                    })
                    .then(data => {
                        console.log('Producto creado', data);
                    })
                    .catch(error => {
                        console.error('Error', error);
                    })
        })
    }
}
customElements.define("producto-menu", ProductosMenu);