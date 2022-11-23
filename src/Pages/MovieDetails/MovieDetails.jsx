import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
    CardWrapper, 
    Card,
    CardImgWrapper,
    CardDetails,
    CardTitle,
    CardScore,
    CardOverview,
    CardGenres,
    CardGenresLabel,
    CardGenresList,
    LinkWrapper,
    Info, } from './MovieDetails.styled';

import { getMovieDetails } from 'services/movies-api-gets';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    let backLocation = location.state?.from ?? '/';

    useEffect(() => {
        getMovieDetails(movieId).then(obj => {
            setMovie(obj);
        });
    }, [movieId]);

    if (!movie) {
        return null;
        }
    const { poster_path, title, release_date, vote_average, overview, genres } = movie;

    return (
        <CardWrapper>
      <LinkWrapper>
        <Link to={backLocation}>Go back</Link>
      </LinkWrapper>
      <Card>
        <CardImgWrapper>
          <img
            width={200}
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
          />
        </CardImgWrapper>
        <CardDetails>
          <CardTitle>
            <span>{title}</span>&nbsp;
            <span>({release_date.split('-')[0]})</span>
          </CardTitle>
          <CardScore>User score: {Math.round(vote_average * 10)}%</CardScore>
          <CardOverview>
            <h2>Overview:</h2>
            <p>{overview}</p>
          </CardOverview>
          <CardGenres>
            {genres.length !== 0 && (
              <>
                <CardGenresLabel>Genres:</CardGenresLabel>
                <CardGenresList>
                  {genres.map(item => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </CardGenresList>
              </>
            )}
          </CardGenres>
        </CardDetails>
      </Card>
      <Info>
        <h2>Additional info</h2>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLocation }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLocation }}>
              Reviews
            </Link>
          </li>
        </ul>
      </Info>

      <Outlet />
    </CardWrapper>
    );
}

export default MovieDetails