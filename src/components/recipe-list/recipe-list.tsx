import React from 'react';
import { Recipe } from '../../models/recipe.model';
import RecipeCard from '../recipe-card/recipe-card';
import { RecipeGrid } from './recipe-list.styles';

interface Props {
    recipes: Recipe[];
}

const RecipeList = ({recipes}: Props) => {
    return (
        <RecipeGrid>
            {recipes.map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe} />
            })}
        </RecipeGrid>
    );
};

export default RecipeList;