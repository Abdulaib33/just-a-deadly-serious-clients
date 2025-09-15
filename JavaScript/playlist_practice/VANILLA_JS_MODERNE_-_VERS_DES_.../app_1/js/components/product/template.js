export default function productTemplate(product) {
    return `
        <li class="product"> 
            ${product.name}: ${product.price}€    
        </li>
    `
}