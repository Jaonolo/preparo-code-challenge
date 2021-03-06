import { createContext, Component} from 'react'
import { auth } from '../firebase.js'

export const UserContext = createContext({ user: null });

export default class UseProvider extends Component {
    state = {
        user: null
    };

    componentDidMount = () => {
        auth.onAuthStateChanged(userAuth => {
          this.setState({ user: userAuth});
        });
    };

    render() {
        return (
          <UserContext.Provider value={this.state.user}>
            {this.props.children}
          </UserContext.Provider>
        );
    }
}