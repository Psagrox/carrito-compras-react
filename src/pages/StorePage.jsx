import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Swal from "sweetalert2"

export const StorePage = () => {

  const { shoppingList, removeProduct, increment, decrease } = useContext(CartContext)

  const calculateTotal = () => {
    return shoppingList.reduce( (total, product) => total + product.price * product.quantity, 0).toFixed(2)
  }

  const handlePurchase = () => {
    const productPurchased = shoppingList.map( product => `${product.title} x  ${product.quantity}`).join('\n')
    Swal.fire({
      icon: 'success',
      title: 'La compra se ha realizado con éxito',
      html: `<p> Compraste: </p> <pre>${productPurchased}</pre>`
    })
  }


  return (
    <>

  <table className="table">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Eliminar</th>
      </tr>
    </thead>
    <tbody>
      {shoppingList.map( product => (

        <tr key={product.id}>
        <th>{product.title}</th>
        <td>{product.price}</td>
        <td>
          <button 
          className="btn btn-outline"
          onClick={() => decrease(product.id)}
          >-</button>
          <button 
          className="btn btn-primary"
          > {product.quantity}</button>
          <button 
          className="btn btn-outline"
          onClick={() => increment(product.id)}
          >+</button>
          </td>
        <td>
          <button 
          className="btn btn-danger"
          onClick={ () => removeProduct(product.id)}
          >Eliminar</button>
        </td>
        </tr>

      ))}

      <tr>
      <th><b>Total: </b></th>
      <td></td>
      <td></td>
      <td>${calculateTotal()}</td>
      </tr>

    </tbody>
  </table>


  <div className="d-grip gap-2">
  <button 
  type="button" 
  className="btn btn-primary btn-lg"
  onClick={handlePurchase}
  >Comprar</button>
  </div>
    </>
  )
}
