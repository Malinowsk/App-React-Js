import { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const CustomProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)

    const agregarProducto = (product) => {
        if (estaEnCarrito(product.id)){
            let objExist = carrito.find((prod) =>{
                return (
                    (prod.id === product.id)
                )})
            objExist.amount= objExist.amount + product.amount
            setCarrito([...carrito])
        }
        else
        {
            const nuevoEstado = [...carrito]
            nuevoEstado.push(product)
            setCarrito(nuevoEstado)
        }
        setTotal(total + (product.price * product.amount))
        setCantidad(cantidad + product.amount)
    }

     const eliminarProducto = (id) => {
        const nuevoEstado = carrito.filter(item =>  item.id !== id )
        const objRemove = carrito.find(item =>  item.id === id )
        setCarrito(nuevoEstado)
        setCantidad(cantidad - objRemove.amount)
        setTotal(total - (objRemove.price * objRemove.amount))

      }

     const vaciarCarrito = () => { 
         setCarrito([])
         setTotal(0)
         setCantidad(0)
     }

     const estaEnCarrito = (id) => {
         
        return carrito.some(prod => (
            (prod.id === id)
            ))
     }

    
    const valorDelContexto = {
        carrito,
        total,
        cantidad,
        agregarProducto,
        vaciarCarrito,
        eliminarProducto
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider