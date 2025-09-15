import getTemplate from "./template"

export default class Product{
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.price = data.price
    }

    render() {
        return getTemplate(this)
    }

}