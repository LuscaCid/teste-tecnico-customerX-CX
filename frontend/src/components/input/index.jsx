import {Container, Input} from './style'

export const Input = ({isSrOnly, placeholder, onChange, label, type}) => {
    return (
        <Container>
            {isSrOnly ? <label>{label}</label> : null}
            <Input type={type} onChange={onChange} />
        </Container>
    )
}