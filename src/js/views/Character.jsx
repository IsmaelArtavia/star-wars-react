import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/cards.scss";
const Character = props => {
	// let [propiedades, setPropiedades] = useState({});
	let params = useParams();
	let history = useHistory();
	const { store, actions } = useContext(Context);
	let param_number = parseInt(params.id);
	let propiedades = store.personas[param_number - 1];
	return (
		<div className="container character">
			<div className="row">
				<div className="col-6">
					<img
						src="https://pm1.narvii.com/6211/943cf27fa773d5da8addbabc3a0c27476cd6a255_hq.jpg"
						height="375px"
						width="350px"
						alt=""
					/>
				</div>
				<div className="col-6">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nulla, accusantium quasi
						necessitatibus eveniet labore cumque ipsa libero accusamus, ipsum excepturi, facere repellendus
						assumenda possimus id! Tempore nemo quisquam ab!
					</p>
					<button
						onClick={() => {
							history.goBack();
						}}
						className="btn btn-danger btn-block come">
						Come Back{" "}
					</button>
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
					Hair Color:
					<br /> {propiedades.hair_color}
				</div>
				<div>
					Eyes Color:
					<br /> {propiedades.eye_color}
				</div>
				<div className="tc" />
			</div>
		</div>
	);
};

export default Character;
