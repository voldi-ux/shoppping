import React from 'react'
import { SpinnerWrapper,Spinner } from './withspinnerStyle'

export const WithSpinner = Component => ({isloading,...props})=> {
    console.log(props)
    if(isloading) {
      return  <SpinnerWrapper>
            <Spinner />
        </SpinnerWrapper>
    }
     else {
        return  <Component {...props}/>
     }
}