import "../css/foodcard.css";

const Card = ({ food }) => {
  return (
    <>
      <div className="container">
        <div class="testimonials">
          <img src={food.img} alt={food.name} />
          <div className="food-card  bg-primary">
            <i
              class="fa-solid fa-circle-stop"
              style={food.isVeg ? { color: "green" } : { color: "red" }}
            ></i>
            <span className="food-title"> {food.name}</span>
            <p>{food.description}</p>
            <p className="food-price">&#8377; {food.price}</p>
            <div>
              <button type="submit" className="btn btn-add">
                Add &nbsp;<i class="fa-solid fa-plus"></i>
              </button>
              <button className="btn btn-remove">
                Remove &nbsp;<i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
