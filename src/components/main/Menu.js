import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../utilities/Navbar";
import Card from "../utilities/Card";

const Menu = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("https://happy-bites.herokuapp.com/foods")
      .then((resp) => setFoods(resp.data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(foods);
  return (
    <>
      <div>
        <header className="showcase-main">
          <Navbar />
          <div className="content">
            <h1 className="content-heading">
              <span id="content-text">Grab a food</span> from our Menu
            </h1>
          </div>
        </header>
        <div style={{ margin: "20px 0 10px 0" }}>
          {foods.map((food, key) => {
            return <Card food={food} key={key} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
