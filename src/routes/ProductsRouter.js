class ProductsRouter {
    static baseUrl = 'https://kenzie-food-api.herokuapp.com'

    static
    async get(id='') {
        return await fetch(`${this.baseUrl}/product/${id}`)
        .then(res => res.json())
        .then(products => products)
        .catch(error => error)
    }
}

export { ProductsRouter }