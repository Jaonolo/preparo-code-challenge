import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Header from './HeaderContainer'
import Perfil from './Perfil.js'
import './App.css'

export default function App() {
    // let salve = [{name: 'VAGAS', image: 'suitcase', url: '/vagas'},
    //              {name: 'TESTES', image: 'book-open', url: '/testes'},

    const pages = [Perfil]
    let routes = pages.map((items) => 
            <Route path={items.url} component={items.content}/>
    )

    console.log(routes)

    return(
        <Router className="blob">
            <div className="app">
                <Header>{pages}</Header>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/perfil"/>
                    </Route>
                    {routes}
                </Switch>
            </div>
        </Router>
    );
}