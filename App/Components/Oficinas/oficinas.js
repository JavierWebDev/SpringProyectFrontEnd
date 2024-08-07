export class OficinasMenu extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = /* html */ `
        <section class="container-wc">
        <div class="cont-button">
            <a href="#"><box-icon name='arrow-back' ></box-icon></a>
        </div>

        <div class="container-titulos_list">
            <h1 class="titulo-list">Offices</h1>

            <a class="button-new" href="#"><box-icon name='plus' color="#FFF"></box-icon> New Office</a>
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
                    <a href="" class="card-button"><box-icon name='info-circle' color='#508C9B' ></box-icon></a>
                    <a href="" class="card-button"><box-icon name='trash' color='#508C9B' ></box-icon></a>
                    <a href="" class="card-button"><box-icon name='pencil' color='#508C9B' ></box-icon></a>
                </div>
            </div>

            
        </div>

    </section>
        `;
    }
}
customElements.define("oficinas-menu", OficinasMenu);