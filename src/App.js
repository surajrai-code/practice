
import { useSelector } from 'react-redux';
import './App.css';
import CartButton from './components/CartButton';
import Header from './components/Header';
function App() {
const showCart=useSelector(state=>state.ui.cartIsVisible)
  return (
    <div className="App">
    <Header/>
      {showCart && <CartButton/>}
    </div>
  );
}

export default App;
