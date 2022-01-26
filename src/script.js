import { CreateCart } from "./models/carrinho.js"
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

        const cart = new CreateCart()
        cart.createItem(chosenProduct)
    }
}

// funcionalidades de botões de filtro/pesquisa

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


const entrada = document.getElementById ('search')
entrada.addEventListener('keyup', filterSearch);

function filterSearch() {
    const allProducts   = JSON.parse(localStorage.getItem('allProducts'))

    let entradaValue = entrada.value;
    let inputBuscar = entradaValue.toLowerCase();
    console.log(inputBuscar)
    const listSearch = allProducts.filter((product) => {
        
        return product.categoria.toLowerCase().includes(inputBuscar) || product.nome.toLowerCase().includes(inputBuscar);
        }
    );
    const createLayout = new CreateLayout(listSearch)
    createLayout.createEachProduct()
}
