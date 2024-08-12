import { deleteData, getDataTry, getData, postData, updateData } from '/API/API.js';
import { filterByRange } from '/API/USAPI.js';

export class ProductosMenu extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.goBack();
        this.showProducts();
        this.addNewProduct();
        this.controlModalFilter();
        this.filterProductsByRange();
    }

    render() {
        this.innerHTML = /* html */ `
        <section class="container-wc">
            <div class="cont-button">
                <a href="#" id="btnVolver-product"><box-icon name='arrow-back'></box-icon></a>
            </div>

            <div class="container-titulos_list">
                <h1 class="titulo-list">Products</h1>
                <a id="btnProductByGama" class="button-filter" href="#"><box-icon name='plus' color="#FFF"></box-icon>Filter By Range</a>
                <a id="btnAddProduct" class="button-new" href="#"><box-icon name='plus' color="#FFF"></box-icon> New Product</a>
            </div>

            <div class="overlay" id="overlay3-product">
                    <div id="popupDelete-product" class="popup-delete">
                        <div id="delModalProduct" class="cont">
                            <p>Would you delete the product?</p>
                            <div class="cont-buttons_delete">
                                <a id="btnConfirmDelProduct" class="button-confirm_delete">Confirm</a>
                                <a id="btnCancelDelProduct" class="button-cancel_delete">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overlay" id="overlay2-product">
                    <div id="popupInfo-product" class="popup-info">
                        <div class="cont-top_modal">
                            <div id="btnCancelProductInfo" class="button-cancel_modal">&#10005;</div>
                        </div>
                        <div id="infoModalProduct" class="cont"></div>
                    </div>
                </div>

                <div id="overlayEditproduct" class="overlay">
                    <div id="popUpEditProduct" class="popup-edit">
                        <div class="cont-top_modal">
                            <h1 class="titulo-list">Edit Product</h1>
                            <div id="btnCancelEditProduct" class="button-cancel_modal">&#10005;</div>
                        </div>
                        <div class="cont-form">
                            <form id="editProductForm" class="form-new">
                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inNameEditProduct">Name</label>
                                    <input type="text" class="input-form" name="inNameEditProduct" id="inNameEditProduct" placeholder="Enter product name" required>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inSalePriceEditProduct">Sale Price</label>
                                    <input type="number" class="input-form" name="inSalePriceEditProduct" id="inSalePriceEditProduct" placeholder="Enter sale price" required>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inSupplierPriceEditProduct">Supplier Price</label>
                                    <input type="number" class="input-form" name="inSupplierPriceEditProduct" id="inSupplierPriceEditProduct" placeholder="Enter supplier price" required>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inProductRangeEditProduct">Product Range</label>
                                    <select class="input-form input-select" name="inProductRangeEditProduct" id="inProductRangeEditProduct"></select>
                                </div>

                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="indimensions">Dimensions</label>
                                <div id="indimensions">

                                    <label class="label-form" for="heightEdit">Height</label>
                                    <input class="input-form" id="heightEdit" name="heightEdit" type="number" step="0.01" placeholder="Enter height" required>


                                    <label class="label-form" for="widthEdit">Width</label>
                                    <input class="input-form" id="widthEdit" name="widthEdit" type="number" step="0.01" placeholder="Enter width" required>


                                    <label class="label-form" for="lengthEdit">Length</label>
                                    <input class="input-form" id="lengthEdit" name="lengthEdit" type="number" step="0.01" placeholder="Enter length" required>
                                
                                </div>
                            </div>

                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inSupplierProductEdit">Supplier</label>
                                    <select class="input-form input-select" name="inSupplierProductEdit" id="inSupplierProductEdit"></select>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inStockProductEdit">Stock</label>
                                    <input type="number" class="input-form" name="inStockProductEdit" id="inStockProductEdit" placeholder="Enter stock quantity" required>
                                </div>

                                <div class="button-add">
                                    <button id="editProduct" class="button-new">FINISH</button>
                                </div>   
                            </form>
                        </div>
                    </div>
                </div>

                <div id="overlay-product" class="overlay">
                    <div id="popUpAdd-product" class="popup-add">
                        <div class="cont-top_modal">
                            <h1 class="titulo-list">New Product</h1>
                            <div id="btnCancelAddProduct" class="button-cancel_modal">&#10005;</div>
                        </div>
                        <div class="cont-form">
                            <form id="addProductForm" class="form-new">
                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inNameProduct">Name</label>
                                    <input type="text" class="input-form" name="inNameProduct" id="inNameProduct" placeholder="Enter product name" required>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inSalePriceProduct">Sale Price</label>
                                    <input type="number" class="input-form" name="inSalePriceProduct" id="inSalePriceProduct" placeholder="Enter sale price" required>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inSupplierPriceProduct">Supplier Price</label>
                                    <input type="number" class="input-form" name="inSupplierPriceProduct" id="inSupplierPriceProduct" placeholder="Enter supplier price" required>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inProductRangeProduct">Product Range</label>
                                    <select class="input-form input-select" name="inProductRangeProduct" id="inProductRangeProduct"></select>
                                </div>

                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="indimensions">Dimensions</label>
                                <div id="indimensions">

                                    <label class="label-form" for="height">Height</label>
                                    <input class="input-form" id="height" name="height" type="number" step="0.01" placeholder="Enter height" required>


                                    <label class="label-form" for="width">Width</label>
                                    <input class="input-form" id="width" name="width" type="number" step="0.01" placeholder="Enter width" required>


                                    <label class="label-form" for="length">Length</label>
                                    <input class="input-form" id="length" name="length" type="number" step="0.01" placeholder="Enter length" required>
                                
                                </div>
                            </div>

                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inSupplierProduct">Supplier</label>
                                    <select class="input-form input-select" name="inSupplierProduct" id="inSupplierProduct"></select>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inStockProduct">Stock</label>
                                    <input type="number" class="input-form" name="inStockProduct" id="inStockProduct" placeholder="Enter stock quantity" required>
                                </div>

                                <div class="button-add">
                                    <button id="createNewProduct" class="button-new">ADD</button>
                                </div>   
                            </form>
                        </div>
                    </div>
                </div>

            <div class="cont-list_big">
                <div class="cont-list">
                    <p class="titulo-list-id">ID</p>
                    <p class="titulo-list-id">Name</p>
                    <p class="titulo-list-id">Sale Price</p>
                </div>

                <div id="containerShowProducts" class="elements-list"></div>

                <div class="overlay" id="overlay4-product">
                    <div id="popupAllright-product" class="popup-allright">
                        <box-icon name='check-circle' color='#69ff94' ></box-icon>
                        <div id="btnCloseModalsAllrigth-product" class="button-cancel_modal">&#10005;</div>
                    </div>
                </div>

                <div class="overlay" id="overlayFilterByRange">
                    <div id="popUpFilterByRange" class="popup-filter">
                        <div id="btnCloseModalFilterProduct" class="button-cancel_modal">&#10005;</div>
                    
                        <div class="cont-input_wide cont-input">
                            <label class="label-form" for="selRangeFilterProduct">Product Range</label>
                            <select class="input-form input-select" name="selRangeFilterProduct" id="selRangeFilterProduct">
                            </select>

                            <div id="contFilteredProductsByRange">
                            <div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    }

    goBack() {
        const btnVolver = document.querySelector("#btnVolver-product");
        const productos = document.querySelector("productos-menu");
        const mainMenu = document.querySelector("main-menu");

        btnVolver.addEventListener("click", e => {
            productos.style.display = "none";
            mainMenu.style.display = "block";
            e.preventDefault();
        });
    }

    async arrayProducts() {
        const endpoint = "productos";
        const { data, error } = await getData(endpoint);

        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }

        return data;
    }

    async arrayProductRanges() {
        const endpoint = "gamaproductos";
        const { data, error } = await getData(endpoint);

        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }
        return data;
    }

    async arraySuppliers() {
        const endpoint = "proveedor";
        const { data, error } = await getData(endpoint);

        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }

        return data;
    }

    controlModalFilter() {
        const btnFilterProductos = document.getElementById("btnProductByGama")
        const btnCloseProducts = document.getElementById("btnCloseModalFilterProduct")
        const overlay = document.getElementById("overlayFilterByRange")
        const popupFilter = document.getElementById("popUpFilterByRange")
        const selectProductFilterRange = document.getElementById("selRangeFilterProduct")


        btnFilterProductos.addEventListener("click", e => {
            e.preventDefault()

            overlay.classList.add("active")
            popupFilter.classList.add("active")
        })

        btnCloseProducts.addEventListener("click", e => {
            e.preventDefault()

            overlay.classList.remove("active")
            popupFilter.classList.remove("active")
        })

        this.arrayProductRanges().then((ranges) => {
            if (ranges) {
                selectProductFilterRange.innerHTML = '';
                ranges.forEach(range => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(range);
                    opc.textContent = range.nombre;
                    selectProductFilterRange.appendChild(opc);
                });
            } else {
                console.log("No se pudo obtener las gamas de producto.");
            }
        }).catch((error) => {
            console.error("Error al obtener las gamas de producto:", error);
        });
    }

    filterProductsByRange() {
        const selFilterProduc = document.getElementById("selRangeFilterProduct")

        selFilterProduc.addEventListener("change", e => {
            const selectedRange = document.getElementById("selRangeFilterProduct").value

            filterByRange(selectedRange)
            .then(result => {
                if (result.data) {
                    console.log('Productos:', result.data);
                    // Aquí puedes procesar los datos como quieras
                } else {
                    console.error('Error al obtener productos:', result.error);
                }
            })
            .catch(error => {
                console.error('Unhandled error:', error);
            });
        })
    }

    addNewProduct() {
        const productForm = document.getElementById("addProductForm");

        const overlay4 = document.querySelector("#overlay4-product");
        const popUpAllrigth = document.getElementById("popupAllright-product")
        const btnCloseModals = document.querySelector("#btnCloseModalsAllrigth-product")

        const selectedOptionProductRange = document.getElementById("inProductRangeProduct");
        const selectSupplier = document.getElementById("inSupplierProduct");

        const btnSendProduct = document.getElementById("createNewProduct");

        this.fillSelects();

        btnSendProduct.addEventListener("click", async (e) => {
            e.preventDefault();

            try {
                let inputsFormText = document.querySelectorAll(".input-txt")

                let nameProduct = document.getElementById("inNameProduct").value;
                let salePriceProduct = Number.parseFloat(document.getElementById("inSalePriceProduct").value);
                let supplierPriceProduct = Number.parseFloat(document.getElementById("inSupplierPriceProduct").value);
                let heightDimension = document.getElementById("height").value;
                let widthDimension = document.getElementById("width").value;
                let lengthDimension = document.getElementById("length").value;
                let stockProduct = Number.parseInt(document.getElementById("inStockProduct").value);

                const selectedProductRange = JSON.parse(selectedOptionProductRange.value);
                const selectedSupplier = JSON.parse(selectSupplier.value);

                let maxIdDimensiones = await this.calculateMaxId("dimensiones");
                let maxIdstock = await this.calculateMaxId("stock");

                
                let stockProducto = {
                    id : 0,
                    stock : stockProduct
                }

                await postData(stockProducto, "stock")

                let dimensiones = {
                    id: 0,
                    ancho: Number.parseInt(widthDimension),
                    largo: Number.parseInt(lengthDimension),
                    alto: Number.parseInt(heightDimension)
                };

                await postData(dimensiones, "dimensiones")

                let newProduct = {
                    id: 0,
                    nombreProducto: nameProduct,
                    precioProveedor: supplierPriceProduct,
                    precioVenta: salePriceProduct,
                    gamaProducto : selectedProductRange,
                    dimensionesProducto: {
                        id: maxIdDimensiones,
                        ancho: dimensiones.ancho,
                        largo: dimensiones.largo,
                        alto: dimensiones.alto
                    },
                    proveedorProducto: selectedSupplier,
                    stockProducto: {
                        id : maxIdstock,
                        stock : stockProducto.stock
                    }
                };

                console.log("Producto creado:", newProduct);

                await postData(newProduct, "productos");

                this.showProducts();

                inputsFormText.forEach((inpt) => {
                    inpt.value = ""
                })
                
                this.closeAddOfficeModal()

                overlay4.classList.add("active")
                popUpAllrigth.classList.add("active")

                btnCloseModals.addEventListener("click", e => {
                    e.preventDefault();
                    overlay4.classList.remove("active")
                    popUpAllrigth.classList.remove("active")
                });

            } catch (error) {
                console.error("Error creating product:", error);
            }
        });
    }

    async calculateMaxId(endpoint) {
        try {
            const { data } = await getData(endpoint);
            if (!Array.isArray(data)) {
                throw new Error('Data is not an array');
            }

            let maxID = 0;
            data.forEach((item) => {
                if (item.id >= maxID) {
                    maxID = item.id + 1;
                }
            });
            return maxID;
        } catch (error) {
            console.error(`Error calculating maxID for ${endpoint}:`, error);
            throw error;
        }
    }

    fillSelects() {
        const selectProductRange = document.getElementById("inProductRangeProduct");
        const selectSupplier = document.getElementById("inSupplierProduct");

        this.arrayProductRanges().then((ranges) => {
            if (ranges) {
                selectProductRange.innerHTML = '';
                ranges.forEach(range => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(range);
                    opc.textContent = range.nombre;
                    selectProductRange.appendChild(opc);
                });
            } else {
                console.log("No se pudo obtener las gamas de producto.");
            }
        }).catch((error) => {
            console.error("Error al obtener las gamas de producto:", error);
        });

        this.arraySuppliers().then((suppliers) => {
            if (suppliers) {
                selectSupplier.innerHTML = '';
                suppliers.forEach(supplier => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(supplier);
                    opc.textContent = supplier.nombre;
                    selectSupplier.appendChild(opc);
                });
            } else {
                console.log("No se pudo obtener los proveedores.");
            }
        }).catch((error) => {
            console.error("Error al obtener proveedores:", error);
        });
    }

    editProduct(producto) {
        const overlay = document.getElementById("overlayEditproduct");
        const popUpEdit = document.getElementById("popUpEditProduct")
        const btnCerrar = document.getElementById("btnCancelEditProduct");

        const overlay4 = document.querySelector("#overlay4-product");
        const popUpAllrigth = document.getElementById("popupAllright-product")
        const btnCloseModals = document.querySelector("#btnCloseModalsAllrigth-product")
    
        overlay.classList.add("active");
        popUpEdit.classList.add("active");
    
        btnCerrar.addEventListener("click", e => {
            e.preventDefault();
            overlay.classList.remove("active");
            popUpEdit.classList.remove("active");
        });

        const selectedOptionProductRange = document.getElementById("inProductRangeEditProduct");
        const selectSupplier = document.getElementById("inSupplierProductEdit");

        const btnSendProduct = document.getElementById("editProduct");

        this.fillSelectsEdit();

        btnSendProduct.addEventListener("click", async (e) => {
            e.preventDefault();

            try {
                let inputsFormText = document.querySelectorAll(".input-txt")
                
                let nameProduct = document.getElementById("inNameEditProduct").value;
                let salePriceProduct = Number.parseFloat(document.getElementById("inSalePriceEditProduct").value);
                let supplierPriceProduct = Number.parseFloat(document.getElementById("inSupplierPriceEditProduct").value);
                let heightDimension = document.getElementById("heightEdit").value;
                let widthDimension = document.getElementById("widthEdit").value;
                let lengthDimension = document.getElementById("lengthEdit").value;
                let stockProduct = Number.parseInt(document.getElementById("inStockProductEdit").value);

                const selectedProductRange = JSON.parse(selectedOptionProductRange.value);
                const selectedSupplier = JSON.parse(selectSupplier.value);

                let maxIdDimensiones = await this.calculateMaxId("dimensiones");
                let maxIdstock = await this.calculateMaxId("stock");

                
                let stockProducto = {
                    id : 0,
                    stock : stockProduct
                }

                await postData(stockProducto, "stock")

                let dimensiones = {
                    id: 0,
                    ancho: Number.parseInt(widthDimension),
                    largo: Number.parseInt(lengthDimension),
                    alto: Number.parseInt(heightDimension)
                };

                await postData(dimensiones, "dimensiones")

                let newProduct = {
                    id: producto.id,
                    nombreProducto: nameProduct,
                    precioProveedor: supplierPriceProduct,
                    precioVenta: salePriceProduct,
                    gamaProducto : selectedProductRange,
                    dimensionesProducto: {
                        id: maxIdDimensiones,
                        ancho: dimensiones.ancho,
                        largo: dimensiones.largo,
                        alto: dimensiones.alto
                    },
                    proveedorProducto: selectedSupplier,
                    stockProducto: {
                        id : maxIdstock,
                        stock : stockProducto.stock
                    }
                };

                console.log("Producto creado:", newProduct);

                await updateData(newProduct, "productos", producto.id);

                this.showProducts();

                inputsFormText.forEach((inpt) => {
                    inpt.value = ""
                })
                
                this.closeAddOfficeModal()

                overlay4.classList.add("active")
                popUpAllrigth.classList.add("active")

                btnCloseModals.addEventListener("click", e => {
                    e.preventDefault();
                    overlay4.classList.remove("active")
                    popUpAllrigth.classList.remove("active")
                });

            } catch (error) {
                console.error("Error creating product:", error);
            }
        });
    }

    fillSelectsEdit() {
        const selectProductRange = document.getElementById("inProductRangeEditProduct");
        const selectSupplier = document.getElementById("inSupplierProductEdit");

        this.arrayProductRanges().then((ranges) => {
            if (ranges) {
                selectProductRange.innerHTML = '';
                ranges.forEach(range => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(range);
                    opc.textContent = range.nombre;
                    selectProductRange.appendChild(opc);
                });
            } else {
                console.log("No se pudo obtener las gamas de producto.");
            }
        }).catch((error) => {
            console.error("Error al obtener las gamas de producto:", error);
        });

        this.arraySuppliers().then((suppliers) => {
            if (suppliers) {
                selectSupplier.innerHTML = '';
                suppliers.forEach(supplier => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(supplier);
                    opc.textContent = supplier.nombre;
                    selectSupplier.appendChild(opc);
                });
            } else {
                console.log("No se pudo obtener los proveedores.");
            }
        }).catch((error) => {
            console.error("Error al obtener proveedores:", error);
        });
    }

    closeAddOProductModal() {
        const overlay = document.getElementById("overlay-product");
        const popUpAdd = document.getElementById("popUpAdd-product");
        overlay.classList.remove("active");
        popUpAdd.classList.remove("active");
    }

    async showProducts() {
        const btnAddProduct = document.getElementById("btnAddProduct");
        const overlay = document.getElementById("overlay-product");
        const popUpAdd = document.getElementById("popUpAdd-product");
        const btnCerrar = document.getElementById("btnCancelAddProduct");
        const containerShowProducts = document.querySelector("#containerShowProducts");

        btnAddProduct.addEventListener("click", e => {
            e.preventDefault();
            overlay.classList.add("active");
            popUpAdd.classList.add("active");
        });

        btnCerrar.addEventListener("click", e => {
            e.preventDefault();
            overlay.classList.remove("active");
            popUpAdd.classList.remove("active");
        });

        this.arrayProducts()
            .then((productos) => {
                if (productos.length === 0) {
                    containerShowProducts.innerHTML = '<p class="txt-showbox">No hay productos registrados</p>';
                } else {
                    if (productos) {
                        containerShowProducts.innerHTML = ''; // Limpiar la lista antes de añadir nuevos productos
                        productos.forEach(producto => {
                            const card = document.createElement("div");
                            card.classList.add("card-element");
                            card.innerHTML = `
                            <p class="card-text">${producto.id}</p>
                            <p class="card-text">${producto.nombreProducto}</p>
                            <p class="card-text">${producto.precioVenta}</p>
                            <div class="card-buttons_container">
                                <a href="#" class="card-button btnInfoProduct" data-id="${producto.id}">
                                    <box-icon name='info-circle' color='#508C9B'></box-icon>
                                </a>
                                <a href="#" class="card-button btnDeleteProduct" data-id="${producto.id}">
                                    <box-icon name='trash' color='#508C9B'></box-icon>
                                </a>
                                <a href="#" class="card-button btnEditProduct" data-id="${producto.id}">
                                    <box-icon name='pencil' color='#508C9B'></box-icon>
                                </a>
                            </div>`;

                            containerShowProducts.appendChild(card);
                        });

                        // Manejo de eventos para los botones
                        const btnInfoProduct = document.querySelectorAll('.btnInfoProduct');
                        btnInfoProduct.forEach(button => {
                            button.addEventListener('click', (e) => {
                                e.preventDefault();
                                const productId = button.getAttribute('data-id');
                                const producto = productos.find(o => o.id.toString() === productId);

                                if (producto) {
                                    this.showProductInfo(producto);

                                } else {
                                    console.error(`No se encontró el producto con id: ${productId}`);
                                }
                            });
                        });

                        const btnDeleteProduct = document.querySelectorAll('.btnDeleteProduct');
                        btnDeleteProduct.forEach(button => {
                            button.addEventListener('click', (e) => {
                                e.preventDefault();
                                const productId = button.getAttribute('data-id');
                                const producto = productos.find(o => o.id.toString() === productId);

                                if (producto) {
                                    this.deleteProduct(producto);

                                } else {
                                    console.error(`No se encontró el producto con id: ${productId}`);
                                }
                            });
                        });

                        const btnEditProduct = document.querySelectorAll('.btnEditProduct');
                        btnEditProduct.forEach(button => {
                            button.addEventListener('click', (e) => {
                                e.preventDefault();
                                const productId = button.getAttribute('data-id');
                                const producto = productos.find(o => o.id.toString() === productId);

                                if (producto) {
                                    this.editProduct(producto);

                                } else {
                                    console.error(`No se encontró el producto con id: ${productId}`);
                                }
                            });
                        });
                    } else {
                        console.log("No se pudieron obtener los productos.");
                    }
                }
            })
            .catch((error) => {
                console.error("Error al obtener los productos:", error);
            });
    }


    async showProductInfo(product) {
        const overlay2 = document.getElementById("overlay2-product");
        const popUpInfo = document.getElementById("popupInfo-product");
        const infoModal = document.getElementById('infoModalProduct');

        overlay2.classList.add("active")
        popUpInfo.classList.add("active")

        infoModal.innerHTML = ` 
        <div class="cont-info_p">
            <label for="pProductName" class="label-form">Nombre del Producto</label>
            <p name="pProductName" class="card-text">${product.nombreProducto}</p>
        </div>
        <div class="cont-info_p">
            <label for="pProductSupPrice" class="label-form">Precio de proveedor</label>
            <p name="pProductSupPrice" class="card-text">${product.precioProveedor}</p>
        </div>
        <div class="cont-info_p">
            <label for="pProductPrice" class="label-form">Precio de venta</label>
            <p name="pProductPrice" class="card-text">$${product.precioVenta}</p>
        </div>
        <div class="cont-info_p">
            <label for="pProductRange" class="label-form">Descripción</label>
            <p name="pProductRange" class="card-text">${product.gamaProducto.nombre}</p>
        </div>
        <div class="cont-info_p">
            <label for="pProductSupplier" class="label-form">Proveedor</label>
            <p name="pProductSupplier" class="card-text">${product.proveedorProducto.nombre}</p>
        </div>
        <div class="cont-info_p">
            <label for="pProductStock" class="label-form">Cantidad en Stock</label>
            <p name="pProductStock" class="card-text">${product.stockProducto.stock}</p>
        </div>
        `;

        overlay2.classList.add("active");
        popUpInfo.classList.add("active");

        document.getElementById("btnCancelProductInfo").addEventListener("click", e => {
            e.preventDefault();
            overlay2.classList.remove("active");
            popUpInfo.classList.remove("active");
        });
    }

    deleteProduct(producto) {
        const endpoint = "productos";
        const overlay3 = document.getElementById("overlay3-product");
        const popUpDelete = document.getElementById("popupDelete-product");
        const btnConfirmDelProduct = document.querySelector("#btnConfirmDelProduct");
        const btnCancelDelProduct = document.querySelector("#btnCancelDelProduct");
        const contShowProducts = document.querySelector("#containerShowProducts");
        const overlay4 = document.querySelector("#overlay4-product");
        const popUpAllright = document.getElementById("popupAllright-product")

        const closeDeletePopup = () => {
            overlay3.classList.remove("active");
            popUpDelete.classList.remove("active");
        };

        const closeConfirmPopup = () => {
            overlay4.classList.remove("active");
            popUpAllright.classList.remove("active");
        };

        overlay3.classList.add("active");
        popUpDelete.classList.add("active");

        const handleConfirmDelete = e => {
            e.preventDefault();
            deleteData(endpoint, producto.id)
                .then(response => {
                    if (response.ok) {
                        closeDeletePopup();

                        overlay4.classList.add("active");
                        popUpAllright.classList.add("active");

                        // Espera un pequeño retraso antes de actualizar la lista
                        setTimeout(() => {
                            contShowProducts.innerHTML = "";  // Limpiar lista actual
                            this.showProducts();  // Vuelve a cargar y renderizar la lista de productos
                        }, 200);  // Agrega un retraso corto

                        btnCancelDelProduct.addEventListener("click", e => {
                            e.preventDefault();
                            closeConfirmPopup()
                        });
                    } else {
                        throw new Error(`Error en la solicitud DELETE: ${response.status} - ${response.statusText}`);
                    }
                })
                .catch(error => {
                    console.error("Error en la eliminación de datos:", error);
                    popUpDelete.innerHTML = `
                        <div>Error al eliminar el producto. Por favor, inténtelo de nuevo.</div>
                        <div id="btnCloseDelError" class="button-cancel_modal">&#10005;</div>`;

                    document.getElementById("btnCloseDelError").addEventListener("click", e => {
                        e.preventDefault();
                        closeDeletePopup();
                    });
                });
        };

        // Se asegura de que solo se escuche una vez el evento de confirmación
        btnConfirmDelProduct.addEventListener("click", handleConfirmDelete, { once: true });

        btnCancelDelProduct.addEventListener("click", e => {
            e.preventDefault();
            closeDeletePopup();
        });
    }
}
customElements.define('productos-menu', ProductosMenu);
