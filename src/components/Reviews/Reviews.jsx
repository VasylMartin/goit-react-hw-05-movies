import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieReviews } from 'services/movies-api-gets';

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieReviews(movieId).then(obj => {
            setReviews(obj.results);
        });
    }, [movieId]);

    return (
        <section>
            <h3>Reviews</h3>
            {reviews.length === 0 ? (
            <div> We don't have any reviews for this movie.</div>
            ) : (
            <ul>
                {reviews.map(({ id, author, content }) => (
                <li key={id}>
                    <p>{author}</p>
                    <p>{content}</p>
                </li>
                ))}
            </ul>
            )}
        </section>
    );
}