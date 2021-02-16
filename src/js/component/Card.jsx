import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/cards.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Card = props => {
	let [propiedades, setPropiedades] = useState({});
	const { store, actions } = useContext(Context);
	let url;
	store.personas.map(element => {
		if (props.id === element.uid) {
			url = element.url;
		}
	});
	useEffect(() => {
		fetch(url)
			.then(data => data.json())
			.then(data => {
				let properties = data.result.properties;
				setPropiedades(properties);
			});
	}, []);

	const handleClick = id => {
		let newObject = {};
		let newArray = [];
		store.personas.map(item => {
			if (item.uid === id) {
				newObject = { name: item.name, id: item.uid };
				actions.addFav(newObject);
			}
		});
	};
	return (
		<div className="card">
			<img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{propiedades.gender}</p>
				<Link to={`/character/${props.id}`}>
					<button className="btn btn-warning">Details</button>
				</Link>

				<button
					className="btn"
					onClick={() => {
						handleClick(props.id);
					}}>
					<i className="far fa-heart" />
				</button>
				{/* Genero, color de cabvello y color de ojos */}
			</div>
		</div>
	);
};
Card.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string
};
export default Card;
