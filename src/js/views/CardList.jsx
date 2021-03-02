import React, { useContext } from "react";
import shortid from "shortid";
import "../../styles/cards.scss";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext";

const CardList = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="card-container">
				<h1 className="title-characters">Characters</h1>
				{store.personas.map(item => {
					return <Card name={item.name} key={item.id} id={item.id} url={item.url} />;
				})}
			</div>
		</div>
	);
};

export default CardList;
