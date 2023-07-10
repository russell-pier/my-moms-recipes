import { Meta, StoryObj } from '@storybook/react';
import SearchRecipe, { SearchBar, SearchResults } from './search-recipe';
import { SearchBarContainer, SearchResultStyleProvider } from '../../features/search/styles';
import recipes from "../../api/all-recipes.json"

const meta: Meta<typeof SearchRecipe> = {
    title: 'Design System/Organisms/SearchRecipe',
    component: SearchRecipe,
};

export default meta;
type Story = StoryObj<typeof SearchRecipe>;

export const Default: Story = {
    render: () => (
        <SearchRecipe recipes={recipes}>
            <SearchBarContainer>
                <SearchBar />
            </SearchBarContainer>
            <SearchResultStyleProvider>
                <SearchResults />
            </SearchResultStyleProvider>
        </SearchRecipe>
    )
};

export const NoResults: Story = {
    render: () => (
        <SearchRecipe recipes={[]}>
            <SearchBarContainer>
                <SearchBar />
            </SearchBarContainer>
            <SearchResultStyleProvider>
                <SearchResults />
            </SearchResultStyleProvider>
        </SearchRecipe>
    )
};

export const AFewResults: Story = {
    render: () => (
        <SearchRecipe recipes={(recipes as []).slice(0,3)}>
            <SearchBarContainer>
                <SearchBar />
            </SearchBarContainer>
            <SearchResultStyleProvider>
                <SearchResults />
            </SearchResultStyleProvider>
        </SearchRecipe>
    )
};