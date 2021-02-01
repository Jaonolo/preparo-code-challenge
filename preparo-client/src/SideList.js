import { Link } from 'react-router-dom';
import './SideList.css';

export default function SideList(props) {
    let htmlstring = [];

    htmlstring.push(
        props.children.map((item) =>
            <Link style={{margin: '0.5em 0em', display: 'inline-block'}} to={item.url}>
                <i style={{fontSize: '2rem', color: 'rgb(201, 59, 89)'}} className={'fas fa-' + item.image}></i>
                <div style={{lineHeight: '18px', color: 'white'}}>{item.name}</div>
            </Link>
        )
    )    

    return (
        <div style={{textAlign: 'center'}}>
            {htmlstring}
        </div>
    );
}