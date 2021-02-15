import React from "react";
import PropTypes from "prop-types";
import "../../styles/cards.scss";
import { Link } from "react-router-dom";
const PlanetsCard = props => {
	return (
		<div className="card">
			<img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Some quic</p>
				<Link to={`/planet/${props.id}`}>
					<button className="btn btn-primary">Details</button>
				</Link>

				<button className="btn">
					<i className="far fa-heart" />
				</button>
				{/* Genero, color de cabvello y color de ojos */}
			</div>
		</div>
	);
};
PlanetsCard.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string
};
export default PlanetsCard;
