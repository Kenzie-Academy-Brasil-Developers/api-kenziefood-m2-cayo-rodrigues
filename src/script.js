import { CreateLayout } from "./models/vitrine.js"
import { ProductsRouter } from "./routes/ProductsRouter.js"

// roda assim que a página carrega
async function starter() {
    const allProducts = await ProductsRouter.get()
    localStorage.setItem('allProducts', JSON.stringify(allProducts))

    const createLayout = new CreateLayout(allProducts)
    createLayout.createEachProduct()
}
starter()

// identificar click no produto e passar pro carrinho
const showcase = document.querySelector('#fullBox--showcase')
showcase.onclick = (event) => {
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