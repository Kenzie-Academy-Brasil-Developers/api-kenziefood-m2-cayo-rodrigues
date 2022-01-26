import { CreateLayout } from "./models/vitrine.js"
import { ProductsRouter } from "./routes/ProductsRouter.js"

// roda assim que a página carrega
async function starter() {
    // pegar products da api
    const allProducts = await ProductsRouter.get()
    localStorage.setItem('allProducts', JSON.stringify(allProducts))

    // listar products na vitrine
    const createLayout = new CreateLayout(allProducts)
    createLayout.createEachProduct()

    // identificar clicks nos products e passar pro carrinho
    const showcase = document.querySelector('#showcase')
    showcase.onclick = handleClickOnProduct
}
starter()

function handleClickOnProduct(event) {
    const target = event.target

    if (target.tagName === 'BUTTON') {
        const card          = target.closest('li')
        const productId     = card.id
        const allProducts   = JSON.parse(localStorage.getItem('allProducts'))
        const chosenProduct = allProducts.find(product => product.id == productId)

        // nesse ponto, chamamos o carrinho
        console.log(chosenProduct)
    }
}

// funcionalidades de botões de filtro/pesquisa ***** favor conferir rotas ******

const todosButton = document.getElementById('filters__button--todos');
todosButton.addEventListener('click', filterTodos);

function filterTodos () {
    CreateLayout.createEachProduct(allProducts);
}

const panificadoraButton = document.getElementById('filters__button--panificadora');
panificadoraButton.addEventListener('click', filterPanificadora);

function filterPanificadora () {
    const listPanificadora = allProducts.filter((product) => {
        return product.category === 'Panificadora';
    });
    CreateLayout.createEachProduct(listPanificadora)
}

const frutasButton = document.getElementById('filters__button--frutas');
frutasButton.addEventListener('click', filterFrutas);

function filterFrutas () {
    const listFrutas = allProducts.filter((product) => {
        return product.category === 'Frutas';
    });
    CreateLayout.createEachProduct(listFrutas)
}


const bebidasButton = document.getElementById('filters__button--bebidas')
bebidasButton.addEventListener('click', filterBebidas);

function filterBebidas () {
    const listBebidas = allProducts.filter((product) => {
        return product.category === 'Bebidas';
    });
    CreateLayout.createEachProduct(listBebidas)
}



const searchButton = document.getElementById('searchbar__button')
searchButton.addEventListener('click', filterSearch);
const entrada = document.getElementById ('search')

function filterSearch() {

    let inputBuscar = entrada.value;

    const listSearch = allProducts.filter((product) => {
        if (inputBuscar.toLowerCase()===product.category.toLowerCase()) {
            return product.category.toLowerCase() === inputBuscar.toLowerCase();
        }
        else if (inputBuscar.toLowerCase()===product.name.toLowerCase()) {
            return product.name.toLowerCase() === inputBuscar.toLowerCase();
        }
    });
        CreateLayout.createEachProduct(listSearch);

    console.log()

}
