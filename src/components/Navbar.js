import React, { useState, useEffect } from "react";
import { navItems } from "../utils/NavitemsList";
import NavbarLogo from "../assets/Intersect.png";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { InputAdornment, TextField, Typography } from "@mui/material";
import "../styles/Navbar.css";

const Navbar = () => {
  const items = navItems;
  const [visibleItems, setVisibleItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      let context = this;
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  };
  useEffect(() => {
    const handleResize = () => {
      const navbar = document.getElementById("navbar");
      const navbarWidth = navbar.offsetWidth;
      const itemWidth = 90;
      const maxVisibleItems = Math.floor(navbarWidth / itemWidth);
      setVisibleItems(items.slice(0, maxVisibleItems));
      setHiddenItems(items.slice(maxVisibleItems));
    };
    handleResize();
    const betterFunction = debounce(handleResize, 300);
    window.addEventListener("resize", betterFunction);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [items]);

  return (
    <div className="navbarContainer">
      <div className="navbarLogoParent">
        <img className="navbarLogo" src={NavbarLogo} alt="Navbar Logo" />
        <Typography className="navbarLogoText">E-COMM</Typography>
      </div>
      <nav id="navbar">
        <ul className="navitemsList">
          {visibleItems.map((item, index) => (
            <li className="navitem" key={index}>
              {item.toUpperCase()}
            </li>
          ))}
        </ul>
        {hiddenItems.length > 0 && (
          <>
            <div className="hiddenItemsContainer">
              <Typography
                onClick={handleDropdownClick}
                className={`navitem showMore ${
                  isDropdownOpen ? "selected" : ""
                }`}
              >
                MORE
                {!isDropdownOpen ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </Typography>
              <div
                className={`dropdownItemsParent ${
                  isDropdownOpen ? "isVisible" : "isHidden"
                }`}
              >
                {hiddenItems.map((item, index) => (
                  <div className="dropdownItem" key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </nav>
      <div style={{ marginLeft: '3rem'}} >
      <TextField
        id="input-with-icon-textfield"
        variant="standard"
        placeholder="Search "
        className="searchBox"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="searchIcon" />
            </InputAdornment>
          ),
        }}
      />
      </div>
    </div>
  );
};

export default Navbar;
