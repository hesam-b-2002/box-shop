import { MapedProducts } from "./products/map-products"
import { Cart } from "./pages/cart"
import { Home } from "./pages/home"
import { BrowserRouter,Routes,Route,Link } from "react-router"

function App() {


  return (
    <>
     <BrowserRouter>
        <nav> 
        <Link to={'/cart'}><h1>Cart</h1></Link>
        <Link to={'/map-products'}><h1>products</h1></Link>
        <Link to={'/home'}><h1>Home</h1></Link>
        </nav>
      <Routes>
        <Route path={'/cart'} element={<Cart/>}/>
        <Route path={'/map-products'} element={<MapedProducts/>}/>
        <Route path={'/Home'} element={<Home/>}/>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
