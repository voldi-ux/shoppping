import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './navigation.scss'
import { auth } from '../../firebase/firebase_auth';
import { connect, useDispatch } from 'react-redux';
import CartIcon from '../shop_icon/shop_icon';
import DropDownCart from '../cart/cart_dropdown';
import { createStructuredSelector } from 'reselect';
import { selectHidden } from '../../redux/cart/cart_selectors'
import { getIsloggedIn } from '../../redux/user_reducer/userSelector'
import { OptionLink, LogoContainer, HeaderContainer, OptionSpan, OptionsContainer } from './navigation.style';
import { setloggedOutStart } from '../../redux/user_reducer/user_actions';
const Navigation = ({isloggedIn,toggleCart,showCart,cart ,history,setLoggOut}) => {
  
    return (
        <HeaderContainer>
            <LogoContainer to='/' > 
               <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink  to='/shop' > 
                    SHOP
                </OptionLink>
                <OptionLink  to='/contact'>
                    CONTACT
                </OptionLink>
                {
                    isloggedIn ? <OptionSpan  onClick={() =>{ 
                        setLoggOut()}} >LOGOUT</OptionSpan> : <OptionLink to='/signin'>
                        SIGNIN
                    </OptionLink>
                }
                <CartIcon />
                </OptionsContainer>
             {showCart ? null : <DropDownCart /> }  
        </HeaderContainer>
    )
}

  const mapStateToProps = createStructuredSelector({
    isloggedIn: getIsloggedIn,
     showCart: selectHidden
  })
  const mapDispatchToProps = dispatch => ({
      setLoggOut:() => dispatch(setloggedOutStart())
  })
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navigation))