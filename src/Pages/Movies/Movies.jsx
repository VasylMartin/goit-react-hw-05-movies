import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';

import { Searchbar } from "components/Searchbar/Searchbar";
import { getMovieByName } from "services/movies-api-gets";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if (query === '') {
            return;
        }
        getMovieByName(query).then(arr => {
            setMovies(arr.results);
        });
        }, [query]);

        const handleFormSubmit = searchQuery => {
            setSearchParams(searchQuery !== '' ? { query: searchQuery } : {});
        };


        return (
            <div>
                <Searchbar value={query} onSubmit={handleFormSubmit} />
                <Outlet />
                    {movies.length > 0 ? (
                <ul>
                    {movies.map(({ id, title, name }) => (
                    <li key={id}>
                        <NavLink to={`${id}`} state={{ from: location }}>
                        {title} {name}
                        </NavLink>
                    </li>
                    ))}
                </ul>
                ) : null}
            </div>
        );
}

export default Movies;