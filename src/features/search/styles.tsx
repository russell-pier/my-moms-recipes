import styled from 'styled-components';
import { Row } from '../../components';

const SearchBarContainer = styled(Row)`
    width: 100%;
    justify-content: center;
    padding: 3rem 3rem;
`;

const SearchResultStyleProvider = styled.div`
    mark {
        font-style: normal;
        color: #000;
        background-color: #ff0;
    }
`;

export { SearchBarContainer, SearchResultStyleProvider };