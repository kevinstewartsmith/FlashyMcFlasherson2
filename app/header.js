"use client"
import React from "react";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Lobster } from '@next/font/google';
const lobster = Lobster({ 
  subsets: ['latin'], 
  weight: '400',
  // display: 'swap',
  // family: 'Landrina Outline, cursive',
  // style: 'normal',
  fontStretch: 'expanded',
  fontStyle: 'italic',
  fontWeight: 'bold',
  
 })
//  color: #fff;
//  font-family: "Lobster", cursive;
//  font-size: 2.8rem;
//  font-weight: bold;
//  font-style: italic;
//  font-stretch: expanded;
//  font-family: 'Londrina Outline', cursive;
//import globals css
import './globals.css'


function Header() {
 
  
  return (
    <header>
      <div  onClick={() => {}}><h1 className={lobster.className}>Flashy<div className="lightning"><FlashOnIcon fontSize="56rem"/></div>McFlasherson</h1></div>
    </header>
  );
}

export default Header;
