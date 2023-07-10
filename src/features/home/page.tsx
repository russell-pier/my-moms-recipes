import React, { useEffect } from 'react';
import AppTemplate from '../../templates/app-template/app-template';
import { RecipeCard } from '../../components';
import { Recipe } from '../../models/recipe.model';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { HomeColumn, Subtitle, HomeRow } from './styles';



const Home = () => {

    const recipes = useSelector((state: RootState) => state.recipes.recipes);
    const [highestRated, setHighestRated] = React.useState<Recipe[]>([]);

    useEffect(() => {
        if (recipes) {
            const clone = [...recipes];
            setHighestRated(clone.sort((a,b) => b.rating - a.rating).slice(0, 3));
        }
    }, [recipes])

    return (
        <AppTemplate title="My Mom's Recipes">
                <HomeColumn>
                    <Subtitle>Top Rated</Subtitle>
                    <HomeRow>
                        {highestRated.map((recipe) => {
                            return <RecipeCard key={`favorite-${recipe.id}`} recipe={recipe} />
                        })}
                    </HomeRow>
                </HomeColumn>
        </AppTemplate>
    );
};

export default Home;