import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;

const Wrapper = styled.div`
    display: flex;
`;

const ImageContainer = styled.div`
    flex: 1;
    margin: 20px;
`;

const Image = styled.img`
    width:100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    margin: 20px;
`;

const Title = styled.h1`
    /* margin-bottom: 20px; */
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
`;

const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    margin: 30px 0px;
    justify-content: space-between;
`;

const FilterTitle = styled.p`
    font-size: 20px;
    font-weight: 200;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    padding: 5px;
    margin-left:10px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width:30px;
    height: 30px;
    border-radius: 20%;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    margin-left: 20px;
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: #f8f4f4;
    }
`;

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImageContainer>
                <Image src="https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
            </ImageContainer>
            <InfoContainer>
                <Title>Fashion</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quas corrupti quam hic quis ratione unde pariatur nemo sint architecto, assumenda magni rerum consequuntur dolore. Cumque quod incidunt saepe animi.</Desc>
                <Price>Rs. 1499/-</Price>
                <FilterContainer>
                    <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="blue" />
                    <FilterColor color="gray" />
                    </Filter>
                    
                    <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>Xs</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>Xl</FilterSizeOption>
                    </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product