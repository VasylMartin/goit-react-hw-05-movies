import { NavLink } from "react-router-dom";

export const AppBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="/movies">Movies</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}