import React from 'react';
import { Recipe } from '../../models/recipe.model';
import CardImage from '../image/image';
import HeartIcon from '../../icons/heart';
import { useDispatch } from 'react-redux';
import { saveRecipe } from '../../redux/recipes.slice';
import { Card, Content, BottomRow } from './recipe-card-styles';

interface Props {
    recipe: Recipe;
}

const RecipeCard = ({recipe}: Props) => {

    const dispatch = useDispatch();
    const saveCardRecipe = () => {
        dispatch(saveRecipe(recipe.id));
    };

    return (
        <Card onClick={saveCardRecipe}>
            <CardImage path={recipe.image} height="200px" width="300px" offset={recipe.imageOffset}/>
            <Content>
                {/* Note, I am using the concernedly named dangerouslySetHtml feature. This is for convience in a demo and should not be a production soultion. */}
                <h3 dangerouslySetInnerHTML={{__html: recipe.name}}/>
                <p dangerouslySetInnerHTML={{__html: recipe.description}}/>
                <BottomRow>
                    <HeartIcon fill={recipe.saved ? "#cc1111" : undefined}/>
                    <h4>{recipe.rating}</h4>
                </BottomRow>
            </Content>
        </Card>
    )
}

export default RecipeCard;