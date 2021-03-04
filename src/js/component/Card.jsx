import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/cards.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import Typewriter from "typewriter-effect";

const Card = props => {
	let [propiedades, setPropiedades] = useState({});
	const { store, actions } = useContext(Context);
	// let url;
	// store.personas.map(element => {
	// 	if (props.id === element.id) {
	// 		url = element.url;
	// 	}
	// });
	// useEffect(() => {
	// 	fetch(props.url)
	// 		.then(data => data.json())
	// 		.then(data => {
	// 			let properties = data;
	// 			setPropiedades(properties);
	// 		});
	// }, []);
	let properties = store.personas[props.id - 1];

	const handleClick = id => {
		let newObject = {};
		let newArray = [];
		store.personas.map(item => {
			if (item.id === id) {
				newObject = { type: item.type };
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
							strings: [properties.name],
							autoStart: true,
							loop: true,
							delay: 200
						}}
					/>
				</h5>
				<p className="card-text">Gender: {properties.gender}</p>
				<p className="card-text">Hair Color: {properties.hair_color}</p>
				<p className="card-text">Eye Color: {properties.eye_color}</p>
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
	id: PropTypes.number,
	url: PropTypes.string
};
export default Card;
