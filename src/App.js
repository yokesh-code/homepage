import React, { useState } from "react";

import data from "./data";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Nav";
import Section from "./components/Section";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const getItem = (event) => {
    //console.log(event);
    if (event.target.innerText === "Add to Cart") {
      addItem(event);
    } else if (event.target.innerText === "Remove from Cart") {
      removeItem(event);
    }
  }

  function addItem(event) {
    setCount(count + 1);
    event.target.innerText = "Remove from Cart";
    event.target.classList.value = 'btn btn-outline-danger mt-auto'
  }

  function removeItem(event) {
    setCount(count - 1);
    event.target.innerText = "Add to Cart";
    event.target.classList.value = 'btn btn-outline-dark mt-auto'
  }

  return (
    <>
      <Navigation count={count} />
      <Header />
      <Section data={data} getItem={getItem} />
      <Footer />
    </>
  );
}

export default App;