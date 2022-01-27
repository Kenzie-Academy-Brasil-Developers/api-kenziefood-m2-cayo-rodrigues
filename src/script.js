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

    const filterButtons = document.querySelectorAll('.filters__button')
    filterButtons.forEach(button => button.onclick = handleClickOnFilters)
}
starter()

function handleClickOnProduct(event) {
    const target = event.target

    if (target.classList.contains('li__button') || target.tagName === 'I') {
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

function handleClickOnFilters(event) {
    const button        = event.currentTarget
    const category      = button.dataset.category
    const allProducts   = JSON.parse(localStorage.getItem('allProducts'))
    let filteredList    = allProducts

    if (category !== 'Todos') {
        filteredList = allProducts.filter(product => {
            return product.categoria === category
        })
    }
    const createLayout = new CreateLayout(filteredList)
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
