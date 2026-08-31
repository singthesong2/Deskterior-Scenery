import styled from "@emotion/styled";


function HeroSection() {
  return (
    <HeroContainer>
        <HeroTitle>HeroSection</HeroTitle>
    </HeroContainer>
  )
}

const HeroContainer = styled.section`
    width: 100%;
    padding: 64px;
    background-color: ${({theme}) => theme.colors.cards};
`;

const HeroTitle = styled.h1`
    font-size: 64px;
    color: #000;
`;

export { HeroSection };
