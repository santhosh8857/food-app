import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../utilities/Navbar";
import Card from "../utilities/Card";
import cart from "../../img/cart.png";

import "../css/Menu.css";

const Menu = () => {
  const [foods, setFoods] = useState([]);

  const [count, setCount] = useState(0);
  const [item, setItem] = useState([]);
  const [amount, setAmount] = useState(0);

  const [orderedFood, setOrderedFood] = useState([]);

  const navigate = useNavigate();

  // const [foodCount, setFoodCount] = useState({});
  let foodCount = {};

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

  const checkout = () => {
    axios
      .post("https://happy-bites.herokuapp.com/foods/add-order", {
        item: orderedFood,
        amount: amount,
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));

    navigate("/order");
  };

  useEffect(() => {
    axios
      .get("https://happy-bites.herokuapp.com/foods")
      .then((resp) => setFoods(resp.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setOrderedFood(Object.entries(foodCount));
  }, [count, foodCount]);

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
            <div
              className="cart-card"
              style={
                item.length !== 0
                  ? { border: "2px solid #f7c08a", borderRadius: "5px" }
                  : null
              }
            >
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
                <>
                  <p className="cart-title">Cart</p>
                  <p>{count} ITEM</p>
                  {item.map((food, key) => {
                    foodCount[food.name] = (foodCount[food.name] || 0) + 1;
                  })}
                  {orderedFood.map((food, key) => {
                    return (
                      <p className="cart-item" key={key}>
                        {food[0]} ({food[1]})
                      </p>
                    );
                  })}
                  <p>Subtotal : &#8377; {amount}</p>
                  <button className="btn btn-add" onClick={checkout}>
                    CHECKOUT &nbsp;
                    <i class="fa-solid fa-circle-chevron-right"></i>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
