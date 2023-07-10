import React from 'react';
import { StyledImage } from './image.styles';

interface Props {
    path: string;
    width?: string;
    height?: string;
    offset?: string;
}

const Image = ({path, width, height, offset}: Props) => {
    return <StyledImage src={path} width={width} height={height} offset={offset}/>
}

export default Image;