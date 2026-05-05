import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Sidebar from '../sidebar';

function AboutMe() {
  
  return (
    <div className="about-me-container">
      <Sidebar />
      <div className='about-me'>
      <h2>Hello I am Daniel Wakefield, and welcome to my portfolio</h2>
      <p>I have been developing professionally for 6 years as of 02/11/2026. I specialize in full stack web development but in my freetime I enjoy working on integrated circuits, game development, data analysis, and creating tools for myself or others to use.</p>
      <p>My professional stack includes: </p>
      <h3>Languages</h3>
      <ul>
        <li>Python</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>PHP</li>
        <li>Perl</li>
        <li>C++</li>
        <li>Bash</li>
        <li>Liquid</li>
        <li>HTML + CSS</li>
      </ul>
      <h3>Frameworks</h3>
      <ul>
        <li>React</li>
        <li>Vue</li>
        <li>Node.js</li>
        <li>Django</li>
        <li>Vite</li>
      </ul>
      <h3>Libraries</h3>
      <ul>
        <li>pandas, NumPy, Matplotlib, Scikit-learn, Requests</li>
        <li>WWW::Mechanize</li>
        <li>PostGIS</li>
      </ul>
      <h3>Databases</h3>
      <ul>
        <li>PostgreSQL</li>
        <li>SQLite</li>
        <li>MongoDB</li>
        <li>Prisma (ORM)</li>
      </ul>
      </div>
    </div>
  );
}
  
export default AboutMe;