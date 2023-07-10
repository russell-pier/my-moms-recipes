import "./App.css";
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './features/home/page';
import Saved from './features/saved/page';
import Search from './features/search/page';
import recipesJson from './api/all-recipes.json';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipes } from './redux/recipes.slice';
import { RootState } from './redux/store';

function App() {

  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes.recipes);

  useEffect(() => {
    if (dispatch && (!recipes || recipes.length === 0)) {
      dispatch(setRecipes(recipesJson));
    }
  }, [dispatch, recipes]);

  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="saved" element={<Saved />} />
   </Routes>
  );
}

export default App;

