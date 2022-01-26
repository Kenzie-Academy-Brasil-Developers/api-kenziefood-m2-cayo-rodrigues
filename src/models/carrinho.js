
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
        let currentProduct = product
        this.products.push(product)

        this.itemAmount()
        this.priceAmount()

        const image     = document.createElement('img')
        const middleCol = document.createElement('div')
        const title     = document.createElement('h2')
        const category  = document.createElement('span')
        const price     = document.createElement('h3')
        const remove    = document.createElement('div')
        const item      = document.createElement('li')
        const list      = document.getElementById('fullBox--shopKart__list')


        item.setAttribute('id',currentProduct.id)
        item.setAttribute('class', 'cart__item')
        image.setAttribute('class','cart__image')
        middleCol.setAttribute('class', 'cart__middleCol')
        title.setAttribute('class','cart__title')
        category.setAttribute('class','cart__category')
        price.setAttribute('class','cart__price')
        remove.setAttribute('class','cart__remove')

        image.src          = currentProduct.imagem
        title.innerText    = currentProduct.nome
        category.innerText = currentProduct.categoria
        price.innerText    = currentProduct.preco
        remove.innerHTML   = '<i class="fas fa-trash"></i>'


        const firstChild = list.firstChild
        list.insertBefore(item, firstChild)
        middleCol.append(title, category, price)
        item.append(image, middleCol, remove)

    }

    removeItem(productId) {
        this.itemAmount()
        this.priceAmount()

        const remove = document.getElementsByClassName('cart__remove')
        remove.parentElement.innerHTML = ''

       let indexProduct = this.products.findIndex(currentProduct => {
           return currentProduct.id == productId
       })

       this.products.splice(indexProduct,1)

    }
}

export { CreateCart }