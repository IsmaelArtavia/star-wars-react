import React from "react";
import "../../styles/home.scss";
import CardList from "./CardList.jsx";
import PlanetsList from "./PlanetsList.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<CardList />
		<PlanetsList />
	</div>
);
