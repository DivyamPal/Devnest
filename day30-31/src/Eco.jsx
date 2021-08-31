import './Esty.css';
import Header from './ecom/header';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./ecom/productListing";
import ProductDetails from './ecom/productDetails';

export default function app() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route
              path="/product/:productId"
              exact
              component={ProductDetails}
            />
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      </div>
    );
}