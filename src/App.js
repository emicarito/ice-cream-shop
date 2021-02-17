import React, { useState } from 'react';
import logo from './logo.svg';
import HeaderComponent from './components/header/index';
import ListComponent from './components/list/index';
import FilterComponent from './components/filter/index';
import './App.css';
import { DATA } from './constants/data'
const name = 'Carolina';
const ICE_CREAM_TYPE = 'ice_cream';
const TOPPING_TYPE = 'topping';

function App() {
  const iceCreams = DATA.INGREDIENTS.filter(item => item.type === ICE_CREAM_TYPE);
  const toppings = DATA.INGREDIENTS.filter(item => item.type === TOPPING_TYPE);
  const [iceCreamsAux, setIceCreams] = useState(iceCreams);
  const [toppingsAux, setToppingsAux] = useState(toppings);
  const [recipesAux, setRecipesAux] = useState(DATA.RECIPES);

  let ingredients = [];
  let filters = [];
  DATA.INGREDIENTS.map((item) => {
    ingredients = [...new Set([...ingredients, ...item.contains])];
  });

  function checkIngredients(value) {
    if (!value.target.checked) {
      filters = filters.filter((item) => item !== value.target.name);
    } else {
      filters.push(value.target.name);
    }
  }

  function checkRules(rule) {

    rule.forEach((item) => {

    })
  }

  function checkRecipes(filters) {
    DATA.RECIPES.filter(item => checkRules(item.rules))
  }

  function handleFilterChange(value) {
    checkIngredients(value);
    setIceCreams(iceCreams.filter(item => !item.contains.some(ingredient => filters.includes(ingredient))));
    setToppingsAux(toppings.filter(item => !item.contains.some(ingredient => filters.includes(ingredient))));
    checkRecipes(filters);
  }

  return (
    <div className="App">
      <HeaderComponent name={name}></HeaderComponent>
      <FilterComponent handleFilterChange={handleFilterChange} data={ingredients}></FilterComponent>
      <h3>
        Ice Creams{" "}
        <span role="img" aria-label="ice cream cone">
          🍦
        </span>
      </h3>
      <ListComponent data={iceCreamsAux}></ListComponent>
      <h3>
        Toppings{" "}
        <span role="img" aria-label="strawberry choc">
          🍓🍫
        </span>
      </h3>
      <ListComponent data={toppingsAux}></ListComponent>
      <h3>
        Recipes{" "}
        <span role="img" aria-label="list">
          📋
        </span>
      </h3>
      <ListComponent data={recipesAux}></ListComponent>
    </div>
  );
}

export default App;
