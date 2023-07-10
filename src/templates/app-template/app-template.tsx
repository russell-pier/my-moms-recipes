import React from 'react'
import { Header } from '../../components'
import { MaxWidth, Template } from './app-template.styles';

interface Props {
    title: string;
    children: React.ReactNode;
}

const AppTemplate = ({title, children}: Props) => {
    return (
        <Template>
            <MaxWidth>
                <Header title={title}/>
                {children}
            </MaxWidth>
        </Template>
    )
}

export default AppTemplate;