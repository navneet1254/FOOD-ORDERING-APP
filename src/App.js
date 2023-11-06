import "./assets/css/styles.css";
import "./assets/css/box.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Items from "./Items";
import Cart from "./components/Cart";
import {useState} from "react";
import Login from "./components/Login";


function App() {
    // Basket
    const [basket, setBasket] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
      setSearchQuery(query);
    };
    const filteredDishes = Items.filter((dish) =>
    dish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
    // Add to basket
    const addItem = (pizza) => {
        // Check if the item exist or not
        const exist = basket.find((item) => item.id === pizza.id);
        if (exist) {
            setBasket(basket.map(item => item.id === pizza.id ? {...exist, qty: exist.qty + 1} : item));
        } else {
            setBasket([...basket, {...pizza, qty: 1}]);
        }
    };

    // Remove from basket
    const removeItem = (pizza) => {
        // Check if the item exist or not
        const exist = basket.find((item) => item.id === pizza.id);
        if (exist.qty === 1) {
            setBasket(basket.filter((item) => item.id !== pizza.id));
        } else {
            setBasket(basket.map(item => item.id === pizza.id ? {...exist, qty: exist.qty - 1} : item));
        }
    };

    return (
        <div className="App">
            <div>
                <Header name="Pizza Express" basket={basket.length}  menu={Items} addItem={addItem} handleSearch={handleSearch}/>
                <Menu name="Pizzas" desc="Tasty pizzas made with fresh ingredients" menu={filteredDishes} addItem={addItem}/>
                <Cart items={basket} remove={removeItem}/>
                <Login items={basket} remove={removeItem}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
