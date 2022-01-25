import { ProductsRouter } from "./routes/ProductsRouter.js"

// roda assim que a página carrega
async function starter() {
    const allProducts = await ProductsRouter.get()
    localStorage.setItem('allProducts', JSON.stringify(allProducts))
}
starter()