import React,{ useState} from "react";
import FormInput from "../form-input/input";
import Button from "../button/button";
import "./sign-in.scss";
import { signInWithGoogleStart,signInWithEmailAndPasswordStart } from "../../redux/user_reducer/user_actions";
import { connect } from "react-redux";
const  SignIn = ({signWithGoogle,signInWithEmailAndPassword}) => {
  const [userCredents,SetUserCredents] = useState({
    password: "",
    email: "",
  })
   
 
    const onSubmit = async (event) => {
   
      event.preventDefault();

      const { password, email } = userCredents;
      const UserData = {
        UserPassword:password,UserEmail:email
      }
      signInWithEmailAndPassword(UserData)

      SetUserCredents({
        password: "",
        email: "",
      })
    };

    
    const handleChange = (event) => {
      let { name, value } = event.target;
      SetUserCredents({...userCredents,
        [name]: value,
      });
    };
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={onSubmit}>
          <FormInput
            name="email"
            type="email"
            value={userCredents.email}
            required
            handleChange={handleChange}
            label="email"
          />
          <FormInput
            name="password"
            type="password"
            value={userCredents.password}
            handleChange={handleChange}
            label="password"
            required
          />
          <Button >signIn </Button>
          <Button type='button' googleSignIn onClick={() => signWithGoogle()}>
            sign with google
          </Button >
        </form>
      </div>
    );
  }



const mapDispatchToProps = dispacth  => ({
  signWithGoogle:() => dispacth(signInWithGoogleStart()),
  signInWithEmailAndPassword: (userData) => dispacth(signInWithEmailAndPasswordStart(userData))
})
export default connect(null,mapDispatchToProps)(SignIn) ;


// async()=> {
//   await signInWithGoogle()

//   let user = auth.currentUser
//   const {displayName, email } = user;
//   let loggedInUser = {
//     name:displayName,
//     email:email
//   }
//   creatUser(loggedInUser)           
//     }