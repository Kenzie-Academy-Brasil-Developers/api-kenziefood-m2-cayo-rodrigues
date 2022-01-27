import { ProductsRouter } from "./routes/ProductsRouter.js"

console.log('oi')
document.querySelector('form').onsubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    console.log(form.elements)

    const userInputs = {}
    for (let input of form.elements) {
        if (input.name) {
            userInputs[input.name] = input.value
        }
    }
    console.log(userInputs)
    console.log(await ProductsRouter.postOwnProduct(userInputs))
}