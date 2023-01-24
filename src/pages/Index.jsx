import CardProduct from "../components/CardProduct"
import { getProducts } from "../data/products"

export function loader() {

  // const products = getProducts()
  // console.log(products)
  getProducts()
  return {}
}

function Index() {

    

    return (
      <div className="w-full flex flex-wrap p-3">
          <CardProduct />
      </div>
    )
}

export default Index