//nome, foto, descrição, imagem, categoria com ícone e preço

const assembledProducts = []

class CreateLayout {
    constructor(products){
        this.products = products
    }
    createEachProduct() {
        for(let index = 0; index < this.products.length; index++){
            let currentProduct = this.products[index]

            //pega cada item
            const itemBox         = document.createElement
            const name            = document.createElement
            const image           = document.createElement
            const description     = document.createElement
            const category        = document.createElement
            const icon            = document.createElement
            const price           = document.createElement
            const list            = document.getElementById

            //setta conteudo 
            name.innerText        = currentProduct.name
            image.src             = currentProduct.image
            description.innerText = currentProduct.description
            category.innerText    = currentProduct.category
            icon.src              = currentProduct.icon
            price.innerText       = currentProduct.price
            
            //setta atributos
            itemBox.setAttribute('class','li')
            name.setAttribute('class','li__name')
            image.setAttribute('class','li__image')
            description.setAttribute('class','li__description')
            category.setAttribute('class','li_category')
            icon.setAttribute('class','li__icon')
            price.setAttribute('class','li__price')
            
            //setta pais e filhos
            list.appendChild(itemBox)
            itemBox.appendChild(name)
            itemBox.appendChild(image)
            itemBox.appendChild(description)
            itemBox.appendChild(category)
            itemBox.appendChild(icon)
            itemBox.appendChild(price)

            //push em assembled products            
            assembledProducts.push({
                itemBox     : itemBox,
                name        : name,
                image       : image,
                description : description,
                category    : category,
                icon        : icon,
                price       : price
            })
        }
    }
}