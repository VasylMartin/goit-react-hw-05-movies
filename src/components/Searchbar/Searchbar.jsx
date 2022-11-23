import { useState } from "react";
import PropTypes from 'prop-types';

export const  Searchbar = ({value, onSubmit}) => {
    const [query, setQuery] = useState(value)

    const handleSubmit = e => {
        e.preventDefault();
        if (query.trim() === '') {
            return alert('You should to write something to search');
        }
        onSubmit(query);
        };

        const handleChange = e => {
            setQuery(e.currentTarget.value.toLowerCase());
            };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search_movie"></label>
                <input
                    type="text"
                    id="search_movie"
                    value={query}
                    onChange={handleChange}
                    placeholder="Enter movie's name ..."
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};