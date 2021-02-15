import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

const Personajes = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<ul>
				{store.personas.map((item, i) => {
					return <li key={item.uid}>{item.name}</li>;
				})}
			</ul>
			<ul>
				{store.planetas.map((item, i) => {
					return <li key={item.uid}>{item.name}</li>;
				})}
			</ul>
		</div>
	);
};

export default Personajes;
