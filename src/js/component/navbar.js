import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/cards.scss";
import logo from "./logo.jpg";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [displayfavs, setDisplayFavs] = useState(false);

	return (
		<nav className="navbar fixed-top navbar-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={logo} height="50px" width="50px" />
				</span>
			</Link>
			{store.logged ? null : (
				<Link to="/ingresar">
					<button className="btn btn-block btn-primary">Ingresar</button>
				</Link>
			)}
			{store.logged ? (
				<div className="dropdown dropstart">
					<a
						className="btn btn-danger dropdown-toggle"
						href="#"
						role="button"
						id="dropdownMenuLink"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites <span id="likes-length">{store.likes.length}</span>
					</a>

					<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{store.likes.map((item, i) => {
							return (
								<li key={i}>
									<i className="fas fa-thumbs-up" />
									{item.name}
									<i
										onClick={e => {
											e.preventDefault();
											actions.deleteFav(item.id);
										}}
										className="fas fa-trash"
									/>
								</li>
							);
						})}
					</ul>
				</div>
			) : null}
		</nav>
	);
};
