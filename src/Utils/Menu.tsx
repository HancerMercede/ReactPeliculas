import { NavLink } from "react-router-dom";

export default function Menu() {
    const ActiveClass = "active";
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" activeClassName={ActiveClass}
                    to="/">React Peliculas</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto me-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={ActiveClass}
                                to="/generos">
                                Géneros
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}