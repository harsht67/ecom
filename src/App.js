import './App.scss'
import { Header, ProductPage } from './features'
import CartContextProvider from './Context'

function App() {

  return (
    <div>
      <CartContextProvider>
      
        <Header/>

        <main>
  
          <ProductPage/>
  
        </main>

      </CartContextProvider>
    </div>
  )
}

export default App
