import './HeaderContainer.css';
import MiddleList from './MiddleList.js'

export default function Header(props) {
    let isLoggedIn = 0;
    return (
        <header className={'header' + (isLoggedIn ? '_logged' : '')}>
            <button style={{height: '60px', width: '153px'}}></button>
            <MiddleList>
                {props.children}
            </MiddleList>
            <p>PERFILZINHO</p>
        </header>
    );
}