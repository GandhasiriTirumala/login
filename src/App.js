import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Login from './components/Login'
import Products from './components/Products'

function App() {
    return (
     <div >
        <BrowserRouter >
          <Navigation / >
            <Routes >
                <Route path = "/"element = { < Home / > } /> 
                <Route path = "/login"element = { < Login / > }/>
                <Route path = "/products"element = { < Products / > }/>
            </Routes>
        </BrowserRouter>  <
        /div>
    )
}
export default App