import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Main() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit src/App.js and save to reload.<br/>
         
         บทที่ 1 : <a href="/ex1/">Click</a><br/>
        
         บทที่ 2 : <a href="/ex2/">Click</a><br/>
         
         บทที่ 3 : <a href="/ex3/">Click</a><br/>
              
         บทที่ 4 : <a href="/ex4/">Click</a><br/>
         
         บทที่ 5 : <a href="/ex5/">Click</a><br/>
         
         บทที่ 6 : <a href="/ex6/">Click</a><br/>

        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React to Google
        </a>
      </header>
    </div>
  );
}


export default Main;


