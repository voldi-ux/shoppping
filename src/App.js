import React, { Fragment,useEffect } from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import shopPage from "./pages/shop/shop";
import Navigation from "./components/header/navigation";
import LogIn from "./pages/signInAndSignUp/logInAndSignUp";
import { auth } from "./firebase/firebase_auth";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user_reducer/user_actions";
import Checkout from "./pages/checkout/checkout";
import { userSessionCheck } from "./redux/user_reducer/user_actions";

const notFoundPage = () => {
  return (
    <div>
      <h1>page not found</h1>
    </div>
  );
};

const App = ({SessionCheck,isloggedIn }) => {

  useEffect(() => {
    SessionCheck()
  },[])


    return (
       <Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route   path="/shop" component={shopPage} />
          <Route
            exact
            path="/signIn"
            render={() =>
              isloggedIn ? <Redirect to="/" /> : <LogIn />
            }
          />

          <Route exact path='/checkout' component={Checkout} />
          <Route path="/" component={notFoundPage} />
        </Switch>
      </Fragment>
    );
  }


const mapDispatchToProps = (dispatch) => ({
  SessionCheck: () => dispatch(userSessionCheck()),
});

const mapStateToProps = ({ user }) => ({
  isloggedIn: user.isloggedIn,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
