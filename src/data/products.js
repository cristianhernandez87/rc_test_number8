export async function getProducts() {
    const response = await fetch(import.meta.env.VITE_API_PRODUCTS)
    const result = await response.json()
    console.log(result)
    return result
}