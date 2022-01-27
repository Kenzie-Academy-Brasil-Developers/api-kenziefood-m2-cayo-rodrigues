class CreateLayout {
    constructor(products){
        this.products = products
        this.categories = {
            Frutas: 'src/css/img/Icon_fruits.png',
            Panificadora: 'src/css/img/Icon_bread.png',
            Bebidas: 'src/css/img/Icon_glass of wine.png'
        }
    }
                                                            
    createEachProduct() {
        const list = document.querySelector('ul')
        list.innerHTML = ''                                      
                                                                       
        for(let index = 0; index < this.products.length; index++){
            let currentProduct = this.products[index] 

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

            itemBox.setAttribute('class','li')
            itemBox.setAttribute('id', currentProduct.id)
            name.setAttribute('class','li__name')
            image.setAttribute('class','li__image')
            description.setAttribute('class','li__description')
            category.setAttribute('class','li__category')
            price.setAttribute('class','li__price')
            addToCart.setAttribute('class','li__button')
            icon.setAttribute('class','li__category--icon')

            list.appendChild(itemBox)
             category.appendChild(icon)
            itemBox.append(image,category,name,description,price,addToCart)
           
        }
    }
}

export { CreateLayout }
