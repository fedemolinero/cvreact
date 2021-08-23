import React, { useState } from 'react';
import './Header.css';

const Header = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('BUTTON CLICKED');
    console.log(title);
  }

  return (
    <div className="Header">
      <div className="Header-wrapper">
        <h1>{title}</h1>
        <button onClick={clickHandler}>
          CLICK ME
        </button>
      </div>
    </div>
  );
}

export default Header;
