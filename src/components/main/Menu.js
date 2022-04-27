import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../utilities/Navbar";
import Card from "../utilities/Card";

import "../css/Menu.css";

import cart from "../../img/cart.png";
const Menu = () => {
  const [foods, setFoods] = useState([]);

  const [count, setCount] = useState(0);
  const [item, setItem] = useState([]);
  const [amount, setAmount] = useState(0);

  // add food to the selected item
  const addFood = (food) => {
    setCount(count + 1);
    setAmount(amount + food.price);
    setItem([...item, food]);
  };

  // remove food from the selected item
  const removeFood = (food) => {
    if (item.length !== 0) {
      setCount(count - 1);
      setAmount(amount - food.price);
      setItem((prevState) => {
        const newItem = [...prevState].filter((item) => item._id !== food._id);

        const dishItem = [...prevState].filter((item) => item._id === food._id);
        dishItem.pop();

        return newItem.concat(...dishItem);
      });
    } else {
      return;
    }
  };

  useEffect(() => {
    axios
      .get("https://happy-bites.herokuapp.com/foods")
      .then((resp) => setFoods(resp.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <header className="showcase-main">
          <Navbar cart={true} />
          <div className="content">
            <h1 className="content-heading">
              <span id="content-text">Grab a food</span> from our Menu
            </h1>
          </div>
        </header>
        <div className="menu-container">
          <div className="food-card-container">
            {foods.map((food, key) => {
              return (
                <Card
                  food={food}
                  key={key}
                  addFood={addFood}
                  removeFood={removeFood}
                />
              );
            })}
          </div>
          <div>
            <div className="cart-card">
              {item.length === 0 ? (
                <>
                  <p className="cart-title">Cart Empty</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={cart} alt="cart" className="cart-img"></img>
                  </div>
                  <p className="cart-text">
                    Good food is always cooking! Go ahead, order some yummy
                    items from the menu.
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
