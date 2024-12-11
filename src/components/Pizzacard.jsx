import React, { useState } from "react";
import './Pizzacard.css';

function Pizzacard(props) {
    const [counter, setCounter] = useState(0);
    const [selectedSize, setSelectedSize] = useState("");

    const prices = {
        small: 550,
        medium: 700,
        big: 900,
    };

    function increment() {
        setCounter(prev => prev + 1);
    }

    function decrement() {
        setCounter(prev => Math.max(prev - 1, 0));
    }

    function handleSizeChange(event) {
        setSelectedSize(event.target.value);
    }

    const calculatedPrice = 
        counter > 0 && selectedSize 
            ? `${counter * prices[selectedSize]}₽` 
            : "от 550₽";

    return (
        <div className="div-Pizzacard">
            <div className="image-container-pizzacard">
                <img className="img-Pizzacard" src={props.pizza_image} alt={props.alt}></img>
                <span className="mark-Pizzacard">{props.mark}</span>
            </div>

            <h3 className="h3-Pizzacard">{props.pizzaname}</h3>
            <p className="p-Pizzacard">{props.pizza_description}</p>
            <select 
                name="size" 
                id="pizza-size-select" 
                className="size-select-Pizzacard" 
                onChange={handleSizeChange}
            >
                <option value="">Диаметр</option>
                <option value="small">Маленькая(25см)</option>
                <option value="medium">Средняя(30см)</option>
                <option value="big">Большая(35см)</option>
            </select>
            <p className="price-display-Pizzacard">{calculatedPrice}</p>
            <div className="pizza-count-Pizzacard">
                <button 
                    onClick={decrement} 
                    className="minus-button-Pizzacard" 
                    disabled={counter <= 0}
                >
                    -
                </button>                
                <span className="counter-show-Pizzacard">{counter}</span>
                <button 
                onClick={increment} 
                className="plus-button-Pizzacard" disabled={counter === 99}>+</button>
                <button className="add-to-cart-Pizzacard">
                </button>
            </div>
        </div>
    );
}

export default Pizzacard;