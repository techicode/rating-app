import React from 'react';
import {Link} from 'react-router-dom';

function Header({ text }) {
  return (
    <header>
      <div className="flex justify-center pb-5">
        <Link to="/">
        <h2 className="text-2xl text-purple-500">{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Rating APP',
}

export default Header;
