import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Products from './components/Products/Products';
import SignUpOrLogin from './components/SignUpOrLogin/SignUpOrLogin';
import { userData } from './dataService/authService';
import { storeUserData } from './redux/actions/userActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      if(localStorage.getItem('token')) {
        userData()
        .then((res) => {
          console.log(res.data)
          dispatch(storeUserData(res.data))
        })
        .catch((err) => console.log(err))
      }
  }, [])
  
  return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/login">
            <SignUpOrLogin title="Login" />
          </Route>
          <Route path="/signup">
            <SignUpOrLogin title="Sign Up" />
          </Route>
          <PrivateRoute path="/add-product">
            <AddProduct />
          </PrivateRoute>
        </Switch>
      </Router>
  );
}

export default App;
