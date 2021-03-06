import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom'
import Aside from './AsideContainer'
import './Perfil.css'

import Home from './home.js'
import Data from './data.js'
import Local from './local.js'

const Perfil = {
    name: 'PERFIL', 
    image: 'user',
    url: '/perfil',
    content: () => {
        const subpages = [Home, Data, Local]
        let routes = subpages.map((items) => 
            <Route path={items.url} exact component={items.content}/>
        )

        return(
            <div className="content">
                <Router>
                <Aside>{subpages}</Aside>
                    <main>
                        <Switch>
                            {routes}
                        </Switch>
                    </main>
                </Router>
            </div>
        );
    }
}

export default Perfil