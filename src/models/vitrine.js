class CreateLayout {
    constructor(products){
        this.products = products
    }
                                                                        //fiz pequenas mudanças no código para organizar o layout
    createEachProduct() {
        const list = document.querySelector('ul')
        list.innerHTML = ''                                      //como os spans para p, a ordem dos itens lá no itemBox.append
                                                                        //e a correção de um ou outro typo
        for(let index = 0; index < this.products.length; index++){
            let currentProduct = this.products[index]

            //pega cada item
            const itemBox         = document.createElement('li')
            const name            = document.createElement('h2')
            const image           = document.createElement('img')
            const description     = document.createElement('p')
            const category        = document.createElement('p')
            const price           = document.createElement('p')
            const addToCart       = document.createElement('button')

            //setta conteudo
            name.innerText        = currentProduct.nome
            image.src             = currentProduct.imagem
            description.innerText = currentProduct.descricao
            category.innerText    = currentProduct.categoria /* icone categorias */
            price.innerText       = currentProduct.preco /* sifrão e virgulas */
            addToCart.innerText   = ''/*colocar icone carrinho*/

            //setta atributos
            itemBox.setAttribute('class','li')
            itemBox.setAttribute('id', currentProduct.id)
            name.setAttribute('class','li__name')
            image.setAttribute('class','li__image')
            description.setAttribute('class','li__description')
            category.setAttribute('class','li__category')
            price.setAttribute('class','li__price')
            addToCart.setAttribute('class','li__button')

            //setta pais e filhos
            list.appendChild(itemBox)
            itemBox.append(image,category,name,description,price,addToCart)
        }
    }
}

export { CreateLayout }