import './HeaderContainer.css';
import MiddleList from './MiddleList.js'
import {signOut} from './firebase.js'

export default function Header(props) {
    let isLoggedIn = 0;
    return (
        <header className={'header' + (isLoggedIn ? '_logged' : '')}>
            <button style={{height: '60px', width: '153px'}} onClick={() => signOut()}></button>
            <MiddleList>
                {props.children}
            </MiddleList>
            <p>PERFILZINHO</p>
        </header>
    );
}