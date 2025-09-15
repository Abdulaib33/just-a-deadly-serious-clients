export default function catalogTemplate(catalog) {
    return `
        <h1> Mon catalogue </h1>
        <ul> 
            ${catalog.products.map((product) => product.render()).join(" ")}
        </ul>    
    `
}
