import "./HeroSection.css";
import Header from "./Header/Header";

const HeroSection = () => {
  return (
    <div className="hero__Section">
      <div className="hero__Container">
        <Header />
        <div className="main_container">
          <div className="hero_content">
            <h1 className="hero_primary_heading">
              Unlimited movies, TV shows and more.
            </h1>
            <h3 className="hero_secondary_heading">
              Watch anywhere. Cancel anytime.
            </h3>
            <p className="hero_description">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <form>
            <label htmlFor="email">Email address</label>
            <input type="email" className="emailAddress" />
            <button className="submit_btn">
              Get Started <img src={require("./Assets/next.png")} alt="" />{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
