import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import NotFound from '../../Images/not-found.jpg'
import { getMovieCast } from 'services/movies-api-gets';

export const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieCast(movieId).then(obj => {
            setCast(obj.cast);
        });
    }, [movieId]);


    if (cast.length === 0) {
        return <div>There is no information about cast</div>;
    }

    const width = '100';
    return (
        <section>
            <h3>Cast</h3>
            <ul>
            {cast.map(({ id, name, profile_path, character }) => (
                <li key={id}>
                <div>
                    {profile_path !== null ? (
                    <img
                        width={width}
                        src={`https://image.tmdb.org/t/p/original${profile_path}`}
                        alt={name}
                    />
                    ) : (
                    <img width={width} src={NotFound} alt="Not found" />
                    )}
                </div>
                <div>
                    <p>{name}</p>
                    <p>
                    <b>Character:</b> {character}
                    </p>
                </div>
                </li>
            ))}
            </ul>
        </section>
    );

}