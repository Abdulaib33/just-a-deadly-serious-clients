import products from "./DB"
import Catalog from "./components/catalog/Catalog"


new Catalog({
  elt: "#app",
  products
})