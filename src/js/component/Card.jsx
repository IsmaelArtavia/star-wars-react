import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/cards.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import Typewriter from "typewriter-effect";

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
			<img
				src="https://pm1.narvii.com/6211/943cf27fa773d5da8addbabc3a0c27476cd6a255_hq.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">
					<Typewriter
						className="brand"
						options={{
							strings: [props.name],
							autoStart: true,
							loop: true,
							delay: 200
						}}
					/>
				</h5>
				<p className="card-text">Gender: {propiedades.gender}</p>
				<p className="card-text">Hair Color: {propiedades.hair_color}</p>
				<p className="card-text">Eye Color: {propiedades.eye_color}</p>
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
