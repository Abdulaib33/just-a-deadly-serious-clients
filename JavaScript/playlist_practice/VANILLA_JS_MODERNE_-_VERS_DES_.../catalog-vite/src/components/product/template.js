import "./style.css"

export default function template(product) {
    return `

    <li class="product">
        ${product.name}: ${product.price}€
    </li>
    
    `


}