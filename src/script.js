import { CreateCart } from "./models/carrinho.js"
import { CreateLayout } from "./models/vitrine.js"
import { ProductsRouter } from "./routes/ProductsRouter.js"

const cart = new CreateCart()

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

    // identificar clicks nos products dentro do carrinho
    const cartContainer = document.querySelector('#shopKart')
    cartContainer.onclick = handleClickOnCart
}
starter()

function handleClickOnProduct(event) {
    const target = event.target

    if (target.tagName === 'BUTTON') {
        const card          = target.closest('li')
        const productId     = card.id

        const allProducts   = JSON.parse(localStorage.getItem('allProducts'))
        const chosenProduct = allProducts.find(product => product.id == productId)

        cart.createItem(chosenProduct)
    }
}

function handleClickOnCart(event) {
    const target = event.target

    if (target.id === 'cart__remove' || target.tagName === 'I') {
        const item      = target.closest('li')
        const productId = item.id

        cart.removeItem(productId, item)
    }
}

// funcionalidades de botões de filtro/pesquisa ***** favor conferir rotas ******

const todosButton = document.getElementById('filters__button--todos');
todosButton.addEventListener('click', filterTodos);

function filterTodos () {
    const allProducts   = JSON.parse(localStorage.getItem('allProducts'))
    const createLayout = new CreateLayout(allProducts)
    createLayout.createEachProduct()
}

const panificadoraButton = document.getElementById('filters__button--panificadora');
panificadoraButton.addEventListener('click', filterPanificadora);

function filterPanificadora () {
    const allProducts   = JSON.parse(localStorage.getItem('allProducts'))
    const listPanificadora = allProducts.filter((product) => {
        return product.categoria === 'Panificadora';
    });
    const createLayout = new CreateLayout(listPanificadora)
    createLayout.createEachProduct()
}

const frutasButton = document.getElementById('filters__button--frutas');
frutasButton.addEventListener('click', filterFrutas);

function filterFrutas () {
    const allProducts   = JSON.parse(localStorage.getItem('allProducts'))
    const listFrutas = allProducts.filter((product) => {
        return product.categoria === 'Frutas';
    });
    const createLayout = new CreateLayout(listFrutas)
    createLayout.createEachProduct()
}


const bebidasButton = document.getElementById('filters__button--bebidas')
bebidasButton.addEventListener('click', filterBebidas);

function filterBebidas () {
    const allProducts   = JSON.parse(localStorage.getItem('allProducts'))
    const listBebidas = allProducts.filter((product) => {
        return product.categoria === 'Bebidas';
    });
    const createLayout = new CreateLayout(listBebidas)
    createLayout.createEachProduct()
}



const searchButton = document.getElementById('searchbar__button')
searchButton.addEventListener('click', filterSearch);
const entrada = document.getElementById ('search')

function filterSearch() {
    const allProducts   = JSON.parse(localStorage.getItem('allProducts'))

    let inputBuscar = entrada.value;

    const listSearch = allProducts.filter((product) => {
        if (inputBuscar.toLowerCase()===product.categoria.toLowerCase()) {
            return product.categoria.toLowerCase() === inputBuscar.toLowerCase();
        }
        else if (inputBuscar.toLowerCase()===product.name.toLowerCase()) {
            return product.name.toLowerCase() === inputBuscar.toLowerCase();
        }
    });
    const createLayout = new CreateLayout(listSearch)
    createLayout.createEachProduct()
}
