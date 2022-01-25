class ProductsRouter {
    static baseUrl  = 'https://kenzie-food-api.herokuapp.com'
    static token    = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImlhdCI6MTY0MzExNzgwMywiZXhwIjoxNjQzOTgxODAzLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.W6gaI05R-6x2sIR09GWfR9L2juHP2KktvKrDgSq_Bt8'

    static
    async get(id='') {
        return await fetch(`${this.baseUrl}/product/${id}`)
        .then(res => res.json())
        .then(products => products)
        .catch(error => error)
    }

    static
    async getOwnProducts(id='') {
        return await fetch(`${this.baseUrl}/my/product/${id}`, {
            headers: { Authorization: `Token ${this.token}` }
        })
        .then(res => res.json())
        .then(products => products)
        .catch(error => error)
    }
}

export { ProductsRouter }