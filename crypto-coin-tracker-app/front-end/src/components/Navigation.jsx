import {Link} from 'react-router-dom'


const Navigation=()=>{
    return <>
        <nav className="navigation-container">
        <ul>
            <li>
                <Link to="/"><i className='fa-solid fa-chart-line'></i>Dashboard</Link>
            </li>
            <li>
                <Link to="Watchlist"><i className='fa-solid fa-eye'></i>Watchlist</Link>
            </li>
        </ul>
        </nav>
    
  </>
}

export default Navigation;