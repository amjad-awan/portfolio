import React from 'react';
import styles from './style.module.scss'; // Create a styles module for Marquee

const Marquee = () => {
  const items = [
    "* PHP",
    "* Python",
    "* Design",
    "* World",
    "* Development",
    "* JavaScript",
    "* React",
    "* Node.js"
  ];

  return (
    <div className={styles.marqueeTg}>
        <marquee width="100%" direction="left">
        <ul>
        {items.concat(items).map((item, index) => (
          <li  className='font-primary' key={index}>{item}</li>
        ))}
      </ul>
        </marquee>
      
    </div>
  );
};

export default Marquee;
