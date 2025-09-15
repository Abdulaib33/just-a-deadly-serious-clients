import getTemplate from "./template"
import Product from "../product/Product"



export default class Catalog{
    constructor(data) {
        this.domElt = document.querySelector(data.elt)
        this.products = data.products.map((product) => new Product(product))
        this.render()
    }

    render() {
        this.domElt.innerHTML = getTemplate(this)
    }
}