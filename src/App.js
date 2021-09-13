import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Shop from "./Pages/Shoppage/Shop";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Signin_Signup from "./Pages/Signin-and-Signup-page/Signin_Signup";

import { useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/User.action";

class App extends React.Component {
  // unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const docRef = await createUserProfileDocument(userAuth);

        const unsub = onSnapshot(docRef, (snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
          // console.log(currentUser);
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/signin">
              <Signin_Signup />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
