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
            headers: { 'Authorization': `Token ${this.token}` }
        })
        .then(res => res.json())
        .then(products => products)
        .catch(error => error)
    }

    static
    async postOwnProduct(data) {
        return await fetch(`${this.baseUrl}/my/product`, {
            headers: {
                'Authorization': `Token ${this.token}`,
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(newProduct => newProduct)
        .catch(error => error)
    }

    static
    async updateOwnProduct(id, data) {
        return await fetch(`${this.baseUrl}/my/product/${id}`, {
            headers: {
                'Authorization': `Token ${this.token}`,
                'Content-Type': 'application/json'
            },
            method: 'patch',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(updatedProduct => updatedProduct)
        .catch(error => error)
    }

    static
    async deleteOwnProduct(id) {
        return await fetch(`${this.baseUrl}/my/product/${id}`, {
            headers: { 'Authorization': `Token ${this.token}` },
            method: 'delete'
        })
        .catch(error => error)
    }
}

export { ProductsRouter }