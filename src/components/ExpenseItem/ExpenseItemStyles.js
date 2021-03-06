import styled from "styled-components";

export const AppMain = styled.div `
    text-align: center;
    color: whitesmoke;
`

export const ExpenseItemBar = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-around;
    padding: 2rem;
    background-color: black;
    border-radius: 2rem;

    @media only screen and (max-width:1200px) {
        
    }
`

export const ExpenseDate = styled.div `
    display: block;
`

export const ExpenseDescription = styled.div `
    display: block;
    width: auto;
    justify-content: space-around;
`

export const ExpenseAmount = styled.div `
    display: block;
`

export const CardDisplay = styled.div `
    margin: 0.5rem 10rem;
    box-shadow: 1rem solid white;
    border-radius: 2rem;

    @media only screen and (max-width:1200px) {
        margin: 0.35rem 1rem;
    }
`