import React, { Suspense, lazy } from 'react';
import { Route, Switch } from "react-router-dom";
const Login = lazy(() => import('../authentication/login'));
const Signup = lazy(() => import('../authentication/signup'));
const Products = lazy(() => import('../products/products'));
const PageNotFound = lazy(() => import('../shared/pageNotFound'))
const Home = lazy(() => import('../home/home'))
export default function Routings() {

    return (<>
        <Suspense fallback={
            <div className="loader-container">
                <div className="loader">...Loader</div>
            </div>
        }>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path="/home" component={Home}/>
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/products' component={Products} />
                <Route exact path='/products/:id' component={Products} />
                <Route path="*" exact={true} component={PageNotFound} />
            </Switch>
        </Suspense>
    </>);
}
