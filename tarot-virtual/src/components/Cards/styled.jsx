import styled from "styled-components";

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(162px, 1fr));
    gap: 16px;
    justify-content: center;
    margin-top: 32px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 16px 0 0 0;
    flex-wrap: wrap;
`

export const StyledButton = styled.button`
    background-color: #900000;
    color: white;
    border: 2px solid red;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    flex-wrap: wrap;
    margin-top: 16px;
    margin-right: 16px;
    cursor: pointer;
`

export const StyledImg = styled.img`
    width: 162px;
    height: 341px;
`