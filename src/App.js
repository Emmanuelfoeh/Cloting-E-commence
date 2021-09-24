import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Shop from "./Pages/Shoppage/Shop";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Signin_Signup from "./Pages/Signin-and-Signup-page/Signin_Signup";

import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/User.action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./Redux/User/user.selector";
import Checkout from "./Pages/CheckoutPage/Checkout";

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
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <Signin_Signup />
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
