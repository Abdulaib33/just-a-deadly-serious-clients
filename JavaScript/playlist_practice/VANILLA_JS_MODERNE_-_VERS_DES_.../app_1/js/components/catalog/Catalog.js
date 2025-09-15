import getTemplate from "./template.js"
import Product from "../product/Product.js"
export default class Catalog{
    constructor(data) {
        this.domElt = document.querySelector(data.elt)
        this.products = data.products.map((product) => new Product(product)),
        this.render()
    }

    render() {
        this.domElt.innerHTML = getTemplate(this)
    }
}