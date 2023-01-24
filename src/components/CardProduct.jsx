import { Link } from 'react-router-dom'

function CardProduct({product}) {
  return (
    <div className="rounded p-2 bg-white border mb-2 flex flex-wrap align-items-center w-full align-items-center">
        <div className="w-1/4">
            
        </div>
        <div className="w-1/2">
            <p className="font-bold text-xl">Product Name</p>
            <p className="m-0">45$ <span className="text-sm">48$</span></p>
        </div>
        <div className="w-1/4">
            <Link to="/" className="rounded p-2 bg-green-400">accion</Link>
        </div>
    </div>
  )
}

export default CardProduct