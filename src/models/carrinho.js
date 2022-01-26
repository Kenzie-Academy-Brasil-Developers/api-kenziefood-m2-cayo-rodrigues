
class CreateCart {
    constructor(){
        this.products = []
        this.price = 0
    }

    itemAmount() {
        const amount = document.getElementById('fullBox--shopKart__itemAmount')
        amount.innerText = this.products.length   
        return amount
    }
    priceAmount() {
        let count = 0;
        const totalPrice = document.getElementById('fullBox--shopKart__priceTotal')

        for(let i = 0; i < this.products.length; i ++){
            count += this.products[i].preco 
        }

        let priceReturn = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(count)         
        totalPrice.innerText = priceReturn
        this.price = count
    }

    createItem(product){
        this.itemAmount()
        this.priceAmount()
                
        let currentProduct = product
        this.products.push(product)

        const image     = document.createElement('img')
        const title     = document.createElement('h2')
        const category  = document.createElement('span')
        const price     = document.createElement('h3')
        const remove    = document.createElement('span')
        const item      = document.createElement('li')
        const list      = document.getElementById('fullBox--shopKart__list')

        image.setAttribute('class','cart__image')
        title.setAttribute('class','cart__title')
        category.setAttribute('class','cart__category')
        price.setAttribute('class','cart__price')
        remove.setAttribute('class','cart__remove')

        image.src          = currentProduct.imagem
        title.innerText    = currentProduct.nome
        category.innerText = currentProduct.categoria
        price.innerText    = currentProduct.preco
        remove.innerText   = 'x'

        list.appendChild(item)
        item.append(image,title,category,price,remove)
    }

    removeItem() {
        this.itemAmount()
        this.priceAmount()

        const remove = document.getElementsByClassName('cart__remove')
        remove.addEventListener('click', function(){
            remove.parentElement.innerHTML = ''
            this.products
        })
    }
}

export { CreateCart }