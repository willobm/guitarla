export default function Guitar({guitar, addToCart}) {
const {id, name, image, description,price} = guitar

//El siguiente código no es necesario definirlo sino en la misma linea de su uso en lugar 
// onClick={() => handleClick(guitar)} lo dejaremos onClick={() => setCart([...cart, guitar])} =>L24
// o una forma mas reducida sin exportar "cart", solo usamos la siguiente línea 
// onClick={() => setCart(prevCart =>[...prevCart, guitar])} en L24, porque setCart ya tiene cart por def.
// const handleClick = (guitar) => {
//     setCart([...cart,guitar])
// }

    return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
        <div className="col-4">
            <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
        </div>
        <div className="col-8">
            <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
            <p>{description}</p>
            <p className="fw-black text-primary fs-3">${price}</p>
            <button 
                type="button"
                className="btn btn-dark w-100"
                onClick={() => addToCart(guitar)}
            >Agregar al Carrito</button>
        </div>
    </div>
    )
     
}