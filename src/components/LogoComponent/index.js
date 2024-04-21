import React from "react";
import './index.css'
import { List } from "@phosphor-icons/react";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { TbShoppingBagMinus } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";

const LogoComponent = () => {
  return (
    <main className='logo_main'>
      <header className='logo'>
        <List size={32} class='hamburger' />
        <img
          className='logo_img'
          src="https://res.cloudinary.com/dbavdyd21/image/upload/v1712486443/app_script_Logo_kvp6hq.jpg"
          alt="logo"
        />
        <h1 className="nav-logo-heading">LOGO</h1>
          <div className="icon-container">
            <CiSearch className="icons" />
            <GoHeart className="icons" />
            <TbShoppingBagMinus className="icons" />
            <IoPersonOutline className="icons" />
            <h3 className="select">EN</h3>
          </div>
      </header>
      <nav className='na'>
        <h4 className='nav_heading'>SHOP</h4>
        <h4 className='nav_heading'>SKILLS</h4>
        <h4 className='nav_heading'>STORIES</h4>
        <h4 className='nav_heading'>ABOUT</h4>
        <h4 className='nav_heading'>CONTACT US</h4>
      </nav>
      <hr className='hr' />
    </main>
  );
};

export default LogoComponent;