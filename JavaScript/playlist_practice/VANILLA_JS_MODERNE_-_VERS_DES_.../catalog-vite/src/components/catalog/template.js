import "./style.css"

export default function template (catalog) {
    return `
        <h1>Mon catalog en vite js</h1>
        <ul class="catalog">
            ${catalog.products.map((product) => product.render()).join(" ")}
        </ul>
    `
}