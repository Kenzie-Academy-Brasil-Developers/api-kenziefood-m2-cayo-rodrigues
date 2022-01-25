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