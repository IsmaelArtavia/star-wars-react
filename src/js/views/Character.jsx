import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/cards.scss";
const Character = props => {
	let [propiedades, setPropiedades] = useState({});
	let params = useParams();

	const { store, actions } = useContext(Context);
	let url;
	store.personas.map(element => {
		if (params.id === element.uid) {
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
	return (
		<div className="container character">
			<div className="row">
				<div className="col-6">
					<img src="https://via.placeholder.com/250" alt="" />
				</div>
				<div className="col-6">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nulla, accusantium quasi
						necessitatibus eveniet labore cumque ipsa libero accusamus, ipsum excepturi, facere repellendus
						assumenda possimus id! Tempore nemo quisquam ab!
					</p>
				</div>
			</div>
			<div className="propiedades">
				<div>
					Name: <br />
					{propiedades.name}
				</div>
				<div>
					Birth Year:
					<br />
					{propiedades.birth_year}
				</div>
				<div>
					Gender:
					<br />
					{propiedades.gender}
				</div>
				<div>
					Height:
					<br />
					{propiedades.height}
				</div>
				<div>
					Skin Color:
					<br /> {propiedades.skin_color}
				</div>
				<div>
					Eyes Color:
					<br /> {propiedades.eye_color}
				</div>
			</div>
		</div>
	);
};

export default Character;
