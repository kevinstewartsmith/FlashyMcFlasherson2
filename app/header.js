"use client"
import React from "react";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Lobster_Two } from '@next/font/google';
const lobsterTwo = Lobster_Two({ 
  subsets: ['latin'], 
  weight: '700',
  // display: 'swap',
  // family: 'Landrina Outline, cursive',
  style: ["italic"],
  fontStretch: 'expanded',
  
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
      <div  className="italics" onClick={() => {}}><h1 className={lobsterTwo.className}>Flashy<div className="lightning"><FlashOnIcon fontSize="56rem"/></div>McFlasherson</h1></div>
    </header>
  );
}

export default Header;
