import "./App.css";
import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home/index";
import Signup from "./containers/Signup/index";
import Signin from "./containers/Signin/index";
import PrivateRoute from "./containers/HOC/PrivateRoute";
import { isUserLoggedIn } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import Orders from "./containers/Orders";
import Products from "./containers/Products";
import Categories from "./containers/Categories";
import { initialData } from "./actions/initialData.actions";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isUserLoggedIn());
    }
    dispatch(initialData());
  }, []);
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/orders" component={Orders} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/categories" component={Categories} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </div>
  );
}

export default App;
