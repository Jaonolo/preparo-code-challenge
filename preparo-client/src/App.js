import {BrowserRouter as Router, Switch, Route, Redirect, useHistory} from 'react-router-dom'
import Header from './HeaderContainer'
import Perfil from './Perfil.js'
import Login from './login.js'
import { useContext } from "react";
import { UserContext } from "./provider/UserProvider";
import './App.css'

export default function App() {
    // let salve = [{name: 'VAGAS', image: 'suitcase', url: '/vagas'},
    //              {name: 'TESTES', image: 'book-open', url: '/testes'},

    const pages = [Perfil]
    let routes = pages.map((items) => 
            <Route path={items.url} component={items.content}/>
    )

    const user = useContext(UserContext)    
    const redirect = (user === null ? '/login' : '/perfil')
    const path = (user === null ? '/perfil' : '/login')
    console.log(user)

    return(
        <Router>
            <div className="app">
                <teste/>
                <Header>{pages}</Header>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to={redirect}/>
                    </Route>
                    <Route path={path} exact>
                        <Redirect to={redirect}/>
                    </Route>
                    {routes}
                    <Route path="/login" component={Login}/>
                    <Route component={() => 'deu ruim galera'}/>
                </Switch>
            </div>
        </Router>
    );
}

