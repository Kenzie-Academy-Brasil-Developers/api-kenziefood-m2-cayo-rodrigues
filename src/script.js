import { CreateCart } from "./models/carrinho.js"
import { CreateLayout } from "./models/vitrine.js"
import { ProductsRouter } from "./routes/ProductsRouter.js"

const cart = new CreateCart()
const showcase = new CreateLayout()

async function starter() {
    const products    = await ProductsRouter.get()
    const ownProducts = await ProductsRouter.getOwnProducts()
    const allProducts = [...products, ...ownProducts]

    localStorage.setItem('allProducts', JSON.stringify(allProducts))

    showcase.createEachProduct(allProducts)

    const showcaseContainer = document.querySelector('#showcase')
    showcaseContainer.onclick = handleClickOnProduct

    const cartContainer = document.querySelector('#shopKart')
    cartContainer.onclick = handleClickOnCart

    const filterButtons = document.querySelectorAll('.filters__button')
    filterButtons.forEach(button => button.onclick = handleClickOnFilters)
}
starter()

function handleClickOnProduct(event) {
    const target = event.target

    if (target.classList.contains('card__button') || target.tagName === 'I') {
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
    showcase.createEachProduct(filteredList)
}

const searchInput = document.getElementById ('search')
searchInput.addEventListener('keyup', filterSearch)

function filterSearch() {
    const allProducts = JSON.parse(localStorage.getItem('allProducts'))

    let inputValue    = searchInput.value
    let inputBuscar   = inputValue.toLowerCase().trim()

    const listSearch  = allProducts.filter((product) => {
        return product.categoria.toLowerCase().trim().includes(inputBuscar)
            || product.nome.toLowerCase().trim().includes(inputBuscar)
    })
    showcase.createEachProduct(listSearch)
}
