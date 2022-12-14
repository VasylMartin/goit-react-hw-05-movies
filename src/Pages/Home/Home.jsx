import {useState, useEffect} from "react";
import { fetchTrending } from "services/movies-api-gets";
import { NavLink, useLocation } from "react-router-dom";

const Home = () => {
    const [trendings, setTrendings] = useState([])
    const location = useLocation();

    useEffect(() => {
        fetchTrending().then(obj => {
            setTrendings(obj.results);
        });
    }, []);
    
    return(
        <div>
            <h2>Trending today</h2>
            {trendings.length > 0 ? (
                <ul>
                    {trendings.map(({id, title, name}) => (
                        <li key={id}>
                            <NavLink to={`/movies/${id}`} state={{ from: location }}>
                                {title}{name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    )

}

export default Home