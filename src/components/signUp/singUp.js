

import React, { Fragment,useState } from "react";
import Input from "../form-input/input";
import Button from "../button/button";
import { auth } from "../../firebase/firebase_auth";
import { signUpStart } from "../../redux/user_reducer/user_actions";
import { connect } from "react-redux";


const  SignUp = ({signUpStart}) => {
 const [userCredentials,SetuserCrednetials] = useState({
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
})




const onSubmit = async (event) => {
  event.preventDefault();
  if (userCredentials.password !== userCredentials.confirmPassword) {
    return alert("passwords do not match");
  }
  await signUpStart(userCredentials)
  
      SetuserCrednetials({
          password:'',
          email:'',
          confirmPassword:''
      })

    };

    const handleChange = (event) => {
      let { name, value } = event.target;
      SetuserCrednetials({
      ...userCredentials, [name]: value
      });
    };
  
    return (
      <div>
        <h1>Creat a new account</h1>
        <form onSubmit={onSubmit}>
          <Input
            name="displayName"
            type="text"
            label="name"
            handleChange={handleChange}
            value={userCredentials.displayName  || ''}
          />

          <Input
            name="email"
            type="email"
            label="email"
            handleChange={handleChange}
            value={userCredentials.email  || ''}
          />

          <Input
            name="password"
            type="password"
            label="password"
            handleChange={handleChange}

            value={userCredentials.password || ''}
          />
          <Input
            name="confirmPassword"
            type="confirmPassword"
            label="confirmPassword"
            handleChange={handleChange}
            value={userCredentials.confirmPassword ||''}
          />
          <Button>SignUp</Button>
        </form>
      </div>
    );
  }

  const mapDispatchToProps = dispatch => ({
    signUpStart: (data) => dispatch(signUpStart(data))
  })


export default connect(null,mapDispatchToProps)(SignUp)
