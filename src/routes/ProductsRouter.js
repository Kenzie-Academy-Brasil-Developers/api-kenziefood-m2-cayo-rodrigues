class ProductsRouter {
    static baseUrl  = 'https://kenzie-food-api.herokuapp.com'
    static token    = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImlhdCI6MTY0MzExNzgwMywiZXhwIjoxNjQzOTgxODAzLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.W6gaI05R-6x2sIR09GWfR9L2juHP2KktvKrDgSq_Bt8'

    // GET PRODUTO/PRODUTOS (PADRÃO)
    static
    async get(id='') {
        return await fetch(`${this.baseUrl}/product/${id}`)
        .then(res => res.json())
        .then(products => products)
        .catch(error => error)
    }

    // GET PRODUTO/PRODUTOS QUE VOCÊ ADICIONOU (EXTRA)
    static
    async getOwnProducts(id='') {
        return await fetch(`${this.baseUrl}/my/product/${id}`, {
            headers: { 'Authorization': `Token ${this.token}` }
        })
        .then(res => res.json())
        .then(products => products)
        .catch(error => error)
    }

    // POST NOVO PRODUTO (EXTRA)
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

    // ATUALIZAR PRODUTO QUE VOCÊ ADICIONOU (EXTRA)
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

    // DELETAR PRODUTO QUE VOCÊ ADICIONOU (EXTRA)
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