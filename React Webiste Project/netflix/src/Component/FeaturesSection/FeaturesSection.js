import "./FeaturesSection.css";
import TitleDescription from "./TitleDescription";
import ImageComponent from "./ImageComponent";

function FeaturesSection() {
  return (
    <>
      <div className="features">
        <div className="features_container">
          <TitleDescription
            title="Enjoy on your TV."
            description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          />
          <ImageComponent src={require("./Assests/features1.png")} />
        </div>
      </div>
      <div className="features">
        <div className="features_container">
          <TitleDescription
            title="Download your shows to watch offline."
            description="Save your favourites easily and always have something to watch."
          />
          <ImageComponent src={require("./Assests/features2.jpg")} />
        </div>
      </div>
      <div className="features">
        <div className="features_container">
          <TitleDescription
            title="Watch everywhere."
            description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          />
          <ImageComponent src={require("./Assests/features3.png")} />
        </div>
      </div>
      <div className="features">
        <div className="features_container">
          <TitleDescription
            title="Create profiles for children."
            description="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          />
          <ImageComponent src={require("./Assests/features4.png")} />
        </div>
      </div>
    </>
  );
}

export default FeaturesSection;
