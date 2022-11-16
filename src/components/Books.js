/* eslint-disable */
import React from 'react'
import Book from './Book';
import AddNewBook from './Newbook';

function Books() {
  return (
    <div>      
      <div className="book--container">
        <Book title="Things fall apart" author="Harry NJuguna" />
      </div>
      <AddNewBook />
      </div>  
  );
}

export default Books;
