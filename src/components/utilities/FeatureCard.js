import "../css/featurecard.css";

const FeatureCard = (props) => {
  return (
    <>
      <div
        className="feature-card"
        style={props.contact ? { width: "33.33%", textAlign: "center" } : null}
      >
        <h2>
          <i className={props.icon} id="content-text"></i> &nbsp; {props.title}
        </h2>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default FeatureCard;
