import { useNavigate } from 'react-router-dom';
import { StyledButton } from './nav-button.styles';

interface Props {
    children: React.ReactNode;
    to: string;
    className?: string;
}

const NavButton = ({children, to, className}: Props) => {
    const navigate = useNavigate();
    // const navigate = (to: string) => {

    // }

    // calculate if the last term of the path is the same as the to property
    const isOpen = () => {
        const path = window.location.pathname.split('/');
        return path[path.length - 1] === to.split('/')[to.split('/').length - 1];
    };

    return <StyledButton onClick={() => navigate(to)} className={isOpen() ? `open ${className}` : className}>{children}</StyledButton>
}

export default NavButton;