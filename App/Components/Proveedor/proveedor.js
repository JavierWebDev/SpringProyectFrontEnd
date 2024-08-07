import { deleteData, getData, postData, updateData, getElementData } from '/API/API.js';

export class ProveedorMenu extends HTMLElement {
    constructor(){
        super();
        this.render();
        this.controllerAction();
    }

    render() {
        this.innerHTML = /* html */  `
        <section class="container-wc">
            <div class="cont-button">
                <a href="#"><box-icon name='arrow-back' ></box-icon></a>
            </div>

            <div class="container-titulos_list">
                <h1 class="titulo-list">Proveedores</h1>

                <a id="btnCreate_Proveedores" class="button-new" href="#"><box-icon name='plus' color="#FFF"></box-icon> New supplier</a>
            </div>

            <div class="cont-list_big">
                <div class="cont-list">
                    <p class="titulo-list">ID</p>
                    <p class="titulo-list">Nombre</p>
                </div>

                <div class="elements-list">
                <div class="card-element">
                    <p class="card-text">AAA</p>
                    <p class="card-text">AAA</p>
                    <p class="card-text">AAA</p>

                    <div class="card-buttons_container">
                        <a id="btnInfo_Proveedores" href="" class="card-button"><box-icon name='info-circle' color='#000' ></box-icon></a>
                        <a id="btnDelete_Proveedores" href="" class="card-button"><box-icon name='trash' color='#e00000' ></box-icon></a>
                        <a id="btnUpdate_Proveedores" href="" class="card-button"><box-icon name='pencil' color='#02a0ff' ></box-icon></a>
                    </div>
                </div>

                
            </div>

        </section>
        `;      
    }

    findAll(){

    }

    controllerAction() {
        

        const btnCreateProveedor = this.querySelector("#btnCreate_Proveedores")
        const btnDeleteProveedor = this.querySelector("#btnDelete_Proveedores")
        const btnUpdateProveedor = this.querySelector("#btnUpdate_Proveedores")
        const btnInfoProveedor = this.querySelector("#btnInfo_Proveedores")

        btnCreateProveedor.addEventListener("click", () =>{
            this.innerHTML = /* html */ `
            <section id="proveedor--create">
                <div>
                    <h2>Registre proveedor</h2>
                </div>
                <div>
                    <h3>Nombre</h3>
                    <input placeholder="proveedor" id="name">
                </div>
                <div>
                    <button id="saveProveedor">Guardar</button>
                </div>
            </section>
            `;

            const btnSave = this.querySelector("#saveProveedor")
            btnSave.addEventListener("click", () => {
                const endpoint = "proveedor"
                const nombre = this.querySelector("#name").value;

                const newProveedor = {
                    id : 0,
                    nombre: nombre
                }

                postData(newProveedor, endpoint)
                    .then(response => {
                        if (response.ok){
                            return response.json();
                        }
                        throw new Error('Error al crear el proveedor')
                    })
                    .then(data => {
                        console.log('Proveedor creado', data);
                    })
                    .catch(error => {
                        console.error('Error', error);
                    })
            })
        })
    }

    
}
customElements.define("proveedor-menu", ProveedorMenu);
