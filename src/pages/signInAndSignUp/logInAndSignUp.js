import React from 'react'
import './loginAndSignUp.scss'
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/signUp/singUp'
class LogIn extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='forms-container'>
             <SignIn />
             <SignUp />
            </div>
        )
    }
}

export default LogIn