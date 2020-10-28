import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Main() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: "72px", fontWeight: "bold" }}> lesson All of Commath </p>
        <p style={{ fontSize: "32px"}}>

          บทที่ 1 : <a style={{ fontSize: "32px"}} href="/ex1/" >Click</a><br />

         บทที่ 2 : <a style={{ fontSize: "32px"}} href="/ex2/">Click</a><br />

         บทที่ 3 : <a style={{ fontSize: "32px"}} href="/ex3/">Click</a><br />

         บทที่ 4 : <a style={{ fontSize: "32px"}} href="/ex4/">Click</a><br />

         บทที่ 5 : <a style={{ fontSize: "32px"}} href="/ex5/">Click</a><br />

         บทที่ 6 : <a style={{ fontSize: "32px"}} href="/ex6/">Click</a>
        </p>
        <a style={{ fontSize: "42px", fontWeight: "bold" }}
          className="App-link"
          href="https://wichit2s.gitlab.io/commath/01-Basic-Computing/index.html"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        <h1>____________________________________________________________</h1><br/>
        
      </header>
    </div>
  );
}


export default Main;


