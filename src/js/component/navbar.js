import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/cards.scss";
import logo from "./logo.jpg";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [displayfavs, setDisplayFavs] = useState(false);

	useEffect(
		() => {
			if (store.logged) {
				bringFavs();
			}
		},
		[store.logged]
	);
	const bringFavs = () => {
		let userId = sessionStorage.getItem("userId");
		let token = sessionStorage.getItem("token");
		fetch(`https://3000-fuchsia-finch-ukfmiw0c.ws-us03.gitpod.io/users/${userId}/favorites`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			}
			// body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				//console.log("Success:", data);
				let favPlanets = data.fav_planets;
				let favCharacters = data.fav_characters;
				if (favPlanets.length > 0) {
					actions.addFav(favPlanets);
				}
				if (favCharacters.length > 0) {
					actions.addFav(favCharacters);
				}
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};
	//console.log(store.likes);

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
						{store.likes &&
							store.likes.map((item, i) => {
								return (
									<li key={i}>
										<i className="fas fa-thumbs-up" />
										{item.name}
										<i
											onClick={e => {
												let userId = sessionStorage.getItem("userId");
												let token = sessionStorage.getItem("token");
												e.preventDefault();
												if (item.characterId) {
													actions.deleteFavCharacter(item.characterId, token, userId);
												} else {
													actions.deleteFavPlanet(item.planetId, token, userId);
												}
												console.log(item);
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
