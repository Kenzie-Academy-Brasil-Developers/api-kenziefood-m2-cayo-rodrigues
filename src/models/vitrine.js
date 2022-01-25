class CreateLayout {
    constructor(products){
        this.products = products
    }

    createEachProduct() {

        for(let index = 0; index < this.products.length; index++){
            let currentProduct = this.products[index]

            //pega cada item
            const itemBox         = document.createElement('li')
            const name            = document.createElement('h2')
            const image           = document.createElement('img')
            const description     = document.createElement('p')
            const category        = document.createElement('span')
            const price           = document.createElement('span')
            const addToCart       = document.createElement('button')
            const list            = document.querySelector('ul')

            //setta conteudo
            name.innerText        = currentProduct.nome
            image.src             = currentProduct.imagem
            description.innerText = currentProduct.descricao
            category.innerText    = currentProduct.categoria
            price.innerText       = currentProduct.preco
            addToCart.innerText   = 'Add'

            //setta atributos
            itemBox.setAttribute('class','li')
            name.setAttribute('class','li__name')
            image.setAttribute('class','li__image')
            description.setAttribute('class','li__description')
            category.setAttribute('class','li_category')
            price.setAttribute('class','li__price')
            addToCart.setAttribute('class','li__button')

            //setta pais e filhos
            list.appendChild(itemBox)
            itemBox.append(name,image,description,category,price,addToCart)
        }
    }
}

export { CreateLayout }