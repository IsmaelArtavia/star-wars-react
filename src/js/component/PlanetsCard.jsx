import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/cards.scss";
import { Link, useParams } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { Context } from "../store/appContext.js";

const PlanetsCard = props => {
	let [propiedades, setPropiedades] = useState({});
	const { store, actions } = useContext(Context);
	//let url;
	//store.planetas.map(element => {
	//	if (props.id === element.uid) {
	//		url = element.url;
	//	}
	//});
	//useEffect(() => {
	//	fetch(url)
	//		.then(data => data.json())
	//		.then(data => {
	//			let properties = data.result.properties;
	//			setPropiedades(properties);
	//		});
	//}, []);
	let properties = store.planetas[props.id - 1];

	const handleClick = id => {
		let newObject = {};
		let newArray = [];
		store.planetas.map(item => {
			if (item.uid === id) {
				newObject = { name: item.name, id: item.uid };
				actions.addFav(newObject);
			}
		});
	};

	return (
		<div className="card">
			<img
				src="https://inteng-storage.s3.amazonaws.com/images/uploads/sizes/starwars-1_resize_md.jpg"
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
				<p className="card-text">Population: {properties.population}</p>
				<p className="card-text">Terrain: {properties.terrain}</p>
				<Link to={`/planet/${props.id}`}>
					<button className="btn btn-warning">Details</button>
				</Link>
				<button
					className="btn"
					onClick={() => {
						handleClick(props.id);
					}}>
					<i className="far fa-heart" />
				</button>

				{/* <button className="btn">
					<i className="far fa-heart" />
				</button> */}
				{/* Genero, color de cabvello y color de ojos */}
			</div>
		</div>
	);
};
PlanetsCard.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	url: PropTypes.string
};
export default PlanetsCard;
