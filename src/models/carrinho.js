


class CreateCart {
    constructor({products}){
        this.products = products
    }

    createItem(){
        const addToCart = document.getElementsByClassName('li__button')
        addToCart.addEventListener('click', function(){
            for(let index = 0; index < this.products.length; index++){
                let currentProduct = this.products[index]

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
        })
    }

    removeItem() {
        const remove = document.getElementsByClassName('cart__remove')
        remove.addEventListener('click', function(){
            remove.parentElement.innerHTML = ''
        })
    }
}