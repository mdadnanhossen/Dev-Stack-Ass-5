import logo from "../../assets/logo-text.png";

const Navber = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="bg-page text-text items-center">
        <div className="flex justify-between items-center h-20 container mx-auto">
          <div className="h-9 w-auto">
            <img src={logo} alt="" />
          </div>
          <div>
            <ul className="flex justify-between items-center gap-4">
              <li className="text-pink-600">Home</li>
              <li>Technologies</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex justify-between gap-4">
            <button>Sign In</button>
            <button className="brand-button rounded-3xl px-4 py-2 text-white">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navber;
