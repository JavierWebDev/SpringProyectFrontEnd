import { deleteData, getDataTry, getData, postData, updateData } from '/API/API.js';

export class PagosMenu extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.goBack();
        this.showPayments();
        this.addNewPayment();
    }

    render() {
        this.innerHTML = /* html */ `
		<section class="container-wc">
            <div class="cont-button">
                <a href="#" id="btnVolverPayments"><box-icon name='arrow-back'></box-icon></a>
            </div>

            <div class="container-titulos_list">
                <h1 class="titulo-list">Payments</h1>
                <a id="btnAddPayment" class="button-new" href="#"><box-icon name='plus' color="#FFF"></box-icon>New Payment</a>
            </div>

            <div class="cont-list_big">
                <div class="cont-list">
                    <p class="titulo-list-id">ID</p>
                    <p class="titulo-list-id">Transaction</p>
                    <p class="titulo-list-id">Payment Method</p>
                </div>

                <div id="containerShowPayments" class="elements-list"></div>

                <div class="overlay" id="overlay4Payments">
                    <div id="popupAllrigthPayment" class="popup-allright">
                        <div class="popupAllrigthPayment">
                            <box-icon name='check-circle' color='#69ff94' ></box-icon>
                            <p> Correcto!</p>
                            <div id="btnCloseModalsAllrigthPayment" class="button-cancel_modal">&#10005;</div>
                        </div>
                    </div>
                </div>
                
                <div class="overlay" id="overlay3Payment">
                    <div id="popupDeletePayment" class="popup-delete">
                        <div id="delModalPayment" class="cont">
                            <p>Would you delete the payment?</p>
                            <div class="cont-buttons_delete">
                                <a id="btnConfirmDelPayment" class="button-confirm_delete">Confirm</a>
                                <a id="btnCancelDelPayment" class="button-cancel_delete">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overlay" id="overlay2Payment">
                    <div id="popupInfoPayment" class="popup-info">
                        <div class="cont-top_modal">
                            <div id="btnCancelPayementInfo" class="button-cancel_modal">&#10005;</div>
                        </div>
                        <div id="infoModalPayment" class="cont"></div>
                    </div>
                </div>

                <div id="overlay5Payment" class="overlay">
                    <div id="popUpEditPayment" class="popup-edit">
                        <div class="cont-top_modal">
                            <h1 class="titulo-list">Edit Payment</h1>
                            <div id="btnCancelEditPayment" class="button-cancel_modal">&#10005;</div>
                        </div>
                        <div class="cont-form">
                            <form id="editPaymentForm" class="form-new">
                                <div class="cont-input_two cont-input">
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inTransactionEditPayment">Amount</label>
                                        <input type="number" class="input-form input-txt" name="inTransactionEditPayment" id="inTransactionEditPayment">
                                    </div>
                                    <div class="cont-input_twoo">
                                        <label class="label-form" for="inPaymentMethodEditPayment">Payment Method</label>
                                        <select class="input-form input-select" name="inPaymentMethodEditPayment" id="inPaymentMethodEditPayment"></select>
                                    </div>
                                </div>

                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inPaymentDateEditPayment">Payment Date</label>
                                    <input type="date" class="input-form input-txt" name="inPaymentDateEditPayment" id="inPaymentDateEditPayment">
                                </div>


                                <div class="cont-input_wide cont-input">
                                    <label class="label-form" for="inCustomerEditPayment">Customer</label>
                                    <select class="input-form input-select" id="inCustomerEditPayment"></select>
                                </div>

                                <div class="button-add"> <button id="editNewPayment" class="button-new">FINISH</button> </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div id="overlayPayment" class="overlay">
                    <div id="popUpAddPayment" class="popup-add">
                        <div class="cont-top_modal">
                            <h1 class="titulo-list">New Payment</h1>
                            <div id="btnCancelAddPayment" class="button-cancel_modal">&#10005;</div>
                        </div>
                        <div class="cont-form">
                            <form id="addPaymentForm" class="form-new">
                            <div class="cont-input_two cont-input">
                                <div class="cont-input_twoo">
                                    <label class="label-form" for="inTransactionPayment">Amount</label>
                                    <input type="number" class="input-form input-txt" name="inTransactionPayment" id="inTransactionPayment">
                                </div>
                                <div class="cont-input_twoo">
                                    <label class="label-form" for="inPaymentMethodPayment">Payment Method</label>
                                    <select class="input-form input-select" name="inPaymentMethodPayment" id="inPaymentMethodPayment"></select>
                                </div>
                            </div>

                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="inPaymentDatePayment">Payment Date</label>
                                <input type="date" class="input-form input-txt" name="inPaymentDatePayment" id="inPaymentDatePayment">
                            </div>

                            <div class="cont-input_wide cont-input">
                                <label class="label-form" for="inCustomerPayment">Customer</label>
                                <select class="input-form input-select" id="inCustomerPayment"></select>
                            </div>

                            <div class="button-add"> <button id="createNewPayment" class="button-new">ADD</button> </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>`;

    }


    goBack() {
        const btnVolverPayments = document.querySelector("#btnVolverPayments");
        const pagos = document.querySelector("pagos-menu");
        const mainMenu = document.querySelector("main-menu");

        btnVolverPayments.addEventListener("click", e => {
            pagos.style.display = "none";
            mainMenu.style.display = "block";
            e.preventDefault();
        });
    }

    async arrayPayments() {
        const endpoint = "pagos";
        const { data, error } = await getData(endpoint);

        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }

        return data;
    }

    async arrayPaymentMethods() {
        const endpoint = "formaPago";
        const { data, error } = await getData(endpoint);

        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }

        return data;
    }

    async arrayCustomers() {
        const endpoint = "cliente";
        const { data, error } = await getData(endpoint);

        if (error) {
            console.log(`Error: ${error.message}`);
            return null;
        }

        return data;
    }

    closeAddPaymentModal() {
        const overlay = document.getElementById("overlayPayment");
        const popUpAddPayment = document.getElementById("popUpAddPayment");
        overlay.classList.remove("active");
        popUpAddPayment.classList.remove("active");
    }


    addNewPayment() {
        const overlay4 = document.querySelector("#overlay4Payments");
        const popUpAllrigth = document.getElementById("popupAllrigthPayment")
        const btnCloseModals = document.querySelector("#btnCloseModalsAllrigthPayment")

        const selectPaymentMethodPayment = document.getElementById("inPaymentMethodPayment");
        const selectCustomerPayment = document.getElementById("inCustomerPayment");

        let formPaymentAdd = document.getElementById("addPedidoForm")
        const btnSendPayment = document.getElementById("createNewPayment");

        this.fillSelects();

        btnSendPayment.addEventListener("click", async (e) => {
            e.preventDefault();
            try {
                // Obtener otras variables y opciones seleccionadas
                let transaction = document.getElementById("inTransactionPayment").value;
                let fechaPago = new Date(document.getElementById("inPaymentDatePayment").value).toISOString();

                const selectedOptionPaymentMethod = selectPaymentMethodPayment.options[selectPaymentMethodPayment.selectedIndex];
                const selectedPaymentMethod = JSON.parse(selectedOptionPaymentMethod.value);
        
                const selectedOptionCustomer = selectCustomerPayment.options[selectCustomerPayment.selectedIndex];
                const selectedCustomer = JSON.parse(selectedOptionCustomer.value);
        
                // Crear el objeto nuevapayment
                let formPayment = {
                    id: 0,
                    transaccion: transaction,
                    formaPago: selectedPaymentMethod,
                    fechaPago: fechaPago,
                    cliente: selectedCustomer
                };
        
                console.log("Pago creado:", formPayment);
        
                await postData(formPayment, "pagos");
        
                this.showPayments();
        
                // Limpiar inputs y cerrar modal
                document.querySelectorAll(".input-txt").forEach(inpt => inpt.value = "");
                this.closeAddPaymentModal();
        
                // Mostrar confirmación
                overlay4.classList.add("active");
                popUpAllrigth.classList.add("active");
        
                btnCloseModals.addEventListener("click", e => {
                    e.preventDefault();
                    overlay4.classList.remove("active");
                    popUpAllrigth.classList.remove("active");
                });
        
            } catch (error) {
                console.error("Error al crear el pago:", error);
            }
        });
    }

    fillSelectsEdit() {
        const selectPaymentMethodPayment = document.getElementById("inPaymentMethodEditPayment");
        const selectCustomerPayment = document.getElementById("inCustomerEditPayment");

        this.arrayPaymentMethods().then((paymethods) => {
            if (paymethods) {
                selectPaymentMethodPayment.innerHTML = '';
                paymethods.forEach(paymethod => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(paymethod);
                    opc.textContent = paymethod.formaPago;
                    selectPaymentMethodPayment.appendChild(opc);
                });
            } else {
                console.log("No se pudieron obtener las paymethods.");
            }
        }).catch((error) => {
            console.error("Error al obtener las paymethods:", error);
        });

        this.arrayCustomers().then((clientes) => {
            if (clientes) {
                selectCustomerPayment.innerHTML = '';
                clientes.forEach(cliente => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(cliente);
                    opc.textContent = cliente.nombre;
                    selectCustomerPayment.appendChild(opc);
                });
            } else {
                console.log("No se pudieron obtener los clientes.");
            }
        }).catch((error) => {
            console.error("Error al obtener los clientes:", error);
        });
    }


    fillSelects() {
        const selectPaymentMethodPayment = document.getElementById("inPaymentMethodPayment");
        const selectCustomerPayment = document.getElementById("inCustomerPayment");

        this.arrayPaymentMethods().then((paymethods) => {
            if (paymethods) {
                selectPaymentMethodPayment.innerHTML = '';
                paymethods.forEach(paymethod => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(paymethod);
                    opc.textContent = paymethod.formaPago;
                    selectPaymentMethodPayment.appendChild(opc);
                });
            } else {
                console.log("No se pudieron obtener las paymethods.");
            }
        }).catch((error) => {
            console.error("Error al obtener las paymethods:", error);
        });

        this.arrayCustomers().then((clientes) => {
            if (clientes) {
                selectCustomerPayment.innerHTML = '';
                clientes.forEach(cliente => {
                    const opc = document.createElement("option");
                    opc.value = JSON.stringify(cliente);
                    opc.textContent = cliente.nombre;
                    selectCustomerPayment.appendChild(opc);
                });
            } else {
                console.log("No se pudieron obtener los clientes.");
            }
        }).catch((error) => {
            console.error("Error al obtener los clientes:", error);
        });
    }

    editPayment(pago) {
        const overlay = document.getElementById("overlay5Payment");
        const popUpEdit = document.getElementById("popUpEditPayment")
        const btnCerrar = document.getElementById("btnCancelEditPayment");
    
        overlay.classList.add("active");
        popUpEdit.classList.add("active");
    
        btnCerrar.addEventListener("click", e => {
            e.preventDefault();
            overlay.classList.remove("active");
            popUpEdit.classList.remove("active");
        });

        const overlay4 = document.querySelector("#overlay4Payments");
        const popUpAllrigth = document.getElementById("popupAllrigthPayment")
        const btnCloseModals = document.querySelector("#btnCloseModalsAllrigthPayment")

        const selectPaymentMethodPayment = document.getElementById("inPaymentMethodPayment");
        const selectCustomerPayment = document.getElementById("inCustomerEditPayment");

        let formPaymentAdd = document.getElementById("addPedidoForm")
        const btnSendPayment = document.getElementById("editNewPayment");

        this.fillSelectsEdit();

        btnSendPayment.addEventListener("click", async (e) => {
            e.preventDefault();
            try {
                // Obtener otras variables y opciones seleccionadas
                let transaction = document.getElementById("inTransactionEditPayment").value;
                let fechaPago = new Date(document.getElementById("inPaymentDateEditPayment").value).toISOString();

                const selectedOptionPaymentMethod = selectPaymentMethodPayment.options[selectPaymentMethodPayment.selectedIndex];
                const selectedPaymentMethod = JSON.parse(selectedOptionPaymentMethod.value);
        
                const selectedOptionCustomer = selectCustomerPayment.options[selectCustomerPayment.selectedIndex];
                const selectedCustomer = JSON.parse(selectedOptionCustomer.value);
        
                // Crear el objeto nuevapayment
                let formPayment = {
                    id: pago.id,
                    transaccion: transaction,
                    formaPago: selectedPaymentMethod,
                    fechaPago: fechaPago,
                    cliente: selectedCustomer
                };
        
                console.log("Pago creado:", formPayment);
        
                await updateData(formPayment, "pagos", pago.id);
        
                this.showPayments();
        
                // Limpiar inputs y cerrar modal
                document.querySelectorAll(".input-txt").forEach(inpt => inpt.value = "");
                this.closeAddPaymentModal();
        
                // Mostrar confirmación
                overlay4.classList.add("active");
                popUpAllrigth.classList.add("active");
        
                btnCloseModals.addEventListener("click", e => {
                    e.preventDefault();
                    overlay4.classList.remove("active");
                    popUpAllrigth.classList.remove("active");
                });
        
            } catch (error) {
                console.error("Error al crear el pago:", error);
            }
        });
    }


    showPayments() {
        const btnAddPayment = document.getElementById("btnAddPayment");
        const overlay = document.getElementById("overlayPayment");
        const popUpAddPayment = document.getElementById("popUpAddPayment");
        const btnCerrar = document.getElementById("btnCancelAddPayment");
        const contShowPayments = document.querySelector("#containerShowPayments");

        btnAddPayment.addEventListener("click", e => {
            e.preventDefault();
            overlay.classList.add("active");
            popUpAddPayment.classList.add("active");
        });

        btnCerrar.addEventListener("click", e => {
            e.preventDefault();
            overlay.classList.remove("active");
            popUpAddPayment.classList.remove("active");
        });

        this.arrayPayments()
            .then((pagos) => {
                if (pagos.length === 0) {
                    contShowPayments.innerHTML = '<p class="txt-showbox">No hay pagos registradas</p>'
                } else {
                    if (pagos) {
                        contShowPayments.innerHTML = ''; // Limpiar la lista antes de añadir nuevas pagos
                        pagos.forEach(pago => {
                            const card = document.createElement("div");
                            card.classList.add("card-element");
                            card.innerHTML = `
                            <p class="card-text">${pago.id}</p>
                            <p class="card-text">${pago.transaccion}</p>
                            <p class="card-text">${pago.formaPago.formaPago}</p>
                            <div class="card-buttons_container">
                                <a href="#" class="card-button btnInfoPayment" data-id="${pago.id}">
                                    <box-icon name='info-circle' color='#508C9B'></box-icon>
                                </a>
                                <a href="#" class="card-button btnDeletePayment" data-id="${pago.id}">
                                    <box-icon name='trash' color='#508C9B'></box-icon>
                                </a>
                                <a href="#" data-id="${pago.id}" class="card-button btnEditPayment">
                                    <box-icon name='pencil' color='#508C9B'></box-icon>
                                </a>
                            </div>`;

                            contShowPayments.appendChild(card);
                        });

                        // Añadir los event listeners después de haber añadido los botones al DOM
                        document.querySelectorAll(".btnInfoPayment").forEach(button => {
                            button.addEventListener("click", e => {
                                e.preventDefault();
                                const paymentId = button.getAttribute("data-id");
                                const pay = pagos.find(o => o.id.toString() === paymentId);

                                if (pay) {
                                    this.showInfoModal(pay);

                                } else {
                                    console.error(`No se encontró la pay con id: ${paymentId}`);
                                }
                            });
                        });

                        document.querySelectorAll(".btnDeletePayment").forEach(button => {
                            button.addEventListener("click", e => {
                                e.preventDefault();
                                const paymentId = button.getAttribute("data-id");
                                const pay = pagos.find(o => o.id.toString() === paymentId);

                                if (pay) {
                                    this.deleteOffice(pay);

                                } else {
                                    console.error(`No se encontró la pay con id: ${paymentId}`);
                                }
                            });
                        });

                        document.querySelectorAll(".btnEditPayment").forEach(button => {
                            button.addEventListener("click", e => {
                                e.preventDefault();
                                const paymentId = button.getAttribute("data-id");
                                const pay = pagos.find(o => o.id.toString() === paymentId);

                                if (pay) {
                                    this.editPayment(pay);

                                } else {
                                    console.error(`No se encontró la pay con id: ${paymentId}`);
                                }
                            });
                        });
                    } else {
                        console.log("No se pudieron obtener las pays.");
                    }
                }
            })
            .catch((error) => {
                console.error("Error al obtener las pays:", error);
            });
    }


    showInfoModal(pay) {
        const overlay2Payment = document.getElementById("overlay2Payment");
        const popUpInfo = document.getElementById("popupInfoPayment");
        const infoModal = document.getElementById("infoModalPayment");

        infoModal.innerHTML = ` 
            <div class="cont-info_p">
                <label for="pTransaccion" class="label-form">Transaction Amount</label>
                <p name="pTransaccion" class="card-text">${pay.transaccion}</p>
            </div>
            <div class="cont-info_p">
                <label for="pPaymentPaymentMethod" class="label-form">Payment Method</label>
                <p name="pPaymentPaymentMethod" class="card-text">${pay.formaPago.formaPago}</p>
            </div>
            <div class="cont-info_p">
                <label for="pPaymentPaymentDate" class="label-form">Payment Date</label>
                <p name="pPaymentPaymentDate" class="card-text">${pay.fechaPago}</p>
            </div>
            <div class="cont-info_p">
                <label for="pPaymentCustomer" class="label-form">Customer Name</label>
                <p name="pPaymentCustomer" class="card-text">${pay.cliente.nombre}</p>
            </div>
            `;

        overlay2Payment.classList.add("active");
        popUpInfo.classList.add("active");

        document.getElementById("btnCancelPayementInfo").addEventListener("click", e => {
            e.preventDefault();
            overlay2Payment.classList.remove("active");
            popUpInfo.classList.remove("active");
        });
    }

    deleteOffice(office) {
        const endpoint = "pagos";
        const overlay3Payment = document.querySelector("#overlay3Payment");
        const popUpDelete = document.getElementById("popupDeletePayment");
        const btnConfirmDelPayment = document.querySelector("#btnConfirmDelPayment");
        const btnCancelDelPayment = document.querySelector("#btnCancelDelPayment");
        const contShowPayments = document.querySelector("#containerShowPayments");
        const overlay4Payments = document.querySelector("#overlay4Payments");
        const popUpAllrigthPayment = document.getElementById("popupAllrigthPayment")
        const btnCloseModals = document.querySelector("#btnCloseModalsAllrigthPayment")

        const closeDeletePopup = () => {
            overlay3Payment.classList.remove("active");
            popUpDelete.classList.remove("active");
        };

        const closeConfirmPopup = () => {
            overlay4Payments.classList.remove("active");
            popUpAllrigthPayment.classList.remove("active");
        };

        overlay3Payment.classList.add("active");
        popUpDelete.classList.add("active");

        const handleConfirmDelete = e => {
            e.preventDefault();
            deleteData(endpoint, office.id)
                .then(response => {
                    if (response.ok) {
                        closeDeletePopup();

                        overlay4Payments.classList.add("active")
                        popUpAllrigthPayment.classList.add("active")

                        // Espera un pequeño retraso antes de actualizar la lista
                        setTimeout(() => {
                            contShowPayments.innerHTML = "";  // Limpiar lista actual
                            this.showPayments();  // Vuelve a cargar y renderizar la lista de pays
                        }, 200);  // Agrega un retraso corto

                        // Escuchar el evento de cierre del popup
                        btnCloseModals.addEventListener("click", e => {
                            e.preventDefault();
                            closeConfirmPopup();
                        });
                    } else {
                        throw new Error(`Error en la solicitud DELETE: ${response.status} - ${response.statusText}`);
                    }
                })
                .catch(error => {
                    console.error("Error en la eliminación de datos:", error);
                    popUpDelete.innerHTML = `
                        <div>Error al eliminar la pay. Por favor, inténtelo de nuevo.</div>
                        <div id="btnCloseDelError" class="button-cancel_modal">&#10005;</div>`;

                    document.getElementById("btnCloseDelError").addEventListener("click", e => {
                        e.preventDefault();
                        closeDeletePopup();
                    });
                });
        };

        // Se asegura de que solo se escuche una vez el evento de confirmación
        btnConfirmDelPayment.addEventListener("click", handleConfirmDelete, { once: true });

        btnCancelDelPayment.addEventListener("click", e => {
            e.preventDefault();
            closeDeletePopup();
        });
    }
}

customElements.define("pagos-menu", PagosMenu);
