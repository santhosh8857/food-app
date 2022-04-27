import { useEffect, useState } from "react";
// import axios from "axios";

import Navbar from "../utilities/Navbar";

const Menu = () => {
  const [foods, setFood] = useState([]);

  // useEffect(()=>{
  //   axios.get('')
  // },[])

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
      </div>
    </>
  );
};

export default Menu;
