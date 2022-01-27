import { ProductsRouter } from "./routes/ProductsRouter.js"

document.querySelector('form').onsubmit = (event) => {
    event.preventDefault()
    const form = event.target

    const userInputs = {}
    for (let input of form.elements) {
        if (input.name) {
            userInputs[input.name] = input.value
        }
    }
    ProductsRouter.postOwnProduct(userInputs)
}