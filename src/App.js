// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import React from 'react';


function App() {
  const [name,setName]=useState('');
  const [gender,setGender]=useState('');
  const [email,setEmail]=useState('');
  const [link,setLink]=useState('');
  const [lang,setlang]=useState('');
  const [SubmittedData,setSubmittedData]=useState(null);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const formData={
      Name:name,
      Gender:gender,
      Email:email,
      Link:link,
      Language:lang
    };
    setSubmittedData(formData);
    setName('');
    setGender('');
    setEmail('');
    setLink('');
    setlang('');
    
  }

  return (
    <>
        <h2>REGISTRATION FORM</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="name">Name: </label>
            <input type="text"
              id='name'
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
              placeholder='Enter Name'
             />
          </div>
          <div className="form_group">
            <label htmlFor="gender">Gender: </label>
            <input type="text"
              id='gender'
              value={gender}
              onChange={(e)=>setGender(e.target.value)}
              required
              placeholder='Enter Gender'
             />
          </div>
          <div className="form_group">
            <label htmlFor="email">Email: </label>
            <input type="email"
              id='email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              placeholder='Enter Email'
             />
          </div>
          <div className="form_group">
            <label htmlFor="link">Link: </label>
            <input type="search"
              id='link'
              value={link}
              onChange={(e)=>setLink(e.target.value)}
              required
              placeholder='Enter Link'
             />
          </div>
          <div className="form_group">
            <label htmlFor="lang">language: </label>
            <input type="text"
              id='lang'
              value={lang}
              onChange={(e)=>setlang(e.target.value)}
              required
              placeholder='Enter language '
             />
          </div>
          <button type='Submit'>Submit</button>
        </form>

        {SubmittedData &&(
          <div className="submitted-data">
            <h3>Submitted Data</h3>
            <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png" alt="" />
            <p><span>Name: </span>{SubmittedData.Name}</p>
            <p><span>Gender: </span>{SubmittedData.Gender}</p>
            <p><span>Email: </span>{SubmittedData.Email}</p>
            <p><span>Link: </span>{SubmittedData.Link}</p>
            <p><span>Language: </span>{SubmittedData.Language}</p>
          </div>
        ) 
        }
      </div>
    </>
  );
}

export default App;
