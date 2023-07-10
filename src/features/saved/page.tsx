import React from 'react';
import AppTemplate from '../../templates/app-template/app-template';
import { RecipeList } from '../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import NavButton from '../../components/nav-button/nav-button';
import { AddMoreRecipes } from './styles';

const Saved  = () => {
    const recipes = useSelector((state: RootState) => state.recipes.recipes.filter((recipe) => recipe.saved));
    
    return (
        <AppTemplate title="Saved recipes">
            <RecipeList recipes={recipes} />
            <AddMoreRecipes>
                <NavButton to="/search">Add more recipes</NavButton>
            </AddMoreRecipes>
        </AppTemplate>
    );
};

export default Saved;