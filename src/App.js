import './App.css';
import CartList from './containers/CartList';
import GoodsList from './containers/GoodsList'

function App() {
  return (
    <div className="container">
      <GoodsList />
      <CartList />
    </div>
  );
}

export default App;
