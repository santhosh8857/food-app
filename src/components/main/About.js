import Navbar from "../utilities/Navbar";

import "../css/About.css";
import person1 from "../../img/person-1.jpg";
import person2 from "../../img/person-2.jpg";
import FeatureCard from "../utilities/FeatureCard";
import Footer from "../utilities/Footer";
const About = () => {
  return (
    <>
      <div>
        <header className="showcase-main">
          <Navbar />
          <div className="content">
            <h1 className="content-heading">
              <span id="content-text">About</span> Us
            </h1>
          </div>
        </header>
        <h1
          className="content-heading"
          style={{ fontWeight: "350", margin: "15px" }}
        >
          <span id="content-text"> Benefits</span> From Us
        </h1>
        <div className="list">
          <FeatureCard
            title="Delivery Time"
            description="Delivery times vary based on traffic,the restaurant's ability to prepare food and weather conditions."
            icon="fa-solid fa-truck-fast"
            benefits={true}
          />
          <FeatureCard
            title="Unbeliveable Offers"
            description="All prices listed on our website reflect a 3.5% cash discount. Paying with credit card will result in a 3.5% increase on all menu pricing."
            icon="fa-solid fa-tag"
            benefits={true}
          />
          <FeatureCard
            title="Office Hangouts"
            description="We specialize group lunch deliveries and drop off catering! Give our local catering manager a call for more details regarding keeping your office well fed!"
            icon="fa-solid fa-utensils"
            benefits={true}
          />
          <FeatureCard
            title="Phone Orders"
            description="All phone-in-orders will incur a $1.99 phone-in-fee. Orders placed online, or with our app, are not subject to this fee"
            icon="fa-solid fa-phone"
            benefits={true}
          />
        </div>
        <h1
          className="content-heading"
          style={{ fontWeight: "350", margin: "15px" }}
        >
          What Our<span id="content-text"> Guests</span> Say
        </h1>
        <section id="testimonials">
          <div className="container">
            <div className="testimonials bg-primary">
              <img src={person1} alt="linda" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
                eos pariatur, odio dolores dolorum facilis, ipsum earum in, quod
                consequuntur culpa voluptatum beatae nam veritatis, quia ea
                magni officiis iure id laboriosam? iusto veniam veritatis!
                Nostrum pariatur laborum amet soluta
              </p>
            </div>

            <div className="testimonials bg-primary">
              <img src={person2} alt="golmes" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
                eos pariatur, odio dolores dolorum facilis, ipsum earum in, quod
                iusto veniam veritatis! Nostrum pariatur laborum amet soluta
                consequuntur culpa voluptatum beatae nam veritatis, quia ea
                magni officiis iure id laboriosam?
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default About;
