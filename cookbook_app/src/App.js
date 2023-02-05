import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Recipes from './Recipes';
import Recipe from './Recipe';

function App() {
  return (
    <div className='container'>
      <header>
        <h1>Избранные рецепты</h1>
        <Link to="/" className="menulink">Главная</Link>
        <Link to="soup" className="menulink">Суп</Link>
        <Link to="main" className="menulink">Горячее</Link>
        <Link to="dessert" className="menulink">Десерт</Link>
      </header>   
      <main>
      <Routes>
          <Route path="/"></Route>
          <Route path=":category" element={<Recipes/>}> </Route>
          <Route path=":category/:index" element={<Recipe/>}></Route>
      </Routes>
      </main >
    </div>
  );
}

export default App;
