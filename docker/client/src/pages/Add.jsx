import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [book, setBook] = useState({
    title: '',
    description: '',
    price: null,
    cover: '',
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async e => {
    e.preventDefault();
  
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate('/')
    } catch (err){
      console.log("Error: " + err);
    }
  }


  return (
    <div className='form'>
      <h1>Add Book</h1>
      <input type='text' placeholder='title' onChange={handleChange} name='title'/>
      <input type='text' placeholder='description' onChange={handleChange} name='description' />
      <input type='number' placeholder='price' onChange={handleChange} name='price'/>
      <input type='text' placeholder='cover' onChange={handleChange} name='color' />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add