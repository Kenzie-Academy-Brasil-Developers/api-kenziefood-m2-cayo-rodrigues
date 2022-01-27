
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
        const cartInfo  = document.getElementById('shopKart__info')

        cartInfo.innerHTML = ''
        cartInfo.classList.remove('shopKart__info')

        const itemsAmount = document.querySelector('.fullBox--shopKart__itemAmount')
        const totalPrice = document.querySelector('.fullBox--shopKart__priceTotal')

        itemsAmount.classList.remove('hidden')
        totalPrice.classList.remove('hidden')

        item.setAttribute('id',currentProduct.id)
        item.setAttribute('class', 'cart__item')
        image.setAttribute('class','cart__image')
        middleCol.setAttribute('class', 'cart__middleCol')
        title.setAttribute('class','cart__title')
        category.setAttribute('class','cart__category')
        price.setAttribute('class','cart__price')
        remove.setAttribute('id', 'cart__remove')
        remove.setAttribute('class','cart__remove')

        let priceProduct = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currentProduct.preco)
       
        image.src          = currentProduct.imagem
        title.innerText    = currentProduct.nome
        category.innerText = currentProduct.categoria
        price.innerText    = priceProduct
        remove.innerHTML   = '<i class="fas fa-trash"></i>'

        const firstChild = list.firstChild
        list.insertBefore(item, firstChild)
        middleCol.append(title, category, price)
        item.append(image, middleCol, remove)

    }

    removeItem(productId, cartItem) {
        cartItem.remove()

        let indexProduct = this.products.findIndex(currentProduct => {
            return currentProduct.id == productId
        })

        this.products.splice(indexProduct,1)

        this.itemAmount()
        this.priceAmount()

        const cartInfo  = document.getElementById('shopKart__info')
        const list      = document.getElementById('fullBox--shopKart__list')

        if(list.childElementCount === 0){
            cartInfo.innerHTML = "<img src='src/css/img/shopping-bag.png'><h1>Ops!</h1><p>Por enquanto não temos produtos no carrinho</p>"
            cartInfo.classList.add('shopKart__info')

            const itemsAmount = document.querySelector('.fullBox--shopKart__itemAmount')
            const totalPrice = document.querySelector('.fullBox--shopKart__priceTotal')

            itemsAmount.classList.add('hidden')
            totalPrice.classList.add('hidden')
        }
    }
}

export { CreateCart }