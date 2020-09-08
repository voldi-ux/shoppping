import style,{css} from 'styled-components'
const inverted = css`
&.inverted {
    border: 1px solid black;
    background-color: black;
    
    &:hover {
      color: white;
      background-color: white;
      color: black;
    }
  }
`
const googleSignIn = css`
background-color:  #106fc8da;
&:hover {
  color: white;
  background-color: white;
  color: black;
}
`

const getButtonStyles = Props => {
    if(Props.inverted) {
        return inverted
    } else if (Props.googleSignIn ) {
        return googleSignIn
    }
}

export const ButtonStyledComponent = style.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
text-align: center;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;

&:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}

${ getButtonStyles }
`
