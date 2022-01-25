import { CreateLayout } from "./models/vitrine.js"
import { ProductsRouter } from "./routes/ProductsRouter.js"

// roda assim que a página carrega
async function starter() {
    // pegar produtos da api
    const products    = await ProductsRouter.get()
    const ownProducts = await ProductsRouter.getOwnProducts()
    const allProducts = [...products, ...ownProducts]

    // armazenar produtos para evitar fazer muitas requisições
    localStorage.setItem('allProducts', JSON.stringify(allProducts))

    // listar produtos na vitrine
    const createLayout = new CreateLayout(allProducts)
    createLayout.createEachProduct()

    // identificar clicks nos produtos e passar pro carrinho
    const showcase = document.querySelector('#fullBox--showcase')
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