import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const Books = () => {
  const [books, setBooks] = useState([]); //empty array because we're going to be getting an array of books

  useEffect(() => {
    const fetchAllBooks = async () => { //async function because we're making an api request
      try {
        const res = await axios.get('http://localhost:8800/books');
        console.log(res.data);
        setBooks(res.data);
      } catch(err) {
          console.log(err);
      }
    }
    fetchAllBooks();
  }, []) //dependency array is empty because we only want to run this once

  return (
    <div>
      <h1>Will's Books</h1>
      <div className='books'>
        {books.map(book=> (
          <div className='book'>
            {book.cover && <img src={book.cover} alt='' />}
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
      <button><Link to={'/add'}>Add Book</Link></button>
    </div>
  )
}

export default Books