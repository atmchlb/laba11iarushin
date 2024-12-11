import './App.css';
import Pizzacard from './components/Pizzacard';
import img from './components/images/Pizzacard_images/pepperoni.jpg';
function App() {
  return (
    <div className="App">
      <Pizzacard pizza_image = {img} alt = "Пепперони" pizzaname = "Пепперони" pizza_description = "Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла" mark = "Хит сезона!"></Pizzacard>
    </div>
  );
}

export default App;
