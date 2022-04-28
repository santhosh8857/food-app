import Navbar from "../utilities/Navbar";
import FeatureCard from "../utilities/FeatureCard";
import Footer from "../utilities/Footer";

import "../css/Contact.css";
import "../css/Home.css";
import contact from "../../img/cook.png";

const Contact = () => {
  return (
    <>
      <div>
        <header className="showcase-main">
          <Navbar />
          <div className="content">
            <h1 className="content-heading">
              Please fill out the form below to
              <span id="content-text"> contact us</span>
            </h1>
          </div>
        </header>
        <section className="contact-section">
          <img src={contact} alt="..." style={{ width: "30%" }}></img>
          <div id="contact-form">
            <form>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label for="mesaage">Message</label>
                <textarea
                  name="mesaage"
                  id="mesaage"
                  placeholder="Feedback?"
                ></textarea>
              </div>

              <button type="submit" className="btn-link">
                Submit &nbsp;
                <i className="fa-solid fa-circle-chevron-right"></i>
              </button>
            </form>
          </div>
        </section>
        <section className="list">
          <FeatureCard
            title="Location"
            description="50, Main St, Guindy, Chennai"
            icon="fa-solid fa-location-dot"
            contact={true}
          />
          <FeatureCard
            title="Phone Number"
            description="+91 987611241"
            icon="fa-solid fa-phone"
            contact={true}
          />
          <FeatureCard
            title="Email Address"
            description="santhosh8857@gmail.com"
            icon="fa-solid fa-paper-plane"
            contact={true}
          />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
