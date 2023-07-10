import React from 'react';
import NavButton from '../nav-button/nav-button';
import { HeaderStyled, Title } from './header.styles';

interface Props {
    title: string;
}

const Header = ({title}: Props) => {
    return (
        <HeaderStyled>
            <Title>{title}</Title>
            <NavButton to="/">Home</NavButton>
            <NavButton to="/search">Search</NavButton>
            <NavButton to="/saved">Saved</NavButton>
        </HeaderStyled>
    );
};

export default Header;