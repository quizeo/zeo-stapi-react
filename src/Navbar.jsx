import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import NavLinks from "./NavLinks";

const Navbar = () => {
  useGlobalContext();
  const { openSidebar, setPageId } = useGlobalContext();

  const handleSubmenu = (e) => {
    // console.log(e.target);
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">stapi</h3>
        <button onClick={openSidebar} className="toggle-btn">
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
