import { StyledInput } from './input.styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    className?: string;
};

const Input = (props: Props) => {
    return <StyledInput {...props} />
}

export default Input;