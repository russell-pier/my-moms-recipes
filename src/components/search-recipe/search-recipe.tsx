import { createContext, useContext, useEffect, useState } from 'react';
import { Recipe } from '../../models/recipe.model';
import { RecipeList } from '..';
import { SearchInput } from './search-recipe.styles';

const DataContext = createContext<{
    searchResults: Recipe[];
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}>({searchResults: [], setSearchTerm: () => {}});

interface SearchContainerProps {
    children: React.ReactNode;
    recipes: Recipe[];
}

const SearchRecipe = ({children, recipes}: SearchContainerProps) => {
    const [searchResults, setSearchResults] = useState<Recipe[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        if (recipes) {
            setSearchResults(recipes);
        }
    }, [recipes]);

    useEffect(() => {
        if (recipes) {
            const results = recipes.filter((recipe) => {
                return recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) || recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
            }).map((recipe) => {
                return {
                    ...recipe,
                    name: recipe.name.replace(new RegExp(searchTerm, 'gi'), (match) => `<mark>${match}</mark>`),
                    description: recipe.description.replace(new RegExp(searchTerm, 'gi'), (match) => `<mark>${match}</mark>`)
                }
            });
            setSearchResults(results);
        }
    }, [searchTerm, recipes])

    return (
        <DataContext.Provider value={{searchResults, setSearchTerm}}>
            {children}
        </DataContext.Provider>
    );
};

const SearchBar = () => {
    const {setSearchTerm} = useContext(DataContext);

    return (
        <SearchInput onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)} placeholder="Click to search..."/>
    );
};

const SearchResults = () => {
    const {searchResults} = useContext(DataContext);

    return (
        <RecipeList recipes={searchResults}/>
    );
};

export default SearchRecipe;
export { SearchBar, SearchResults };