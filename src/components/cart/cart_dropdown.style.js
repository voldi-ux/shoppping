import styled from 'styled-components'

export const CartDropDownStyles = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
  
    .cart-items {
      height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
    }
  
    Button {
      margin-top: auto;
    }

    .empty {
      margin-top:100px;
      font-weight: 600;
      font-size: 18px;
      color: rgb(7, 11, 20);
    }
  
`

export const CartItems = styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: scroll;

&:last-child {
    margin-bottom: auto
}
`

export const EmptyDiv = styled.div`
margin-top:100px;
font-weight: 600;
font-size: 18px;
color: rgb(7, 11, 20);
`