import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navBar">
        <img
          src={require("./Assets/netflix_logo.png")}
          alt="logo"
          className="logo_img"
        />
        <div className="buttons">
          <button className="btn_lang nav_btn">
            <img
              src={require("./Assets/world.png")}
              alt="logo"
              className="btn_img"
            />
            <span>English</span>
            <img
              src={require("./Assets/arrow.png")}
              alt="logo"
              className="btn_img"
            />
          </button>
          <button className="btn_signin nav_btn">Sign In</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
