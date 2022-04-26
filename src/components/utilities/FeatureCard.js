import "../css/featurecard.css";

const FeatureCard = (props) => {
  return (
    <>
      <div className="feature-card">
        <h2>
          <i className={props.icon} id="content-text"></i> &nbsp; {props.title}
        </h2>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default FeatureCard;
