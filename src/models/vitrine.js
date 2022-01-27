class CreateLayout {
    constructor(){
        this.categories = {
            Frutas: 'src/css/img/Icon_fruits.png',
            Panificadora: 'src/css/img/Icon_bread.png',
            Bebidas: 'src/css/img/Icon_glass of wine.png'
        }
    }

    createEachProduct(products) {
        const list = document.querySelector('ul')
        list.innerHTML = ''

        for(let index = 0; index < products.length; index++){
            let currentProduct = products[index]

            const itemBox         = document.createElement('li')
            const name            = document.createElement('h2')
            const image           = document.createElement('img')
            const description     = document.createElement('p')
            const category        = document.createElement('p')
            const price           = document.createElement('p')
            const addToCart       = document.createElement('button')
            const icon            = document.createElement('img')

            let priceProduct = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currentProduct.preco)

            icon.src              = this.categories[currentProduct.categoria]
            name.innerText        = currentProduct.nome
            image.src             = currentProduct.imagem
            description.innerText = currentProduct.descricao
            category.innerText    = currentProduct.categoria
            price.innerText       = priceProduct
            addToCart.innerHTML   = '<i class="fas fa-cart-plus"></i>'

            itemBox.setAttribute('class','card')
            itemBox.setAttribute('id', currentProduct.id)
            name.setAttribute('class','card__name')
            image.setAttribute('class','card__image')
            description.setAttribute('class','card__description')
            category.setAttribute('class','card__category')
            price.setAttribute('class','card__price')
            addToCart.setAttribute('class','card__button')
            icon.setAttribute('class','card__category--icon')

            list.appendChild(itemBox)
            category.appendChild(icon)
            itemBox.append(image,category,name,description,price,addToCart)

        }
    }
}

export { CreateLayout }
