import products from "./DB.js"
import Catalog from "./components/catalog/Catalog.js"





new Catalog({
    elt: "#app",
    products
})