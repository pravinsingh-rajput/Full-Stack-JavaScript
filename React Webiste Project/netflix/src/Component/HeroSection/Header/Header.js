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
          <button>English</button>
          <button>Sign In</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
