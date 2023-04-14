import { Send } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 40vw;
    background-color: white;
    display: flex;
    justify-content: space-between;
`;
const Input = styled.input`
    border: none;
    flex: 8;
    
`;
const Button = styled.button`
    flex: 1;
    background-color: teal;
    color: white;
    border: none;
    &:hover {
        transform: scale(1.1)
    }
`;

const Newsletter = () => {
  return (
    <Container>
        <Title> Newsletter </Title>
        <Desc> Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder="Your Email" />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
    )
}

export default Newsletter