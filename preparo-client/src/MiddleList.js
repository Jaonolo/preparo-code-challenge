import { Link } from 'react-router-dom';
import './MiddleList.css';

export default function MiddleList(props) {
    let htmlstring = []

    htmlstring.push(
        props.children.map((item) =>
            <Link style={{margin: '8px'}} to={item.url}>
                <i style={{fontSize: '2rem', color: 'rgb(201, 59, 89)'}} className={'fas fa-' + item.image}></i>
                <div style={{lineHeight: '18px'}}>{item.name}</div>
            </Link>
        )
    )

    return (
        <div style={{display: 'flex', textAlign: 'center'}}>
            {htmlstring}
        </div>
    );
}