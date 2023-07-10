import AppTemplate from '../../templates/app-template/app-template';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import SearchRecipe, { SearchBar, SearchResults } from '../../components/search-recipe/search-recipe';
import { SearchBarContainer, SearchResultStyleProvider } from './styles';



const Search  = () => {

    const recipes = useSelector((state: RootState) => state.recipes.recipes);

    return (
        <AppTemplate title="Search for a recipe">
            <SearchRecipe recipes={recipes}>
                <SearchBarContainer>
                    <SearchBar />
                </SearchBarContainer>
                <SearchResultStyleProvider>
                    <SearchResults />
                </SearchResultStyleProvider>
            </SearchRecipe>
        </AppTemplate>
    );
};

export default Search;