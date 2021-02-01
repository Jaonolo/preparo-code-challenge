import './AsideContainer.css';
import SideList from './SideList';

export default function Aside(props) {
    let isLoggedIn = 1;
    return (
        <aside className="aside" style={{ display: (isLoggedIn ? '' : 'none')}}>
            <SideList>{props.children}</SideList>
        </aside>
    );
}