import { useState, useEffect} from "react"
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { db } from "./data/db"

function App() {
  // const [auth, setAuth] = useState(false)
  //state
  // const [auth,setAuth] = useState(true)
  // const [total,setTotal] = useState(0)
  // const [Cart, setCart] = useState([])

  /*###### Esta porcion de código no se debe usar en los stat e####
  // if(auth){
  //   const [Cart, setCart] = useState([])
  // }

  // setTimeout(() => {
  //   setAuth(false)
  // },3000)
  ##############################################################*/

  //useEffect
  // useEffect(() => {
  //   console.log('Componente listo o escuchando por auth')
  // },[auth])// si el arreglo lo dejo vacio, este código se ejecuta una sola vez, y cuando el componente este listo
  
  // setTimeout(() => {
  //   setAuth(true)
  // }, 3000);
  
  //const [data, setData] = useState(db) si se puede hacer asi, porque es un archivo local
  //La siguiente es la recomendad para trabajar con API, porque no sabemos cuando va a traer
  //la información
  //################################################
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   setData(db)
  // },[])

  /*###################################
  Los Statements en JS: Una app de JS, es una serie de statements, cada statements es una 
  instrucción para hacer algo.
  -creacion de varaibles
  -Codigo condicionales con if
  -Lanzar errores con throw new Error()
  -Ciclos con for, while
  ####################################
  Expressions en JS: Una expresión es algo que produce un valor
  Algunas expresines son:
  -Ternarios
  -Utilizar un Array Method que genere un nuevo Array
  .map que genera un nuevo array a diferencia del forEach
  ####################################*/

  const [data,setData] = useState(db)
  const [cart,setCart] = useState([])
  const MAX_ITEMS = 5
  const MIN_ITEMS = 1

  function addToCart(item){
    const itemExists = cart.findIndex(guitar => guitar.id === item.id)
    if(itemExists >= 0){
      const updateCart = [...cart]
      updateCart[itemExists].quantity++
      setCart(updateCart)
    }else{
      item.quantity = 1
      setCart(prevCart => [...cart, item])
    }
    
    
  }

  function removeFromCart(id) {
    setCart(prevertCart => prevertCart.filter(guitar => guitar.id !== id))
  }

  function increaseQuantity(id){
    const updatedCart = cart.map( item => {
      if(item.id === id && item.quantity < MAX_ITEMS){
        return  {         
        ...item,
        quantity: item.quantity + 1
        }
      }
    return item
  })
    setCart(updatedCart)
  }

  function decreaseQuantity(id){
    const updatedCart = cart.map( item => {
      if(item.id === id && item.quantity > MIN_ITEMS){
        return{
        ...item,
        quantity: item.quantity - 1
        }
      }
        return item
    })
    setCart(updatedCart)   

  }

  return (
    <>
    <Header 
     cart = {cart}
     removeFromCart = {removeFromCart }
     increaseQuantity = {increaseQuantity}
     decreaseQuantity={decreaseQuantity}
    />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          { data.map((guitar) => (
            <Guitar
              key = {guitar.id}
              guitar = {guitar}
              setCart = {setCart}
              addToCart={addToCart}
            />
          ))}
        
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
