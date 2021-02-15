import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import PlanetsCard from "../component/PlanetsCard.jsx";
import "../../styles/cards.scss";
import shortid from "shortid";
const PlanetsList = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="card-container planets">
				<h1 className="title-characters">Planets</h1>
				{store.planetas.map(item => {
					return <PlanetsCard name={item.name} key={item.uid} id={item.uid} />;
				})}
			</div>
		</div>
	);
};

export default PlanetsList;
